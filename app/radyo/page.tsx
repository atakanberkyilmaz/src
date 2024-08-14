"use client";

import React, { useEffect } from "react";
import { useRadioContext } from "../contexts/RadioContext";

export default function Radyo() {
  const { currentStation, isPlaying, playStation } = useRadioContext();

  // useEffect ile hangi istasyonun seçildiğini ve ses oynatım durumunu kontrol ediyoruz
  useEffect(() => {
    console.log("Current Station:", currentStation);
    console.log("Is Playing:", isPlaying);
  }, [currentStation, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Radyo</h1>
      <p className="text-lg mb-6">
        NGG FM'de en güncel ve en yeni şarkılar çalıyor. Canlı yayınları,
        dinleyicilere son dakika haberleri ve eğlenceli programlarla dolu bir
        deneyim için siz de bizi dinleyin!
      </p>
      <ul className="mt-6 space-y-4 text-left">
        {[
          {
            name: "Sıla Yolu FM",
            url: "https://limitsiz.kesintisizyayin.com/8002/stream1",
          },
          { name: "Pop", url: "https://limitsiz.kesintisizyayin.com/8004/stream1" },
          { name: "Slow", url: "https://limitsiz.kesintisizyayin.com/8076/stream1" },
          {
            name: "Nostalji",
            url: "https://limitsiz.kesintisizyayin.com/8074/stream1",
          },
        ].map((station) => (
          <li key={station.name} className="flex justify-between items-center w-64 mx-auto">
            <span>{station.name}</span>
            <button
              onClick={() => playStation(station.url)}
              className={`p-2 rounded-full border text-orange-500 ${
                currentStation === station.url && isPlaying
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-orange-500"
              }`}
            >
              {currentStation === station.url && isPlaying ? "⏸" : "▶"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
