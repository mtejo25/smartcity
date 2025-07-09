// src/Component/Footer.tsx
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Mail, Phone, MoveUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Bagian Atas Footer (3 Kolom Utama) */}
        <div className="flex flex-col md:flex-row md:justify-between gap-y-10 md:gap-y-0 md:gap-x-12 mb-12">
          {/* Kolom 1: Logo JSC & DKI */}
          <div className="flex flex-col items-center md:items-start md:w-1/4">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/jakarta-smart-city.png" // Path logo JSC
                alt="Jakarta Smart City Logo"
                width={120} // Sesuaikan lebar
                height={32} // Sesuaikan tinggi
              />
              <Image
                src="/pemprov-dki.png" // Path logo DKI Jakarta
                alt="Logo DKI Jakarta"
                width={60}
                height={60}
              />
            </div>
            {/* Teks Deskripsi Singkat di bawah logo jika ada (tidak jelas di gambar) */}
            {/* <p className="text-sm text-gray-600">Deskripsi singkat JSC jika ada.</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-12 pt-8 border-t border-gray-200">
          {/* Kolom 1 (dari grid 3 kolom): Alamat Kantor & Kontak */}
          <div className="relative text-left">
            {/* Judul Alamat Kantor dengan Ikon di sampingnya */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4"> {/* Menggunakan gap-2 untuk jarak ikon & teks */}
              <MapPin /> {/* Ikon Lokasi */}
              <h3 className="font-bold text-lg">Alamat Kantor</h3>
            </div>
            
            {/* Paragraf Alamat */}
            <p className="text-base text-gray-600 mb-6 pl-7 md:pl-0"> {/* pl-7 untuk sejajar dengan ikon di atasnya */}
              Gedung Balai Kota DKI Jakarta Jl Medan Merdeka Selatan, No.<br />
              8-9, RT 11/RW 2, Kecamatan Gambir, Kota Jakarta Pusat, Daerah<br />
              Khusus Ibukota Jakarta 10110
            </p>

            {/* Email dan Telepon dalam satu flex container di desktop */}
            <div className="flex flex-col md:flex-row md:space-x-8 md:justify-start"> {/* space-x-8 untuk jarak horisontal */}
              {/* Email */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-0"> {/* gap-2 untuk ikon & teks */}
                <Mail /> {/* Ikon Email */}
                <Link href="mailto:smartcity@jakarta.go.id" className="text-jakarta-blue hover:underline">
                  smartcity@jakarta.go.id
                </Link>
              </div>
              {/* Telepon */}
              <div className="flex items-center justify-center md:justify-start gap-2"> {/* gap-2 untuk ikon & teks */}
                <Phone /> {/* Ikon Telepon */}
                <Link href="tel:+62213822255" className="text-jakarta-blue hover:underline">
                  (021) 3822255
                </Link>
              </div>
            </div>

            {/* Ikon Panah ke atas */}
            <div className="">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute top-0 right-0 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors hidden md:block"
            >
              <MoveUp />
            </button>
            </div>
          </div>
          </div>

          
        </div>

        {/* Bagian Tengah Footer (Dropdown Bahasa & Sosial Media) */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-200 gap-y-6 md:gap-y-0">
          {/* Dropdown Bahasa */}
          <div className="relative inline-block text-left">
            <select
              className="block appearance-none bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 pr-8 rounded-lg shadow-sm leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Bahasa Indonesia</option>
              <option>English</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          {/* Temukan Kami di Sosial Media */}
          <div className="text-left">
            <h3 className="font-bold text-lg mb-3">Temukan kami di sosial media</h3> {/* Tampilkan hanya di mobile */}
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://instagram.com/jakartasmartcity" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-jakarta-blue">
                {/* Ikon Instagram */}
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.71.01 3.65.04 1.34.05 2.19.2 2.76.41.67.24 1.12.56 1.54.99.43.42.75.87.99 1.54.21.57.36 1.42.41 2.76.03.94.04 1.22.04 3.65s-.01 2.71-.04 3.65c-.05 1.34-.2 2.19-.41 2.76-.24.67-.56 1.12-.99 1.54-.42.43-.87.75-1.54.99-.57.21-1.42.36-2.76.41-.94.03-1.22.04-3.65.04s-2.71-.01-3.65-.04c-1.34-.05-2.19-.2-2.76-.41-.67-.24-1.12-.56-1.54-.99-.43-.42-.75-.87-.99-1.54-.21-.57-.36-1.42-.41-2.76-.03-.94-.04-1.22-.04-3.65s.01-2.71.04-3.65c.05-1.34.2-2.19.41-2.76.24-.67.56-1.12.99-1.54.43-.42.87-.75 1.54-.99.57-.21 1.42-.36 2.76-.41.94-.03 1.22-.04 3.65-.04zM12 7.71a4.29 4.29 0 100 8.58 4.29 4.29 0 000-8.58zm0 7.02a2.73 2.73 0 110-5.46 2.73 2.73 0 010 5.46zm6.81-8.51a1.27 1.27 0 100 2.54 1.27 1.27 0 000-2.54z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="https://youtube.com/user/jakartasmartcity" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-jakarta-blue">
                {/* Ikon YouTube */}
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.82 4.49A2.99 2.99 0 0017.51 2c-1.95 0-3.9 0-5.85 0s-3.9 0-5.85 0A2.99 2.99 0 004.18 4.49C2.96 5.8 2 7.9 2 12s.96 6.2 2.18 7.51A2.99 2.99 0 006.49 22c1.95 0 3.9 0 5.85 0s3.9 0 5.85 0A2.99 2.99 0 0019.82 19.51c1.22-1.31 2.18-3.41 2.18-7.51s-.96-6.2-2.18-7.51zM9.8 15.65v-7.3l5.2 3.65-5.2 3.65z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="https://facebook.com/jakartasmartcity" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-jakarta-blue">
                {/* Ikon Facebook */}
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.9 3.59 8.97 8.32 9.7V15.7h-2.54V12h2.54V9.7c0-2.5 1.54-3.87 3.76-3.87 1.1 0 2.06.08 2.34.12v2.7h-1.63c-1.28 0-1.53.61-1.53 1.5V12h3.06l-.4 3.7h-2.66v5.8C18.41 20.97 22 16.9 22 12z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="https://twitter.com/jakartasmartcity" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-jakarta-blue">
                {/* Ikon Twitter/X */}
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-6.768-8.89L2.592 22H0l8.124-10.605L0 2.25h3.308l5.976 7.66L18.244 2.25zm-3.586 1.34l-6.49 8.536L3.423 20.75h2.17l5.419-7.126 6.49-8.536h-2.17z" /></svg>
              </Link>
            </div>
          </div>

          {/* Kolom 3: Unduh JAKI */}
          <div className="md:w-1/4 text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Unduh JAKI</h3>
            <div className="flex flex-row items-center md:items-start space-y-3">
              <Link href="https://play.google.com/store/apps/details?id=id.go.jakarta.smartcity" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  width={150}
                  height={45}
                  
                />
              </Link>
              <Link href="https://apps.apple.com/us/app/jaki-jakarta-kini/id1452656919" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/app-store.png"
                  alt="App Store"
                  width={150}
                  height={45}
                  
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Bawah Footer (Copyright Bar) */}
      <div className="bg-[#002E69] text-white py-4 text-center text-sm mt-8"> {/* Latar belakang biru gelap */}
        <div className="container mx-auto px-4">
          Hak cipta © 2021 JSC. Seluruh hak cipta dilindungi undang-undang dan terdaftar pada Direktorat Jenderal Kekayaan Intelektual Republik Indonesia.
        </div>
      </div>
    </footer>
  );
};

export default Footer;