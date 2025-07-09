// src/Component/GallerySection.tsx
"use client"; // Diperlukan untuk useState, useRef, dan useEffect
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface GalleryCardProps {
  imageSrc: string;
  title: string;
  date: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ imageSrc, title, date }) => {
  return (
    <div className="flex-none w-80 md:w-[360px] lg:w-[400px] bg-white rounded-lg shadow-md overflow-hidden text-center mx-4">
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio untuk gambar */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
        />
        {/* Placeholder untuk ikon play, jika gambar galeri juga bisa berupa video */}
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300">
          <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
        
      </div>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const galleryData = [
    {
      imageSrc: "/gallery-jakarta-traffic.jpg", // Ganti dengan path gambar Anda
      title: "Highlight Jakarta Dalam Sepekan",
      date: "25 - 31 Desember 2023"
    },
    {
      imageSrc: "/gallery-jakarta-traffic.jpg",
      title: "Highlight Jakarta Dalam Sepekan",
      date: "25 - 31 Desember 2023"
    },
    {
      imageSrc: "/gallery-jakarta-traffic.jpg",
      title: "Highlight Jakarta Dalam Sepekan",
      date: "25 - 31 Desember 2023"
    },
    {
      imageSrc: "/gallery-jakarta-traffic.jpg",
      title: "Highlight Jakarta Dalam Sepekan",
      date: "25 - 31 Desember 2023"
    },
    // Tambahkan lebih banyak item galeri di sini
  ] as const;

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
        setCanScrollLeft(scrollLeft > 5); // Toleransi 5px
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5); // Toleransi 5px dari ujung
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Cek posisi awal

      const resizeObserver = new ResizeObserver(checkScrollButtons);
      resizeObserver.observe(currentRef);

      return () => {
        currentRef.removeEventListener('scroll', checkScrollButtons);
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">Galeri</h2>

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll no-scrollbar py-4 px-4 -mx-4 scroll-smooth snap-x snap-mandatory"
          >
            {galleryData.map((item, index) => (
              <GalleryCard key={index} {...item} />
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

export default GallerySection;