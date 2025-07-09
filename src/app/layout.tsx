
import "./globals.css";

// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
 // Pastikan path ini benar, sesuaikan jika Anda punya di folder `styles` atau `app/styles`
import Navbar from '@/components/Navbar'; // Impor Navbar
import Footer from '@/components/Footer'; // Impor Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jakarta Smart City Clone', // Ganti judul aplikasi Anda
  description: 'Kloning halaman depan Jakarta Smart City dengan Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Letakkan Navbar di sini */}
        {children} {/* Konten halaman akan dirender di sini */}
        <Footer /> {/* Letakkan Footer di sini */}
      </body>
    </html>
  );
}