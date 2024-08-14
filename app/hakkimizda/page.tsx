"use client";

import React from "react";
import Layout from "../layout";
import { RadioProvider } from "../contexts/RadioContext";

export default function Hakkimizda() {
  return (
    
    <Layout>
      <div className="flex flex-col items-center justify-center px-4 py-8 text-left">
        <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
        <p className="mb-4">
          NGG MEDYA, Almanya'da yaşayan Türk toplumunun günlük hayatını
          kolaylaştırmak ve ihtiyaç duyduğu hizmetleri tek bir platformda toplamak amacıyla
          kurulmuş bir medya ve hizmet sağlayıcı platformdur. Misyonumuz, geniş hizmet
          yelpazesiyle toplumumuzun her kesimine güvenilir ve hızlı çözümler sunmaktır.
        </p>
        <h2 className="text-2xl font-bold mb-2">Misyonumuz:</h2>
        <p className="mb-4">
          Toplumumuzun bilgiye, hizmete ve eğlenceye kolayca erişimini sağlayarak
          yaşam kalitesini artırmak.
        </p>
        <h2 className="text-2xl font-bold mb-2">Hedef Kitlemiz:</h2>
        <p className="mb-4">
          Almanya'da yaşayan Türk toplumu ve ihtiyaç duydukları çeşitli hizmetleri arayan herkes.
        </p>
        <h2 className="text-2xl font-bold mb-2">Hizmetlerimiz:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Radyo: Türkçe müzik, haber ve eğlence programlarıyla kültürümüzü yaşatıyoruz.</li>
          <li>Haberler: Türkiye ve dünyadan güncel ve tarafsız haberler sunuyoruz.</li>
          <li>Ustaları Bulma: İhtiyacınız olan ustaları kolayca bulmanıza yardımcı oluyoruz.</li>
          <li>İşçi Bulma: İş arayanlar ve işverenleri bir araya getiriyoruz.</li>
          <li>Son Dakika Haberleri: En önemli gelişmeleri anında öğrenmenizi sağlıyoruz.</li>
          <li>Firmalar Birbirine Ulaştırma: İş dünyasındaki firmaların iletişim kurmalarını kolaylaştırıyoruz.</li>
          <li>Emlak: Almanya'daki emlak ilanlarını takip edebileceğiniz bir platform sunuyoruz.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Tarihçemiz:</h2>
        <p className="mb-4">
          NGG MEDYA olarak, Almanya'da yaşayan Türk toplumuna yönelik kaliteli ve
          güvenilir hizmetler sunma hedefiyle yola çıktık. Bugün, binlerce kullanıcıya
          ulaşmanın gururunu yaşıyoruz.
        </p>
        <h2 className="text-2xl font-bold mb-2">Neden Bizi Tercih Etmelisiniz?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Güvenilir ve tarafsız bilgi</li>
          <li>Kullanıcı dostu platform</li>
          <li>Geniş hizmet yelpazesi</li>
          <li>Topluma değer katma hedefi</li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Ekip Tanıtımı:</h2>
        <p className="mb-4">
          Uzman ekibimiz, sizlere en iyi hizmeti sunmak için özveriyle çalışmaktadır.
          Alanında deneyimli profesyonellerden oluşan ekibimizle gurur duyuyoruz.
        </p>
        <h2 className="text-2xl font-bold mb-2">Güven ve İtibar:</h2>
        <p className="mb-4">
          Kullanıcılarımızın güvenini kazanmak ve ihtiyaçlarına en uygun çözümleri sunmak
          için sürekli olarak kendimizi geliştiriyor ve hizmet kalitemizi artırıyoruz.
        </p>
      </div>
    </Layout>
    
  );
}
