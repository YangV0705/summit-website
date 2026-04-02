"use client";

import Image from "next/image";
import Link from "next/link";

type Lang = "zh" | "en";

type NavbarProps = {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
};

export default function Navbar({ lang, onChangeLang }: NavbarProps) {
  const isZh = lang === "zh";

  const labels = {
    about: isZh ? "关于我们" : "About",
    services: isZh ? "服务项目" : "Services",
    contact: isZh ? "联系我们" : "Contact",
    book: isZh ? "立即咨询" : "Book Now",
  };

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
            <p className="text-lg font-bold tracking-[0.18em] text-[#10233f]">
              SUMMIT
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#c9a24a]">
              Immigration & Education
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 text-sm font-semibold text-[#10233f]">
            <Link href="/about" className="transition hover:text-[#c9a24a]">
              {labels.about}
            </Link>
            <Link href="/services" className="transition hover:text-[#c9a24a]">
              {labels.services}
            </Link>
            <Link href="/contact" className="transition hover:text-[#c9a24a]">
              {labels.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-2 rounded-full border border-[#e8dcc0] bg-white px-2 py-1 text-sm font-semibold text-[#10233f]">
            <button
              type="button"
              onClick={() => onChangeLang("zh")}
              className={`rounded-full px-4 py-1.5 transition ${
                lang === "zh"
                  ? "bg-[#10233f] text-white"
                  : "text-[#10233f] hover:bg-[#f3ede0]"
              }`}
            >
              中文
            </button>

            <button
              type="button"
              onClick={() => onChangeLang("en")}
              className={`rounded-full px-4 py-1.5 transition ${
                lang === "en"
                  ? "bg-[#10233f] text-white"
                  : "text-[#10233f] hover:bg-[#f3ede0]"
              }`}
            >
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-[#10233f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
          >
            {labels.book}
          </Link>
        </div>
      </div>
    </header>
  );
}