"use client";

import { rankItem } from "@tanstack/match-sorter-utils";
import * as React from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheckFilled,
  IconDotsVertical,
  IconGripVertical,
  IconLayoutColumns,
  IconLoader,
  IconPlus,
  IconTrendingUp,
} from "@tabler/icons-react";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UMKM } from "@/data/umkmData";
import Link from "next/link";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Funnel, Heart, Search, Slice } from "lucide-react";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const multiFilter: FilterFn<UMKM> = (row, columnId, filterValue) => {
  if (!filterValue || filterValue.length === 0) return true;
  const cellValue = row.getValue(columnId);

  if (Array.isArray(cellValue)) {
    return cellValue.some((v) => filterValue.includes(v));
  }

  if (typeof cellValue === "string") {
    return filterValue.includes(cellValue);
  }

  return false;
};

export const columns: ColumnDef<UMKM>[] = [
  { accessorKey: "nama_usaha", header: "Nama Usaha" },
  { accessorKey: "jenis", header: "Jenis Usaha", filterFn: multiFilter },
  { accessorKey: "kategori", header: "Kategori", filterFn: multiFilter },
  { accessorKey: "nama_pemilik", header: "Pemilik" },
  { accessorKey: "tahun_berdiri", header: "Tahun Berdiri" },
  { accessorKey: "ratings.rata_rata", header: "Rating" },
  { accessorKey: "ratings.jumlah_review", header: "Jumlah Review" },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "pembayaran",
    header: "Riwayat Pembayaran",
    filterFn: multiFilter,
  },
  { accessorKey: "pengiriman", header: "Pengiriman", filterFn: multiFilter },
  { accessorKey: "alamat", header: "Alamat" },
  { accessorKey: "deskripsi", header: "Deskripsi" },
];

