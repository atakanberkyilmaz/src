"use client";

import React from "react";
import Layout from "./layout";
import { RadioProvider } from "./contexts/RadioContext";

export default function Home() {
  return (
    <RadioProvider>
      <Layout>
        <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
          <h1 className="text-6xl font-bold mb-4">Almanya'nın En Büyük Rehberine Hoşgeldiniz</h1>
          <p className="text-lg mb-6">
            Almanya'nın en büyük ve en kapsamlı rehberine hoş geldiniz! İhtiyacınız olan hizmetler,
            aradığınız firmalar, dinlemek istediğiniz şarkılar ve daha fazlası, NGG Medya'da!
          </p>
          <div className="flex justify-center space-x-10 mb-10">
            <div>
              <h2 className="text-4xl font-bold">999 +</h2>
              <p>HABER</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">30 +</h2>
              <p>USTA</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">50 +</h2>
              <p>FİRMA</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">8</h2>
              <p>RADYO</p>
            </div>
          </div>
          <img src="/logo.nggmedya.png" alt="Logo" className="h-64 w-64 mb-10" />
        </div>
      </Layout>
    </RadioProvider>
  );
}
