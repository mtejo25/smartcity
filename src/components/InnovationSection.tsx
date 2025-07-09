// src/Component/InnovationSection.tsx
"use client"; // Diperlukan untuk useState, useRef, dan useEffect
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface InnovationCardProps {
  imageSrc: string;
  title: string;
  link?: string; // Link opsional
}

const InnovationCard: React.FC<InnovationCardProps> = ({ imageSrc, title, link }) => {
  return (
    <div className="flex-none w-60 bg-white rounded-xl shadow-md flex flex-col items-center justify-between text-center mx-3 transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer border border-blue-100">
      <div className="relative bg-blue-700 rounded-t-xl w-full h-64 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={180} // Sesuaikan lebar gambar ponsel agar pas di kartu
          height={180} // Sesuaikan tinggi gambar ponsel
          className="w-full"
        />
      </div>
      <div className="bg-white py-4">
      <h3 className="text-md font-normal text-gray-800 mb-2">{title}</h3>
    </div>
    </div>
  );
};

const InnovationSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const innovationsData = [
    {
      imageSrc: "/jaki-app.png", // Ganti dengan path gambar Anda
      title: "JAKI Apps",
      link: "/inovasi/jaki-apps",
    },
    {
      imageSrc: "/jaki-app.png", // Ganti dengan path gambar Anda
      title: "CRM",
      link: "/inovasi/crm",
    },
    {
      imageSrc: "/jaki-app.png", // Ganti dengan path gambar Anda
      title: "Future City Hub",
      link: "/inovasi/future-city-hub",
    },
    {
      imageSrc: "/jaki-app.png", // Ganti dengan path gambar Anda
      title: "Jurnal",
      link: "/inovasi/jurnal",
    },
    {
      imageSrc: "/jaki-app.png", // Ganti dengan path gambar Anda
      title: "Pantau Banjir",
      link: "/inovasi/pantau-banjir",
    },
    {
      imageSrc: "/jaki-app.png", // Tambahkan lebih banyak jika ada
      title: "Aplikasi Lain",
      link: "/inovasi/lain",
    },
    // Tambahkan lebih banyak data inovasi di sini
  ] as const; // Penting untuk inferensi tipe

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2; // Scroll setengah lebar container
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const checkScrollButtons = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // Memberikan sedikit toleransi untuk scrollRight agar tombol tidak hilang terlalu cepat
        setCanScrollLeft(scrollLeft > 5); // scrollLeft > 0 berarti bisa scroll kiri
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5); // scrollLeft + clientWidth < scrollWidth berarti belum di ujung kanan
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Panggil saat mount untuk inisialisasi status tombol

      // Observer untuk mendeteksi resize jika layout berubah dan mempengaruhi scrollability
      const resizeObserver = new ResizeObserver(checkScrollButtons);
      resizeObserver.observe(currentRef);

      return () => {
        currentRef.removeEventListener('scroll', checkScrollButtons);
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <section className="bg-blue-50 py-16 md:py-24"> {/* Latar belakang biru muda */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Inovasi di JSC</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </p>

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll no-scrollbar py-4 px-3 -mx-3 scroll-smooth snap-x snap-mandatory"
          >
            {innovationsData.map((innovation, index) => (
              <InnovationCard key={index} {...innovation} />
            ))}
          </div>

          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white p-3 rounded-full shadow-md z-30 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-jakarta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white p-3 rounded-full shadow-md z-30 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-jakarta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;