export function DataTable({ data: initialData }: { data: UMKM[] }) {
  const [data, setData] = React.useState(() => initialData);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [filters, setFilters] = React.useState({
    kategori: [] as string[],
    jenis: [] as string[],
    pembayaran: [] as string[],
    pengiriman: [] as string[],
    target_pelanggan: [] as string[],
    tahun_berdiri: [] as number[],
    rating: 0,
  });
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = React.useState("");

  const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false);
  const [favorites, setFavorites] = React.useState<string[]>([]);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("favorites");
      if (saved) setFavorites(JSON.parse(saved));
    } catch {
      console.error("Gagal memuat favorites dari localStorage");
    }
  }, []);

  React.useEffect(() => {
    try {
      const current = localStorage.getItem("favorites");
      const parsed = current ? JSON.parse(current) : [];
      if (JSON.stringify(parsed) !== JSON.stringify(favorites)) {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } catch {
      console.error("Gagal menyimpan favorites ke localStorage");
    }
  }, [favorites]);

  const fuzzyFilter = (text: string, search: string) => {
    const result = rankItem(text ?? "", search);
    return result.passed;
  };

  function toggleFilter(key: keyof typeof filters, value: string | number) {
    setFilters((prev) => {
      const current = prev[key] as any[];
      const exists = current.includes(value);
      const updated = exists
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  }

  const filteredData = React.useMemo(() => {
    return showFavoritesOnly
      ? data.filter((d) => favorites.includes(d.id?.toString() ?? ""))
      : data;
  }, [data, favorites, showFavoritesOnly]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
      globalFilter,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: (row, _columnId, filterValue) => {
      const search = filterValue.toLowerCase();
      const { nama_usaha, kategori, nama_pemilik, jenis } = row.original;
      return (
        fuzzyFilter(nama_usaha.toLowerCase(), search) ||
        fuzzyFilter(kategori.toLowerCase(), search) ||
        fuzzyFilter(jenis.toLowerCase(), search) ||
        fuzzyFilter(nama_pemilik.toLowerCase(), search)
      );
    },
    filterFns: {
      multiFilter,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  const allKategori = Array.from(new Set(data.map((d) => d.kategori))).sort();
  const allJenis = Array.from(new Set(data.map((d) => d.jenis))).sort();
  const allPembayaran = Array.from(
    new Set(data.flatMap((d) => d.pembayaran)),
  ).sort();
  const allPengiriman = Array.from(
    new Set(data.flatMap((d) => d.pengiriman)),
  ).sort();
  console.log(table.getAllColumns());

  const [open, setOpen] = React.useState<boolean>(false);

  function toggleFavorite(id?: string | number) {
    if (!id) return;
    const key = id.toString();
    setFavorites((prev) => {
      const updated = prev.includes(key)
        ? prev.filter((f) => f !== key)
        : [...prev, key];
      toast(
        prev.includes(key) ? "Dihapus dari favorit" : "Ditambahkan ke favorit",
      );
      return updated;
    });
  }

  return (
    <div className="flex flex-col px-4 lg:px-6">
      <div className="grid gap-4">
        <div className="flex gap-3">
          <InputGroup className="w-full">
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Cari UMKM"
              value={globalFilter ?? ""}
              onChange={(e) => {
                setGlobalFilter(e.target.value);
                table.setPageIndex(0);
              }}
            />
          </InputGroup>
          <Button
            variant={showFavoritesOnly ? "default" : "outline"}
            onClick={() => setShowFavoritesOnly((prev) => !prev)}
          >
            <Heart
              className={
                showFavoritesOnly
                  ? "text-rose-500 fill-rose-500"
                  : "text-rose-500"
              }
            />
            {showFavoritesOnly ? "Tampilkan Semua" : "Favorite"}
          </Button>

          <Button variant={"outline"} onClick={() => setOpen(!open)}>
            <Funnel /> Filter
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-3">
          {allKategori.map((kategori) => {
            const selected =
              (table.getColumn("kategori")?.getFilterValue() as string[]) ?? [];
            const isChecked = selected.includes(kategori);

            const handleClick = () => {
              const current =
                (table.getColumn("kategori")?.getFilterValue() as string[]) ??
                [];
              if (isChecked) {
                table
                  .getColumn("kategori")
                  ?.setFilterValue(current.filter((c) => c !== kategori));
              } else {
                table
                  .getColumn("kategori")
                  ?.setFilterValue([...current, kategori]);
              }
              table.setPageIndex(0);
            };

            return (
              <Button
                key={kategori}
                type="button"
                variant={isChecked ? "default" : "outline"}
                className={`text-sm px-3 py-1.5 transition-all ${
                  isChecked
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-muted/60"
                }`}
                onClick={handleClick}
              >
                {kategori}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-4">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent className="pt-4 space-y-6">
            {/* Kategori */}

            {/* Jenis */}
            <div>
              <h4 className="text-sm font-medium mb-2">Jenis Usaha</h4>
              <div className="flex flex-wrap gap-2">
                {allJenis.map((jenis) => {
                  const selected =
                    (table.getColumn("jenis")?.getFilterValue() as string[]) ??
                    [];
                  const isChecked = selected.includes(jenis);

                  const handleClick = () => {
                    const current =
                      (table
                        .getColumn("jenis")
                        ?.getFilterValue() as string[]) ?? [];
                    if (isChecked) {
                      table
                        .getColumn("jenis")
                        ?.setFilterValue(current.filter((c) => c !== jenis));
                    } else {
                      table
                        .getColumn("jenis")
                        ?.setFilterValue([...current, jenis]);
                    }
                    table.setPageIndex(0);
                  };

                  return (
                    <Button
                      key={jenis}
                      type="button"
                      variant={isChecked ? "default" : "outline"}
                      className={`text-sm px-3 py-1.5 transition-all ${
                        isChecked
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "hover:bg-muted/60"
                      }`}
                      onClick={handleClick}
                    >
                      {jenis}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Pembayaran */}
            <div>
              <h4 className="text-sm font-medium mb-2">Pembayaran</h4>
              <div className="flex flex-wrap gap-2">
                {allPembayaran.map((pembayaran) => {
                  const selected =
                    (table
                      .getColumn("pembayaran")
                      ?.getFilterValue() as string[]) ?? [];
                  const isChecked = selected.includes(pembayaran);

                  const handleClick = () => {
                    const current =
                      (table
                        .getColumn("pembayaran")
                        ?.getFilterValue() as string[]) ?? [];
                    if (isChecked) {
                      table
                        .getColumn("pembayaran")
                        ?.setFilterValue(
                          current.filter((c) => c !== pembayaran),
                        );
                      console.log(
                        table
                          .getColumn("pembayaran")
                          ?.setFilterValue(
                            current.filter((c) => c !== pembayaran),
                          ),
                      );
                    } else {
                      table
                        .getColumn("pembayaran")
                        ?.setFilterValue([...current, pembayaran]);
                    }
                    table.setPageIndex(0);
                  };
                  return (
                    <Button
                      key={pembayaran}
                      type="button"
                      variant={isChecked ? "default" : "outline"}
                      className={`text-sm px-3 py-1.5 transition-all ${
                        isChecked
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "hover:bg-muted/60"
                      }`}
                      onClick={handleClick}
                    >
                      {pembayaran}
                    </Button>
                  );
                })}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const visibleCells = row.getVisibleCells();
              const data = Object.fromEntries(
                visibleCells.map((cell) => [cell.column.id, cell.getValue()]),
              );

              return (
                <Card
                  key={row.id}
                  className="text-card justify-end isolate relative pb-0 overflow-hidden"
                  style={{
                    background: `top center / cover no-repeat url(${row.original.logo_umkm})`,
                  }}
                >
                  <CardHeader className="aspect-video">
                    <Button
                      onClick={() => toggleFavorite(row.original.id.toString())}
                      variant={"outline"}
                      className="text-gray-400 hover:text-rose-500 transition rounded-full justify-self-end"
                    >
                      <Heart
                        size={20}
                        className={
                          favorites.includes(row.original.id.toString())
                            ? "fill-rose-500 text-rose-500"
                            : "text-gray-400"
                        }
                      />
                    </Button>
                  </CardHeader>
                  <div className="absolute w-full -z-10 h-full blur- bg-linear-to-t from-black/90 via-35% via-black/50 to-50% to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 blur-out blur-lg"></div>
                  <CardContent className="my-4 md:my-6 overflow-hidden">
                    <div className="relative  overflow-hidden hover:h-auto">
                      <h3 className="text-lg font-semibold mb-1">
                        {row.original.nama_usaha}
                      </h3>
                      <Badge className="text-sm mb-2">
                        {row.original.kategori}
                      </Badge>
                      <p className="text-sm text-muted line-clamp-3 flex-1">
                        {row.original.deskripsi}
                      </p>

                      <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                        <span>
                          {row.original.tahun_berdiri
                            ? `Est. ${row.original.tahun_berdiri}`
                            : ""}
                        </span>
                        <span>{row.original.nama_pemilik || ""}</span>
                      </div>
                    </div>
                  </CardContent>
                  {/* <CardFooter className="gap-2">
                    <Button
                      className="flex-1 rounded-full"
                      variant="default"
                      asChild
                    >
                      <Link href={`/umkm/${row.original.id}`}>Detail</Link>
                    </Button>
                    
                  </CardFooter> */}
                </Card>
              );
            })
          ) : (
            <div className="text-center text-gray-500 py-12 col-span-full">
              No results.
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4">
        <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} selected.
        </div>

        <div className="flex w-full items-center gap-8 lg:w-fit">
          {/* Page navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <IconChevronLeft />
            </Button>

            <div className="text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <IconChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
