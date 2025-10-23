"use client";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { umkmData } from "@/data/umkmData";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className=" grid  items-center justify-center min-h-screen  sm:p-20">
        {/* <DataTable data={data} /> */}
        <DataTable data={umkmData} />
      </div>
    </>
  );
}
