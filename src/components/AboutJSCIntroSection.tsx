// src/Component/AboutJSCIntroSection.tsx
import Link from 'next/link';

const AboutJSCIntroSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 md:py-24 relative z-0"> {/* Rounded bottom, negative margin to overlap Hero */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl md:text-2xl font-normal text-blue-700 leading-relaxed max-w-4xl mx-auto mb-8">
          Jakarta Smart City (JSC) adalah laboratorium inovasi sekaligus wadah sinergi
          antara warga dan Pemerintah Provinsi Daerah Khusus Jakarta. Jakarta
          Smart City berdiri sebagai katalisator dalam menciptakan ekosistem kota
          cerdas 4.0 di Jakarta.
        </p>
        <Link
          href="/profil" // Ganti dengan link profil yang sesuai
          className="inline-flex items-center text-blue-700 font-bold text-lg hover:underline transition-colors duration-300 group"
        >
          Lihat profil Jakarta Smart City
          <svg
            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default AboutJSCIntroSection;