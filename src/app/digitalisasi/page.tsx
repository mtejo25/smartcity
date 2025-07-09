// src/app/digitalisasi/page.tsx
import DigitalizationHeroSection from '@/components/DigitalizationHeroSection';
import SocializationCategorySection from '@/components/SocializationCategorySection';

// Metadata untuk halaman ini (opsional)
export const metadata = {
  title: 'Digitalisasi - Jakarta Smart City',
  description: 'Sosialisasi digitalisasi Jakarta Smart City di berbagai lingkungan.',
};

export default function DigitalisasiPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section untuk halaman Digitalisasi */}
      <DigitalizationHeroSection />

      {/* Bagian Sosialisasi di Sekolah */}
      <SocializationCategorySection
        title="Sosialisasi di Sekolah"
        category="sekolah"
      />

      {/* Bagian Sosialisasi di Kampus */}
      <SocializationCategorySection
        title="Sosialisasi di Kampus"
        category="kampus"
      />

      {/* Bagian Sosialisasi di Kelurahan */}
      <SocializationCategorySection
        title="Sosialisasi di Kelurahan"
        category="kelurahan"
      />
      
      {/* Catatan: Navbar dan Footer akan dirender melalui layout.tsx */}
    </div>
  );
}