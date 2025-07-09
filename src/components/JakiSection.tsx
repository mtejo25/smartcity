// src/Component/JakiSection.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';

const JakiSection: React.FC = () => {
  return (
    // Mengubah background section menjadi gradien radial dari kiri tengah
    // agar sisi kiri lebih gelap untuk teks
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-r from-[#0A2647] via-[#144272] to-[#1A3A5D] text-white"> 
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Konten Teks */}
        <div className="md:w-1/2 text-center md:text-left relative z-10">
          {/* Warna teks disesuaikan untuk latar belakang yang lebih gelap di kiri */}
          <p className="text-lg md:text-xl font-medium text-blue-300 mb-2">Produk Kami</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            JAKI <span className="text-blue-400">#BikinGampang</span> <br className="hidden md:block"/> Aktivitas di Jakarta
          </h2>
          <Link
            href="/jaki"
            className="inline-flex items-center bg-white text-[#0A2647] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300 group"
          >
            Pelajari Lebih Lanjut
            <svg
              className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </Link>
        </div>

        {/* Gambar Ponsel JAKI Container */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
          <div className="relative w-[800px] h-[800px] max-w-full"> {/* Ukuran container diperbesar lagi */}
            <Image
              src="/jaki-phone.png" // Gambar ponsel
              alt="JAKI App on Phone"
              fill
              className="object-contain object-center absolute"
            />
            {/* Gradien untuk menutupi bagian bawah ponsel/tangan */}
            {/* Warna gradien disesuaikan agar sama dengan warna akhir dari gradien section */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1A3A5D] to-transparent z-20"></div> 
          </div>
        </div>
      </div>
      
      {/* Bentuk lingkaran abstrak di sudut kiri bawah */}
      <div className="absolute bottom-[-100px] left-[-100px] w-60 h-60 rounded-full border-2 border-blue-500 opacity-20 z-0"></div>
    </section>
  );
};

export default JakiSection;