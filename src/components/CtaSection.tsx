// src/Component/VideoCarouselSection.tsx
"use client"; // Diperlukan untuk interaktivitas carousel dan state
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

interface VideoItemProps {
  youtubeId: string;
  title: string;
  thumbnailSrc: string;
  label?: string; // e.g., "Miniseri JAKI"
}

const VideoItem: React.FC<VideoItemProps> = ({ youtubeId, title, thumbnailSrc, label }) => {
  // Untuk menyederhanakan, kita akan langsung menggunakan iframe, bukan video player custom
  return (
    <div className="flex-none w-[calc(100%-48px)] md:w-1/2 lg:w-1/3 xl:w-1/4 mr-6 relative rounded-lg overflow-hidden shadow-lg bg-gray-900">
      <div className="relative w-full pt-[56.25%]"> {/* Rasio aspek 16:9 */}
        <Image
          src={thumbnailSrc}
          alt={title}
          fill
          className="object-cover object-center"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition-opacity duration-300 cursor-pointer">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        {label && <p className="text-sm font-semibold text-gray-400 mb-1">{label}</p>}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <Link href={`http://googleusercontent.com/youtube.com/9${youtubeId}`} target="_blank" rel="noopener noreferrer" className="text-jakarta-blue hover:underline">
          Tonton di YouTube
        </Link>
      </div>
    </div>
  );
};

const CtaSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Default true karena awal di paling kiri

  const videosData = [
    {
      youtubeId: "vK1tB4f8j-Q", // Contoh ID Video YouTube Miniseri JAKI: Daftar Vaksinasi
      title: "Miniseri JAKI: Daftar Vaksinasi",
      thumbnailSrc: "/video-thumb-1.jpg", // Ganti dengan path thumbnail Anda
      label: "Miniseri JAKI",
    },
    {
      youtubeId: "another-video-id-2",
      title: "Jalan Bersama dan Pasti",
      thumbnailSrc: "/video-thumb-2.jpg", // Ganti dengan path thumbnail Anda
    },
    {
      youtubeId: "another-video-id-3",
      title: "Judul Video Lain 1",
      thumbnailSrc: "/video-thumb-3.jpg", // Ganti dengan path thumbnail Anda
    },
    {
      youtubeId: "another-video-id-4",
      title: "Judul Video Lain 2",
      thumbnailSrc: "/video-thumb-4.jpg", // Ganti dengan path thumbnail Anda
    },
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
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const currentRef = scrollContainerRef.current; // Tangkap referensi untuk cleanup
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Cek posisi awal
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Judul opsional, jika ada di desain */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Video Pilihan</h2> */}

        <div className="relative">
          {/* Carousel container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll no-scrollbar py-4 scroll-smooth snap-x snap-mandatory" // no-scrollbar menyembunyikan scrollbar
          >
            {videosData.map((video, index) => (
              <VideoItem key={index} {...video} />
            ))}
          </div>

          {/* Navigation Buttons (Optional, for desktop) */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-lg z-30 hover:bg-opacity-90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-lg z-30 hover:bg-opacity-90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;