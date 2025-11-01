"use client";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import { umkmData } from "@/data/umkmData";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <div className="grid items-start min-h-screen gap-12 py-20 sm:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-6 flex-wrap-reverse">
          <div className="space-y-2 text-center lg:text-left grid place-content-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Temukan <span className="text-primary">UMKM</span> Terbaik di
              Sekitar Kita
            </h1>
            <p>
              Kenali pelaku usaha yang membangun ekonomi kecil dari lingkungan
              kita sendiri.
            </p>
          </div>
          <Image
            src={"/hero.png"}
            alt=""
            width={2000}
            height={2000}
            className="hidden lg:block rounded-md"
          />
        </div>
        {/* <DataTable data={data} /> */}
        <DataTable data={umkmData} />
      </div>
      <div className="text-secondary bg-secondary-foreground py-6">
        <h1 className="text-6xl text-primary md:text-8xl font-bold text-center">
          LokalKita
        </h1>
        <p className="text-center">&copy; LokalKita 2025</p>
      </div>
    </div>
  );
}
