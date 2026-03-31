import Link from "next/link";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Study Permit & Extension",
    description:
      "Support for initial study permit applications, extensions, and document preparation.",
  },
  {
    title: "Visitor Visa & Super Visa",
    description:
      "Guidance for temporary visits, family visits, and parent or grandparent Super Visa applications.",
  },
  {
    title: "Work Permit",
    description:
      "Professional support for work permit related applications and status planning in Canada.",
  },
  {
    title: "School Application Planning",
    description:
      "Personalized planning for schools, colleges, and universities based on your background and goals.",
  },
];

const highlights = [
  "Clear and honest communication",
  "Personalized case planning",
  "Professional and thoughtful support",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,74,0.10),_transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              Summit Immigration & Education
            </p>

            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
              Professional Guidance
              <br />
              For Your Canada
              <br />
              Journey
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#10233f]/75">
              We provide thoughtful and personalized support for immigration
              and education pathways in Canada, including study permits,
              visitor visas, work permits, and school application planning.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#10233f] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
              >
                Book a Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#c9a24a] px-8 py-3 text-sm font-semibold text-[#c9a24a] transition hover:bg-[#c9a24a] hover:text-[#10233f]"
              >
                Explore Services
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#eadfc8] bg-white px-4 py-4 text-sm text-[#10233f]/80 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-[#eadfc8] bg-white p-8 shadow-[0_20px_60px_rgba(16,35,63,0.10)]">
              <div className="mb-8 border-b border-[#f1e8d6] pb-6">
                <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
                  Trusted Support
                </p>
                <h2 className="text-3xl font-semibold leading-tight">
                  Immigration and Education Services
                  <br />
                  With Care and Clarity
                </h2>
              </div>

              <div className="space-y-5">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-[#f1e8d6] p-5 transition hover:border-[#c9a24a]"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10233f] text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-[#10233f]/70">
                      {service.description}
                    </p>
                  </div>
                ))}
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
            <h2 className="text-4xl font-semibold">A Professional and Personal Approach</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8">
              <h3 className="mb-4 text-xl font-semibold">Clear Process</h3>
              <p className="leading-7 text-[#10233f]/70">
                We help you understand the process, required documents, and
                important steps before you submit your application.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8">
              <h3 className="mb-4 text-xl font-semibold">Case by Case Guidance</h3>
              <p className="leading-7 text-[#10233f]/70">
                Every client has a different background. We focus on your real
                situation and provide practical support that fits your needs.
              </p>
            </div>

            <div className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8">
              <h3 className="mb-4 text-xl font-semibold">Thoughtful Communication</h3>
              <p className="leading-7 text-[#10233f]/70">
                We value honest communication, careful preparation, and a more
                thoughtful client experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#10233f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
                About Summit
              </p>
              <h2 className="mb-6 text-4xl font-semibold leading-tight">
                Built on Trust, Care, and Professionalism
              </h2>
              <p className="max-w-2xl leading-8 text-white/75">
                Summit Immigration & Education is committed to helping students
                and families navigate Canada’s immigration and education
                pathways with more clarity and confidence.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="mb-4 text-lg font-semibold text-[#c9a24a]">
                Our Focus
              </p>
              <ul className="space-y-4 text-white/80">
                <li>Study permit and school planning support</li>
                <li>Visitor visa and Super Visa applications</li>
                <li>Work permit and status related guidance</li>
                <li>Clear and respectful communication with clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
            Contact Us
          </p>
          <h2 className="mb-6 text-4xl font-semibold">
            Ready to Start Your Next Step?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-8 text-[#10233f]/70">
            Contact us to discuss your situation and learn more about the
            immigration or education support that may fit your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#10233f] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
          >
            Contact Summit
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#eee4d1] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#10233f]/70">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Summit Immigration & Education. All rights reserved.</p>
            <p>2311 Beta Ave, Burnaby, BC V5C 0M1</p>
          </div>

          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <a
              href="mailto:info@summit-immigration.com"
              className="transition hover:text-[#c9a24a]"
            >
              info@summit-immigration.com
            </a>

            <div className="flex items-center gap-2">
              <span className="text-[#10233f]/50">Language:</span>
              <button className="rounded-full border border-[#e8dcc0] px-3 py-1 hover:bg-[#f8f6f1]">
                EN
              </button>
              <button className="rounded-full border border-[#e8dcc0] px-3 py-1 hover:bg-[#f8f6f1]">
                中文
              </button>
              <button className="rounded-full border border-[#e8dcc0] px-3 py-1 hover:bg-[#f8f6f1]">
                FR
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

