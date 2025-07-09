// src/Component/PhotoModal.tsx
"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: readonly { src: string; alt: string }[];
  initialImageIndex?: number;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  title,
  images,
  initialImageIndex = 0
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentImageIndex(initialImageIndex);
  }, [initialImageIndex, isOpen]);

   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function: Pastikan overflow kembali normal saat komponen di-unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); 

  if (!isOpen) return null;

  const currentImage = images[currentImageIndex];

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isOpen && images.length > 0 && thumbnailScrollRef.current) {
      const activeThumbnail = thumbnailScrollRef.current.children[currentImageIndex] as HTMLElement;
      if (activeThumbnail) {
        const containerWidth = thumbnailScrollRef.current.clientWidth;
        const thumbnailWidth = activeThumbnail.offsetWidth + 8;
        const scrollLeft =
          activeThumbnail.offsetLeft - containerWidth / 2 + thumbnailWidth / 2;
        thumbnailScrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [currentImageIndex, images, isOpen]);

  return (
    <div className="fixed flex items-center justify-center inset-0 z-50">
    {/* Overlay */}
    <div className="absolute inset-0  bg-black/70"></div>

    
      <div className="relative bg-white  z-10 rounded-xl w-full max-w-3xl p-4">
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-blue-700 hover:text-blue-900 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Judul */}
        <h3 className="text-sm font-semibold text-blue-600 mb-3">{title}</h3>

        {/* Gambar utama */}
        <div className="relative w-full h-[460px] bg-gray-100 rounded-lg overflow-hidden">
          {currentImage && (
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-cover object-center"
            />
          )}
        </div>

        {/* Thumbnail */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          {/* Tombol kiri */}
          <button
            onClick={goToPrev}
            className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={thumbnailScrollRef}
            className="flex overflow-x-auto no-scrollbar py-1 px-1 space-x-2"
          >
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-32 h-24 flex-none rounded-md overflow-hidden border-2 cursor-pointer transition-all
                  ${
                    index === currentImageIndex
                      ? 'border-blue-600'
                      : 'border-blue-100 hover:border-blue-300'
                  }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                {index !== currentImageIndex && (
                  <div className="absolute inset-0 bg-black/60" />
                )}
              </div>
            ))}
          </div>

          {/* Tombol kanan */}
          <button
            onClick={goToNext}
            className="p-1 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
