import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between p-6 items-center">
      <h1 className="font-bold text-xl text-blue-500">buka lapak</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="w-full border-[1.5px] border-gray-300 rounded-md py-2 px-3 outline-none"
            placeholder="Cari..."
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Cari
          </button>
        </div>
        {/* links */}
        <a href="#" className="hover:bg-white">
          home
        </a>
        <a href="#" className="hover:bg-white">
          product
        </a>
        <a href="#" className="hover:bg-white">
          about
        </a>
      </div>
    </div>
  );
}
