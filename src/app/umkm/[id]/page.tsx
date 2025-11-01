"use client";
// src/pages/DetailUMKMPage.tsx
// import { useParams } from "react-router-dom";
import { useParams } from "next/navigation";
import { umkmData } from "@/data/umkmData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowLeftCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

export default function DetailUMKMPage() {
  const { id } = useParams<{ id: string }>();
  const umkm = umkmData.find((item) => item.id === id);

  if (!umkm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-semibold text-secondary-foreground">
          UMKM tidak ditemukan
        </h1>
        <p className="text-foreground mt-2">
          Periksa kembali ID yang kamu akses.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 border-b bg-background flex items-center">
          <Link
            href={"/"}
            className="flex items-center gap-2 text-foreground hover:text-secondary-foreground transition"
          >
            <ArrowLeft />
            <span>Kembali</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-background flex items-center justify-center">
            <Image
              src={umkm.logo_umkm}
              alt={umkm.nama_usaha}
              height={2000}
              width={2000}
              className="object-cover w-48 h-48 m-6 rounded-xl"
            />
          </div>

          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-secondary-foreground mb-2">
              {umkm.nama_usaha}
            </h1>
            <p className="text-foreground italic mb-2">{umkm.jenis}</p>
            <p className="text-secondary-foreground mb-4">{umkm.deskripsi}</p>

            <div className="flex flex-wrap gap-3 text-sm text-foreground">
              <p>Tahun berdiri: {umkm.tahun_berdiri}</p>
              <p>• Pemilik: {umkm.nama_pemilik}</p>
              <p>
                • Rating: ⭐ {umkm.ratings.rata_rata} (
                {umkm.ratings.jumlah_review} ulasan)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-4">
            Produk Unggulan
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {umkm.nama_produk.map((produk, index) => (
              <div key={index} className="bg-background rounded-xl shadow p-4">
                <img
                  src={produk.foto}
                  alt={produk.nama}
                  className="object-cover w-full h-40 rounded-lg mb-3"
                />
                <h3 className="font-semibold">{produk.nama}</h3>
                <p className="text-sm text-foreground mt-1">
                  Rp{produk.harga.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">
            Alamat
          </h2>
          <p className="text-secondary-foreground">
            {umkm.alamat.nama_jalan} No. {umkm.alamat.nomor}, {umkm.alamat.kota}
            , {umkm.alamat.kode_pos}
          </p>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">
            Jam Operasional
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-secondary-foreground">
            {umkm.operasional.map((op, i) => (
              <p key={i}>
                {op.hari.charAt(0).toUpperCase() + op.hari.slice(1)}:{" "}
                {op.operasional ? op.jam : "Tutup"}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t p-6">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">
            Sosial Media
          </h2>
          <ul className="text-secondary-foreground">
            {Object.entries(umkm.sosial_media).map(([platform, handle], i) => (
              <li key={i}>
                <span className="capitalize">{platform}: </span>
                <a
                  href={`https://${handle.replace("@", "instagram.com/")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {handle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t p-6 text-sm text-foreground text-right">
          Terdaftar sejak {umkm.tanggal_dibuat.hari} {umkm.tanggal_dibuat.bulan}{" "}
          {umkm.tanggal_dibuat.tahun} • {umkm.tanggal_dibuat.jam}
        </div>
      </div>
    </div>
  );
}
