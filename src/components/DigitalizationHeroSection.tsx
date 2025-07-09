// src/Component/DigitalizationHeroSection.tsx
import Image from 'next/image';

const DigitalizationHeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-screen flex items-end justify-start text-white overflow-hidden pb-16 md:pb-24">
      <Image
        src="/digitalisasi-hero-bg.jpg" // Ganti dengan path gambar hero halaman digitalisasi Anda
        alt="Sosialisasi Digitalisasi"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay agar teks lebih terbaca */}
      <div className="relative z-20 px-4 md:px-52 max-w-4xl text-left"> {/* Menambah padding kiri/kanan dan max-width */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Sosialisasi
        </h1>
        <p className="text-lg md:text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
      </div>
   
    </section>
  );
};

export default DigitalizationHeroSection;