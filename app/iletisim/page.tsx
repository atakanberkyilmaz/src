"use client";

import React from "react";
import Layout from "../layout";
import { RadioProvider } from "../contexts/RadioContext";

export default function Iletisim() {
  return (
    
    <Layout>
      <div className="flex flex-col items-center justify-center px-4 py-8 text-left">
        <h1 className="text-4xl font-bold mb-4">İletişim</h1>
        <div className="mb-6">
          <p><strong>Adres:</strong> Turgutreis Mah. Silifke Cd. Oral Apt. No:108/1 Akdeniz/Mersin</p>
          <p><strong>E-Posta:</strong> info@sec-im.com</p>
          <p><strong>Telefon:</strong> +90 324 408 1555</p>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Adınız Soyadınız
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Adınızı Soyadınızı Giriniz" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Email Adresinizi Giriniz" />
            </div>
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
              Mesaj
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message" placeholder="Mesajınızı Giriniz" />
          </div>
          <div className="w-full px-3">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </Layout>
    
  );
}
