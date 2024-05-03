import Card from "./components/Card";
import Roblox from "./components/Roblox";

export default function App() {


  return (
    // navbarr
    <body>
      <div className='bg-gray-500 flex justify-between p-6'>
        <h1 className="font-bold">buka lapak</h1>
        <ol className='flex items-center gap-3'>
          <li className="hover:bg-white">home</li>
          <li className="hover:bg-white">product</li>
          <li className="hover:bg-white">about</li>
        </ol>
   </div>

{/* searching */}
<div class="flex items-center">
  <input type="text" class="w-full border rounded py-2 px-3" placeholder="Cari..."/>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cari</button>
</div>


   {/* banner */}
   <div class="bg-gradient-to-r from-blue-500 to-indigo-500 p-8 rounded-lg shadow-lg text-center text-white">
  <h2 class="text-3xl font-semibold mb-2">Diskon Akhir Tahun!</h2>
  <p class="text-lg mb-4">Dapatkan diskon hingga 50% untuk semua produk!</p>
  <a href="#" class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-full inline-block">Belanja Sekarang</a>
  </div>
 
 
 <div className='flex items-center justify-center gap-3'>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>   
<div className='flex items-center justify-center gap-3'>
<Roblox/>
<Roblox/>
<Roblox/>
</div>

{/* konten tambahan */}
<div class='text-center bg-slate-500'>
  <h2 class='font-bold p-2'>produk unggulan</h2>
  <p class='from-neutral-500 p-4'>dengan belanja disini dapatkan kupon diskon tiap item</p>
<div class='flex items-center justify-center gap-3'> 
<Card/>
<Card/>
<Card/>
</div>
</div>

{/* sponsor */}
<div class='text-center'>
  <h1 class='font-bold'>sponsor</h1>
<div class='flex-auto'>
<h3>oppo</h3>
<h3>xiaomi</h3>
<h3>samsung</h3>
<h3>infinix</h3>
</div>
</div>

{/* footer */}
<footer class="bg-gray-800 text-white py-8 fixed-bottom bottom-0 w-full">
  <div class="container mx-auto flex flex-col items-center">
    <h2 class="text-2xl font-semibold mb-4">Hubungi Kami</h2>
    <ul class="flex mb-4">
      <li class="mr-6">
        <a href="#" class="hover:text-gray-400">Tentang Kami</a>
      </li>
      <li class="mr-6">
        <a href="#" class="hover:text-gray-400">Bantuan</a>
      </li>
      <li class="mr-6">
        <a href="#" class="hover:text-gray-400">Kebijakan Privasi</a>
      </li>
    </ul>
    <p class="text-sm">&copy; 2024 Buka lapak. Hak Cipta Dilindungi.</p>
  </div>
</footer>



 </body>
  
  
   
  )
}