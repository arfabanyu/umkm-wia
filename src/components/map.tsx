import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View, Overlay } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";

type UMKMMapProps = {
  lat: number;
  lng: number;
  nama: string;
};

export default function UMKMMap({ lat, lng, nama }: UMKMMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

    const coord = fromLonLat([lat, lng]); // pastikan urutannya [lng, lat]

    // marker
    const marker = new Feature({
      geometry: new Point(coord),
      name: nama,
    });
    marker.setStyle(
      new Style({
        image: new Icon({
          src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          scale: 0.05,
          anchor: [0.5, 1],
        }),
      }),
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    // overlay popup
    const popup = new Overlay({
      element: popupRef.current,
      positioning: "bottom-center",
      stopEvent: false,
      offset: [0, -20],
    });

    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: coord,
        zoom: 16,
      }),
      overlays: [popup],
    });

    // klik marker untuk tampilkan popup
    map.on("singleclick", (evt) => {
      map.forEachFeatureAtPixel(evt.pixel, (feature) => {
        if (feature === marker) {
          popup.setPosition(coord);
          popupRef.current!.innerHTML = `<div style="background:white;padding:5px;border:1px solid #ccc;border-radius:4px">${nama}</div>`;
        }
      });
    });

    return () => map.setTarget(undefined);
  }, [lat, lng, nama]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
      <div ref={popupRef} style={{ position: "absolute" }} />
    </div>
  );
}
