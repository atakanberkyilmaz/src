"use client";

import React from "react";
import Link from "next/link";
import "./globals.css";
import { useRadioContext } from "./contexts/RadioContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { currentStation, isPlaying, togglePlay } = useRadioContext();

  return (
    <html>
      <body>
    <div>
      <header className="w-full p-4 flex justify-between items-center border-b">
        <img src="/logo.nggmedya.png" alt="Logo" className="h-10" />
        <nav className="space-x-4">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
          <Link href="/radyo">Radyo</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-8 p-4 border-t text-center">
        <p>© 2024 NGG Medya. Tüm Hakları Saklıdır.</p>
      </footer>
      {currentStation && (
        <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
          <span>Çalan: {currentStation}</span>
          <button onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      )}
    </div>
    </body>
    </html>
  
  );
};

export default Layout;
