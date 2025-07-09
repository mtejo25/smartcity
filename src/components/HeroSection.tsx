// src/Component/HeroSection.tsx
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-50 relative w-full h-[600px] md:h-screen flex items-end justify-start text-white overflow-hidden pb-16 md:pb-24">
      <Image
        src="/hero-bg.png" // Ganti dengan path gambar latar belakang Anda
        alt="Jakarta Cityscape"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Overlay gradien, disesuaikan agar lebih gelap di bagian bawah */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div> 
      
      {/* Container untuk teks, diposisikan di kiri bawah */}
      <div className="relative z-20 px-4 md:px-52 max-w-4xl text-left"> {/* Menambah padding kiri/kanan dan max-width */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Selamat Datang di Masa Depan Jakarta
        </h1>
        <p className="text-lg md:text-xl font-light">Terbaru dari Jakarta Smart City</p>
      </div>
    </section>
  );
};

export default HeroSection;