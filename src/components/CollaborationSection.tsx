// src/Component/CollaborationSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const CollaborationSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 text-blue-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Mari bersama mewujudkan Jakarta yang Berkolaborasi
          </h2>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 gap-6 relative">
          {/* <div className="relative w-full h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/collab-combine-dot.png" // Ganti dengan path gambar Anda
              alt="Kolaborasi 1"
              fill
              className="object-cover object-center"
            />
          </div> */}
          <div className="relative w-full h-260  overflow-hidden md:mt-16">
            <Image
              src="/collab-combine.png" // Ganti dengan path gambar Anda
              alt="Kolaborasi 2"
              fill
              className="object-cover object-center"
            />
          </div>
          {/* Gambar orang ketiga (misalnya lingkaran) */}
          {/* <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg z-10 border-4 border-[#0A2647]">
            <Image
              src="/collaboration-3.jpg" // Ganti dengan path gambar Anda
              alt="Kolaborasi 3"
              fill
              className="object-cover object-center"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;