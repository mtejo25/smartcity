import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import JakiSection from '@/components/JakiSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import CollaborationSection from '@/components/CollaborationSection';
import CtaSection from '@/components/CtaSection';
import InnovationSection from "@/components/InnovationSection";
import LayananJSCSection from "@/components/LayananJSCSection";
import KunjunganRuanganSection from "@/components/KunjunganRuanganSection";
import GallerySection from "@/components/GallerySection";
import AboutJSCIntroSection from "@/components/AboutJSCIntroSection";

export default function Home() {
  return (
    <div className="overflow-hidden"> {/* Menambahkan overflow-hidden untuk mencegah scrollbar horizontal dari elemen yang melebihi batas */}
      <HeroSection />
      <AboutJSCIntroSection />
      <LatestNewsSection />
      <InnovationSection />
      <LayananJSCSection />
      <KunjunganRuanganSection />
      
      <PrinciplesSection />
      <CollaborationSection />
      
      <GallerySection />
      {/* Footer dan Navbar sudah diatur di layout.tsx */}
    </div>
  );
}
