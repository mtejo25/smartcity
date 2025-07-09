// src/Component/PrinciplesSection.tsx
"use client"; // Diperlukan karena menggunakan useState
import Image from 'next/image';
import { useState } from 'react';

// Data untuk tab interaktif (tetap sama)
const tabContent = [
  {
    id: 'mobile',
    label: 'Mobile First',
    imageSrc: '/mobile-first.png', // Ini akan menjadi gambar statis di kiri, bukan berubah
    title: 'Menyediakan layanan melalui sentuhan tangan',
    description: 'Hampir semua warga di Jakarta menggunakan telepon seluler, sehingga aplikasi JAKI dapat menjadi jembatan antara warga dan pemerintah untuk mudah mengakses layanan dan pemimpin DKI Jakarta.',
  },
  {
    id: 'data',
    label: 'Data Driven',
    imageSrc: '/analytics.png', // Gambar ilustrasi untuk Data Driven
    title: 'Pengambilan keputusan berbasis data yang akurat',
    description: 'Dengan mengumpulkan dan menganalisis data kota, Jakarta Smart City membantu pemerintah membuat keputusan yang lebih tepat dan efisien untuk kebutuhan warganya.',
  },
  {
    id: 'digital',
    label: 'Digital Experience',
    imageSrc: '/digital-exp.png', // Gambar ilustrasi untuk Digital Experience
    title: 'Pengalaman digital yang mulus untuk warga',
    description: 'Fokus pada antarmuka yang ramah pengguna dan layanan digital yang mudah diakses untuk meningkatkan interaksi warga dengan pemerintah kota.',
  },
  {
    id: 'smart',
    label: 'Smart Strategy',
    imageSrc: '/smart-collab.png', // Gambar ilustrasi untuk Smart Strategy
    title: 'Strategi cerdas untuk kota yang lebih baik',
    description: 'Menerapkan pendekatan inovatif dan berkelanjutan dalam perencanaan dan pengelolaan kota untuk mencapai tujuan Smart City.',
  },
];

const PrinciplesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabContent[0].id); // Default tab aktif
  const currentContent = tabContent.find(tab => tab.id === activeTab);

  return (
    <section className="bg-gradient-to-b from-[#002E69] to-[#005BCF] py-16 md:py-64 text-white relative">
      {/* Bentuk lingkaran abstrak di latar belakang */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-blue-500 opacity-20 z-0"></div>
      <div className="absolute top-1/3 right-0 w-32 h-32 rounded-full border-2 border-blue-500 opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Bagian Judul Utama */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-64 max-w-3xl mx-auto leading-tight">
          Mewujudkan Ekosistem Kota Cerdas 4.0 Jakarta Melalui 4 Prinsip JSC
        </h2>

        {/* Bagian Konten Tab Interaktif */}
        <div className="flex flex-col md:flex-row items-center md:items-start rounded-lg p-0"> {/* Hapus padding/shadow di sini, dan sesuaikan warna bg */}
          
          {/* Ilustrasi Statis di Kiri */}
          <div className="relative w-full md:w-1/2 h-80 md:h-[450px] flex items-center justify-center md:pr-8"> {/* Container gambar ilustrasi */}
            {/* Background bulat di belakang ilustrasi, seperti di desain */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-[#144272] z-0"></div> */}
            <Image
              src={currentContent?.imageSrc || '/mobile-first-illustration.png'} // Gunakan gambar sesuai tab aktif, atau default
              alt="Ilustrasi Fitur"
              width={500} // Sesuaikan lebar gambar ilustrasi
              height={500} // Sesuaikan tinggi gambar ilustrasi
              className="relative z-10 object-contain"
              priority
            />
          </div>

          {/* Konten Tab & Deskripsi di Kanan */}
          <div className="w-full md:w-1/2 pt-8 md:pt-12 pb-8 md:pl-8"> {/* Padding untuk konten kanan */}
            {/* Navigasi Tab Horizontal */}
            <div className="flex flex-wrap justify-start md:justify-start gap-4 mb-8 overflow-x-auto no-scrollbar"> {/* no-scrollbar diperlukan */}
              {tabContent.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-none text-md font-semibold py-2 px-6 rounded-full transition-all duration-300 whitespace-nowrap
                    ${activeTab === tab.id 
                      ? 'bg-transparent text-blue-300 hover:text-blue-200 border border-blue-300 hover:border-blue-200' // Latar biru solid, teks putih untuk aktif
                      : 'bg-jakarta-blue text-white'  // Teks biru, border biru untuk tidak aktif
                    }
                  `}
                >
                  {tab.label}
                  {/* Hapus underline biru saat aktif */}
                  {/* {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-2/3 bg-blue-400 rounded-full"></span>
                  )} */}
                </button>
              ))}
            </div>

            {/* Judul dan Deskripsi Konten */}
            {currentContent && (
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">{currentContent.title}</h3>
                <p className="text-base md:text-lg text-gray-300">{currentContent.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;