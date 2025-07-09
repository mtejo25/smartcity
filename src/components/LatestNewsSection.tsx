// // src/Component/LatestNewsSection.tsx
// import Image from 'next/image';
// import Link from 'next/link';

// interface ArticleCardProps {
//   imageSrc: string;
//   title: string;
//   link: string;
//   size: 'large' | 'small'; // Prop size untuk membedakan layout
// }

// const ArticleCard: React.FC<ArticleCardProps> = ({ imageSrc, title, link, size }) => {
//   const isLarge = size === 'large';
//   const imgAspectRatioClass = isLarge ? 'h-full' : 'aspect-[4/3]'; 

//   return (
//     <Link
//       href={link}
//       className={`relative block group overflow-hidden transition-shadow duration-300
//         ${isLarge ? 'col-span-full md:col-span-2 md:row-span-2' : 'col-span-1'} `}
//     >
//       <div className={`relative w-full ${imgAspectRatioClass}`}>
//         <Image
//           src={imageSrc}
//           alt={title}
//           fill
//           className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           priority={isLarge}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
//         <h3 className={`font-bold leading-tight mb-4 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
//           {title}
//         </h3>
//         <span className="inline-block text-white font-semibold hover:underline text-sm">Baca artikel</span>
//       </div>
//     </Link>
//   );
// };

// const LatestNewsSection: React.FC = () => {
//   const articlesData = [
//     {
//       imageSrc: "/monas-article.jpg",
//       title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
//       link: "/artikel/jakambulans-monas",
//       size: "large",
//     },
//     {
//       imageSrc: "/building-article.jpg",
//       title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
//       link: "/artikel/jakambulans-gedung",
//       size: "small",
//     },
//     {
//       imageSrc: "/slide-article.jpg",
//       title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
//       link: "/artikel/jakambulans-slide",
//       size: "small",
//     },
//     {
//       imageSrc: "/bus-article.jpg",
//       title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
//       link: "/artikel/jakambulans-bus",
//       size: "small",
//     },
//     {
//       imageSrc: "/tram-article.jpg",
//       title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
//       link: "/artikel/jakambulans-tram",
//       size: "small",
//     },
//   ] as const; // <--- PASTIKAN ADA 'as const' DI SINI

//   return (
//     <section className="bg-gray-50 ">
//       <div className="w-full">
//         <div className="grid grid-cols-1 md:grid-cols-4">
//           {articlesData.map((article, index) => (
//             // TypeScript seharusnya sekarang inferensi tipe 'size' dengan benar karena 'as const'
//             <ArticleCard key={index} {...article} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNewsSection;

// src/Component/BlogSection.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  imageSrc: string;
  title: string;
  date: string; // Tambahkan prop date
  link: string;
  size: 'large' | 'small';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageSrc, title, date, link, size }) => { // Terima prop date
  const isLarge = size === 'large';
  const imgAspectRatioClass = isLarge ? 'h-full' : 'aspect-[4/3]'; 

  return (
    <Link
      href={link}
      className={`relative block group overflow-hidden transition-shadow rounded-lg duration-300
        ${isLarge ? 'col-span-full md:col-span-2 md:row-span-2' : 'col-span-1'} `}
    >
      <div className={`relative w-full ${imgAspectRatioClass}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isLarge}
        />
        {/* Tanggal di pojok kanan atas gambar */}
        <span className="absolute top-4 right-4 bg-opacity-60 text-white text-xs px-2 py-1 rounded-full z-30">
          {date}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
        <h3 className={`font-semibold leading-tight mb-4 ${isLarge ? 'text-xl md:text-3xl' : 'text-xl '}`}>
          {title}
        </h3>
        {/* Tidak ada "Baca artikel" lagi di desain baru ini, tapi bisa ditambahkan jika mau */}
        {/* <span className="inline-block text-white font-semibold hover:underline text-sm">Baca artikel</span> */}
      </div>
    </Link>
  );
};

const BlogSection: React.FC = () => { // Mengubah nama komponen
  const articlesData = [
    {
      imageSrc: "/monas-article.jpg",
      title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
      link: "/artikel/jakambulans-monas",
      size: "large",
      date: "17 Agustus 2019", // Tambahkan tanggal
    },
    {
      imageSrc: "/tram-article.jpg",
      title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
      link: "/artikel/jakambulans-gedung",
      size: "small",
      date: "25 Juli 2019", // Tambahkan tanggal
    },
    {
      imageSrc: "/bus-article.jpg",
      title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
      link: "/artikel/jakambulans-slide",
      size: "small",
      date: "10 Juni 2019", // Tambahkan tanggal
    },
    {
      imageSrc: "/bus-article.jpg",
      title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
      link: "/artikel/jakambulans-bus",
      size: "small",
      date: "01 Mei 2019", // Tambahkan tanggal
    },
    // Jika ada 5 kartu seperti di desain:
    {
      imageSrc: "/tram-article.jpg", // Gambar ini mungkin yang kelima
      title: "Panggil Ambulans dengan Sekali Sentuhan Lewat JakAmbulans",
      link: "/artikel/jakambulans-tram",
      size: "small",
      date: "17 April 2019", // Tambahkan tanggal
    },
  ] as const;

  return (
    <section className="bg-blue-50 py-16 md:py-24"> {/* Mengubah bg-gray-50 menjadi bg-white */}
      <div className="container mx-auto px-4"> {/* Mengembalikan container mx-auto px-4 */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center md:text-left mb-12">
          Blog Jakarta Smart City
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {articlesData.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {/* Tombol Lihat Lebih Banyak */}
        <div className="text-center mt-12">
          <Link
            href="/blog" // Ganti dengan link ke halaman blog penuh
            className="inline-block bg-jakarta-blue text-white font-bold py-3 px-8 rounded-full text-lg bg-blue-700 transition-colors duration-300"
          >
            Lihat Lebih Banyak
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;