// src/Component/SocializationCategorySection.tsx
"use client";
import Image from 'next/image';
import { useRef, useState, useEffect, useMemo } from 'react';
import PhotoModal from './PhotoModal'; // Import komponen modal

interface SocializationCardProps {
  imageSrc: string;
  title: string;
  onClick?: (index: number) => void; // Mengubah prop onClick menjadi menerima index
  index?: number; // Menambahkan prop index
}

const SocializationCard: React.FC<SocializationCardProps> = ({ imageSrc, title, onClick, index }) => {
  const handleClick = () => {
    if (onClick && index !== undefined) {
      onClick(index); // Memicu modal dengan index gambar yang diklik
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex-none w-full bg-gray-100 rounded-lg overflow-hidden shadow-sm cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
    >
      <div className="relative w-full h-40 bg-gray-200">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center"
          />
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

interface SocializationCategorySectionProps {
  title: string;
  category: 'sekolah' | 'kampus' | 'kelurahan';
}

const SocializationCategorySection: React.FC<SocializationCategorySectionProps> = ({ title, category }) => {
  const allSocializationData = useMemo(() => {
    const baseData = {
      imageSrc: "/socialization-card-placeholder.jpg", // Gambar utama untuk kartu
      modalImages: [ // Contoh gambar untuk carousel di dalam modal (Anda perlu beberapa gambar per item)
        { src: "/socialization-card-placeholder.jpg", alt: "Gambar 1" },
        { src: "/modal-image-2.jpg", alt: "Gambar 2" }, // Ganti dengan path gambar nyata
        { src: "/modal-image-3.jpg", alt: "Gambar 3" }, // Ganti dengan path gambar nyata
      ],
    };

    switch (category) {
      case 'sekolah':
        return [
          { ...baseData, title: "SMA 81 Jakarta", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }]},
          { ...baseData, title: "SMA 81 Jakarta", modalImages: [{ src: "/sma81-6.jpg", alt: "SMA 81 - 6" },{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta", modalImages: [{ src: "/sma81-7.jpg", alt: "SMA 81 - 7" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          // Tambahkan data halaman kedua dan seterusnya
          { ...baseData, title: "SMA 81 Jakarta (Page 2)", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta (Page 2)", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta (Page 2)", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta (Page 2)", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta (Page 2)", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "SMA 81 Jakarta (Page 2)", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
        ] as const;
      case 'kampus':
        return [
          { ...baseData, title: "UI Smart City Hub", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "ITB Smart City Lab", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "UGM Inovasi Digital", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "UNJ Sosialisasi", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kampus Lain 1", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kampus Lain 2", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
        ] as const;
      case 'kelurahan':
        return [
          { ...baseData, title: "Kelurahan Pegangsaan 1", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kelurahan Pegangsaan 2", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kelurahan Pegangsaan 3", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kelurahan Pegangsaan 4", modalImages: [ { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kelurahan Lain 1", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
          { ...baseData, title: "Kelurahan Lain 2", modalImages: [{ src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 1" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }, { src: "/socialization-card-placeholder.jpg", alt: "SMA 81 - 2" }] },
        ] as const;
      default:
        return [];
    }
  }, [category]);

  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allSocializationData.length / cardsPerPage);

  const displayedCards = useMemo(() => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return allSocializationData.slice(startIndex, endIndex);
  }, [allSocializationData, currentPage, cardsPerPage]);

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  // State untuk Modal
  interface ModalContent {
    title: string;
    images: readonly{ src: string; alt: string; }[];
    initialIndex: number;
  }
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (cardIndexInDisplay: number) => {
    const globalIndex = (currentPage * cardsPerPage) + cardIndexInDisplay;
    const selectedItem = allSocializationData[globalIndex];
    if (selectedItem) {
      setModalContent({
        title: `Kunjungan ke ${selectedItem.title}`, // Judul modal
        images: selectedItem.modalImages, // Gambar-gambar untuk carousel di modal
        initialIndex: 0, // Mulai dari gambar pertama di modal
      });
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll ke atas bagian ini saat halaman berubah
    if (sectionRef.current) {
       sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);


  return (
    <section ref={sectionRef} className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700">{title}</h2>
          <div className="flex space-x-2">
            <button
              onClick={goToPrevPage}
              disabled={!canGoPrev}
              className={`p-2 rounded-full bg-blue-100 text-jakarta-blue hover:bg-blue-200 transition-colors ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
              onClick={goToNextPage}
              disabled={!canGoNext}
              className={`p-2 rounded-full bg-blue-100 text-jakarta-blue hover:bg-blue-200 transition-colors ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* Grid of Socialization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCards.map((item, index) => (
            <SocializationCard key={index} {...item} onClick={() => openModal(index)} index={index} />
          ))}
        </div>
      </div>

      {/* Modal Komponen */}
      {modalContent && (
        <PhotoModal
          isOpen={!!modalContent} // true jika modalContent tidak null
          onClose={closeModal}
          title={modalContent.title}
          images={modalContent.images}
          initialImageIndex={modalContent.initialIndex}
        />
      )}
    </section>
  );
};

export default SocializationCategorySection;