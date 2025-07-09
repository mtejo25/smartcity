// src/Component/KunjunganRuanganSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const KunjunganRuanganSection: React.FC = () => {
  const title = "Kunjungan dan Peminjaman Ruangan";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in";
  const buttonText = "Ajukan Kunjungan";
  const buttonLink = "/kunjungan";
  const imageSrc = "/kunjungan-ruangan.jpg"; // Pastikan path ini benar di folder public
  const imageAlt = "Kunjungan dan Peminjaman Ruangan Smart City";
 const imagePosition: 'left' | 'right' = "right"; // <-- Tipe literalnya sudah di sini

  // Cara yang lebih eksplisit untuk TypeScript:
  // Langsung tentukan kelas berdasarkan nilai imagePosition
  let layoutClasses = 'md:flex-row';
  if (imagePosition === 'right') { // Jika imagePosition adalah 'right', balikkan urutan
    layoutClasses = 'md:flex-row-reverse';
  }
  // Atau lebih ringkas lagi:
  // const layoutClasses = imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';
  // Namun, untuk kasus ini, karena imagePosition sudah konstan, bisa juga:
  // const layoutClasses = 'md:flex-row-reverse'; // Karena imagePosition di sini selalu "right"

  // Menggunakan pendekatan yang lebih langsung sesuai nilai const imagePosition
  const finalLayoutClass = imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row';

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

export default KunjunganRuanganSection;