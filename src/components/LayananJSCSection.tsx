// src/Component/LayananJSCSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const LayananJSCSection: React.FC = () => {
  const title = "Layanan di JSC";
  const description = "Jakarta Smart City (JSC) menyediakan layanan jasa yang bisa digunakan oleh masyarakat, baik individu, kelompok, instansi ataupun perusahaan. Layanan jasa yang tersedia di JSC akan dikerjakan berdasarkan prinsip profesionalisme dengan mengintegrasikan 4 core value utama JSC yaitu mobile first, data driven, digital experience, dan smart synergy.";
  const buttonText = "Lihat Semua Layanan";
  const buttonLink = "/layanan";
  const imageSrc = "/layanan-jsc.jpg"; // Pastikan path ini benar di folder public
  const imageAlt = "Layanan di Jakarta Smart City";
   const imagePosition: 'left' | 'right' = "left"; // <-- Tipe literalnya sudah di sini

  // Cara yang lebih eksplisit untuk TypeScript:
  // Langsung tentukan kelas berdasarkan nilai imagePosition
  const finalLayoutClass = imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse';

  

  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          // Menggunakan finalLayoutClass yang sudah pasti nilainya
          className={`flex flex-col items-center justify-between gap-8 md:gap-16 ${finalLayoutClass}`}
        >
          {/* Bagian Teks */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            {buttonText && buttonLink && (
              <Link
                href={buttonLink}
                className="inline-block bg-jakarta-blue text-white font-bold py-3 px-8 rounded-full text-lg bg-blue-700 transition-colors duration-300"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Bagian Gambar */}
          <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananJSCSection;