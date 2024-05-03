import React from "react";
import Card from "../components/Card";
import Roblox from "../components/Roblox";
import Navbar from "../components/Navbar";

export default function Beranda() {
  return (
    <React.Fragment>
      <Navbar />

      {/* searching */}
      
      {/* banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-lg shadow-lg text-center text-white">
        <h2 className="text-3xl font-semibold mb-2">Diskon Akhir Tahun!</h2>
        <p className="text-lg mb-4">
          Dapatkan diskon hingga 50% untuk semua produk!
        </p>
        <a
          href="#"
          className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-full inline-block"
        >
          Belanja Sekarang
        </a>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center gap-3">
        <Roblox />
        <Roblox />
        <Roblox />
      </div>
      {/* konten tambahan */}
      <div className="text-center bg-slate-500">
        <h2 className="font-bold p-2">produk unggulan</h2>
        <p className="from-neutral-500 p-4">
          dengan belanja disini dapatkan kupon diskon tiap item
        </p>
        <div className="flex items-center justify-center gap-3 py-2 hover: hover:-translate-y-2 shadow-xl">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* sponsor */}
      <div className="text-center bg-slate-800">
        <h1 className="font-bold">sponsor</h1>
        <div className="flex-auto py-2">
          <h3>oppo</h3>
          <h3>xiaomi</h3>
          <h3>samsung</h3>
          <h3>infinix</h3>
        </div>
      </div>
      {/* footer */}
      <footer className=" bg-black text-white py-8 fixed-bottom bottom-0 w-full">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
          <ul className="flex mb-4">
            <li className="mr-6">
              <a href="#" className="hover:text-gray-400">
                Tentang Kami
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-400">
                Bantuan
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-400">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
          <p className="text-sm">&copy; 2024 Buka lapak. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </React.Fragment>
  );
}
