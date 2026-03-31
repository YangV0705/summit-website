import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const values = [
  {
    title: "Clear Guidance",
    desc: "We explain each step clearly so clients understand the process, timeline, and required documents.",
  },
  {
    title: "Thoughtful Support",
    desc: "We take time to understand each client’s situation and provide more personalized guidance.",
  },
  {
    title: "Professional Service",
    desc: "We focus on careful preparation, transparent communication, and a professional client experience.",
  },
];

const highlights = [
  "Immigration and education support in Canada",
  "Personalized case planning",
  "Professional and client-focused communication",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,74,0.10),_transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              About Summit
            </p>
            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl">
              A Refined and
              <br />
              Professional Approach
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#10233f]/75">
              Summit Immigration & Education is committed to helping students
              and families move forward with more clarity, confidence, and care.
              We provide structured support for immigration and education pathways in Canada.
            </p>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#eadfc8] bg-white px-5 py-4 text-sm text-[#10233f]/80 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[32px] border border-[#eadfc8] bg-white p-8 shadow-[0_20px_60px_rgba(16,35,63,0.10)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#eadfc8] bg-[#f8f6f1]">
                  <Image
                    src="/logo.png"
                    alt="Summit Logo"
                    width={52}
                    height={52}
                    className="h-auto w-auto"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold">SUMMIT</p>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#c9a24a]">
                    Immigration & Education
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#f1e8d6] p-6">
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#c9a24a]">
                  Our Mission
                </p>
                <p className="leading-8 text-[#10233f]/75">
                  To provide professional, thoughtful, and trustworthy support
                  for clients navigating study, visa, and immigration-related
                  decisions in Canada.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#10233f] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#c9a24a]">
                    Style
                  </p>
                  <p className="mt-2 text-lg font-semibold">Professional</p>
                </div>
                <div className="rounded-2xl bg-[#f8f6f1] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#c9a24a]">
                    Focus
                  </p>
                  <p className="mt-2 text-lg font-semibold">Client-first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-semibold">Built with Structure and Care</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8"
              >
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-[#10233f]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10233f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
                Next Step
              </p>
              <h2 className="mb-6 text-4xl font-semibold leading-tight">
                Let’s Build a Clearer Path Forward
              </h2>
              <p className="max-w-2xl leading-8 text-white/75">
                Whether you are planning for study, visa applications, or longer-term
                goals in Canada, we are here to support you with a more organized
                and professional approach.
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#c9a24a] px-8 py-3 text-sm font-semibold text-[#10233f] transition hover:opacity-90"
              >
                Contact Summit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}