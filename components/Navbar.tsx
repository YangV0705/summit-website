// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e8dcc0] bg-[#f8f6f1]/95 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#e8dcc0] bg-white shadow-sm">
//             <Image
//               src="/logo.png"
//               alt="Summit Logo"
//               width={40}
//               height={40}
//               className="h-auto w-auto"
//             />
//           </div>

//           <div>
//             <p className="text-lg font-semibold tracking-[0.18em] text-[#10233f]">
//               SUMMIT
//             </p>
//             <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a24a]">
//               Immigration & Education
//             </p>
//           </div>
//         </Link>

//         <div className="hidden items-center gap-8 md:flex">
//           <nav className="flex items-center gap-8 text-sm font-medium text-[#10233f]">
//             <Link href="/about" className="transition hover:text-[#c9a24a]">
//               About
//             </Link>
//             <Link href="/services" className="transition hover:text-[#c9a24a]">
//               Services
//             </Link>
//             <Link href="/contact" className="transition hover:text-[#c9a24a]">
//               Contact
//             </Link>
//           </nav>

//           <div className="flex items-center gap-2 rounded-full border border-[#e8dcc0] bg-white px-2 py-1 text-xs font-medium text-[#10233f]">
//             <button className="rounded-full bg-[#10233f] px-3 py-1 text-white">
//               EN
//             </button>
//             <button className="rounded-full px-3 py-1 transition hover:bg-[#f3ede0]">
//               中文
//             </button>
//             <button className="rounded-full px-3 py-1 transition hover:bg-[#f3ede0]">
//               FR
//             </button>
//           </div>

//           <Link
//             href="/contact"
//             className="rounded-full bg-[#10233f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";

// type NavbarProps = {
//   lang?: "en" | "zh" | "fr";
// };

// export default function Navbar({ lang = "en" }: NavbarProps) {
//   const labels = {
//     en: {
//       about: "About",
//       services: "Services",
//       contact: "Contact",
//       book: "Book Now",
//     },
//     zh: {
//       about: "关于我们",
//       services: "服务项目",
//       contact: "联系我们",
//       book: "立即咨询",
//     },
//     fr: {
//       about: "À propos",
//       services: "Services",
//       contact: "Contact",
//       book: "Réserver",
//     },
//   };

//   const t = labels[lang];

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#e8dcc0] bg-[#f8f6f1]/95 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         <Link href={`/${lang}`} className="flex items-center gap-3">
//           <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#e8dcc0] bg-white shadow-sm">
//             <Image
//               src="/logo.png"
//               alt="Summit Logo"
//               width={40}
//               height={40}
//               className="h-auto w-auto"
//             />
//           </div>

//           <div>
//             <p className="text-lg font-semibold tracking-[0.18em] text-[#10233f]">
//               SUMMIT
//             </p>
//             <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a24a]">
//               Immigration & Education
//             </p>
//           </div>
//         </Link>

//         <div className="hidden items-center gap-8 md:flex">
//           <nav className="flex items-center gap-8 text-sm font-medium text-[#10233f]">
//             <Link
//               href={`/${lang}/about`}
//               className="transition hover:text-[#c9a24a]"
//             >
//               {t.about}
//             </Link>
//             <Link
//               href={`/${lang}/services`}
//               className="transition hover:text-[#c9a24a]"
//             >
//               {t.services}
//             </Link>
//             <Link
//               href={`/${lang}/contact`}
//               className="transition hover:text-[#c9a24a]"
//             >
//               {t.contact}
//             </Link>
//           </nav>

//           <div className="flex items-center gap-2 rounded-full border border-[#e8dcc0] bg-white px-2 py-1 text-xs font-medium text-[#10233f]">
//             <Link
//               href="/en"
//               className={`rounded-full px-3 py-1 transition ${
//                 lang === "en" ? "bg-[#10233f] text-white" : "hover:bg-[#f3ede0]"
//               }`}
//             >
//               EN
//             </Link>
//             <Link
//               href="/zh"
//               className={`rounded-full px-3 py-1 transition ${
//                 lang === "zh" ? "bg-[#10233f] text-white" : "hover:bg-[#f3ede0]"
//               }`}
//             >
//               中文
//             </Link>
//             <Link
//               href="/fr"
//               className={`rounded-full px-3 py-1 transition ${
//                 lang === "fr" ? "bg-[#10233f] text-white" : "hover:bg-[#f3ede0]"
//               }`}
//             >
//               FR
//             </Link>
//           </div>

//           <Link
//             href={`/${lang}/contact`}
//             className="rounded-full bg-[#10233f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
//           >
//             {t.book}
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

import Image from "next/image";
import Link from "next/link";

type NavbarProps = {
  lang?: "en" | "zh" | "fr";
};

export default function Navbar({ lang = "en" }: NavbarProps) {
  const labels = {
    en: {
      about: "About",
      services: "Services",
      contact: "Contact",
      book: "Book Now",
    },
    zh: {
      about: "关于我们",
      services: "服务项目",
      contact: "联系我们",
      book: "立即咨询",
    },
    fr: {
      about: "À propos",
      services: "Services",
      contact: "Contact",
      book: "Réserver",
    },
  };

  const t = labels[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dcc0] bg-[#f8f6f1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#e8dcc0] bg-white shadow-sm">
            <Image
              src="/logo.png"
              alt="Summit Logo"
              width={40}
              height={40}
              className="h-auto w-auto"
            />
          </div>

          <div>
            <p className="text-lg font-semibold tracking-[0.18em] text-[#10233f]">
              SUMMIT
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a24a]">
              Immigration & Education
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 text-sm font-medium text-[#10233f]">
            <Link href="/about" className="transition hover:text-[#c9a24a]">
              {t.about}
            </Link>
            <Link href="/services" className="transition hover:text-[#c9a24a]">
              {t.services}
            </Link>
            <Link href="/contact" className="transition hover:text-[#c9a24a]">
              {t.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-[#e8dcc0] bg-white px-2 py-1 text-xs font-medium text-[#10233f]">
            <button
              type="button"
              className={`rounded-full px-3 py-1 transition ${
                lang === "en" ? "bg-[#10233f] text-white" : "hover:bg-[#f3ede0]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1 transition ${
                lang === "zh" ? "bg-[#10233f] text-white" : "hover:bg-[#f3ede0]"
              }`}
            >
              中文
            </button>
            <button
              type="button"
              className={`rounded-full px-3 py-1 transition ${
                lang === "fr" ? "bg-[#10233f] text-white" : "hover:bg-[#f3ede0]"
              }`}
            >
              FR
            </button>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-[#10233f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
          >
            {t.book}
          </Link>
        </div>
      </div>
    </header>
  );
}