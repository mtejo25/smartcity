// src/Component/Navbar.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  textColorClass?: string; // Menambahkan prop untuk warna teks
}

// NavLink komponen yang menerima textColorClass
const NavLink: React.FC<NavLinkProps> = ({ href, children, hasDropdown, textColorClass = "text-gray-700" }) => (
  <Link href={href} className={`flex items-center ${textColorClass} hover:text-jakarta-blue font-medium px-4 py-2 relative group`}>
    {children}
    {hasDropdown && (
      <svg
        className={`w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:rotate-180 ${textColorClass}`} // SVG juga ikut berubah warna
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    )}
  </Link>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ubah nilai 50 ini sesuai kapan Anda ingin navbar berubah
      // Pastikan nilai ini konsisten dengan HeroSection jika ingin transisi sempurna
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tentukan path logo berdasarkan state isScrolled
  const logoSrc = isScrolled ? "/app-logo-color.png" : "/app-logo-white.png";
  // Tentukan kelas warna teks berdasarkan state isScrolled
  const textColor = isScrolled ? "text-gray-700" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc} // Menggunakan variabel logoSrc
            alt="Jakarta Smart City Logo"
            width={150} // Sesuaikan lebar
            height={40} // Sesuaikan tinggi
            priority
          />
        </Link>

        {/* Navigasi Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Meneruskan textColorClass ke NavLink */}
          <NavLink href="/tentang-kami" hasDropdown textColorClass={textColor}>Tentang Kami</NavLink>
          <NavLink href="/produk" hasDropdown textColorClass={textColor}>Produk</NavLink>
          <NavLink href="/cityhub" hasDropdown textColorClass={textColor}>CityHub</NavLink>
          <NavLink href="/publikasi" hasDropdown textColorClass={textColor}>Publikasi</NavLink>
          <NavLink href="/digitalisasi" textColorClass={textColor}>Digitalisasi</NavLink>
          <NavLink href="/kunjungan" textColorClass={textColor}>Kunjungan</NavLink>
          <NavLink href="/karir" textColorClass={textColor}>Karir</NavLink>
        </div>

        {/* Ikon Pencarian, Bahasa */}
        <div className="flex items-center space-x-4">
          {/* Ikon Pencarian - warna juga ikut berubah */}
          <button className={`${textColor} hover:text-jakarta-blue`}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>

          {/* Pilihan Bahasa - warna juga ikut berubah */}
          <div className={`flex items-center ${textColor} font-medium`}>
            <span className="cursor-pointer hover:text-jakarta-blue">EN</span>
            <span className="mx-1">|</span>
            <span className={`font-bold ${isScrolled ? 'text-jakarta-blue' : 'text-white'}`}>ID</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;