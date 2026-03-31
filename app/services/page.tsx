// import Navbar from "@/components/Navbar";

// const services = [
//   {
//     title: "Study Permit & Extension",
//     desc: "Initial study permit applications and extensions with structured document support.",
//   },
//   {
//     title: "Visitor Visa & Super Visa",
//     desc: "Applications for temporary visits, family visits, and parent or grandparent Super Visa.",
//   },
//   {
//     title: "Work Permit",
//     desc: "Support for work permit applications and planning your legal status in Canada.",
//   },
//   {
//     title: "School Application Planning",
//     desc: "Guidance for schools, colleges, and universities based on your background.",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
//       <Navbar />

//       <section className="mx-auto max-w-6xl px-6 py-20">
//         <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
//           Services
//         </p>

//         <h1 className="mb-12 text-5xl font-semibold">
//           Our Professional Services
//         </h1>

//         <div className="grid gap-6 md:grid-cols-2">
//           {services.map((item) => (
//             <div
//               key={item.title}
//               className="rounded-3xl border border-[#eee4d1] bg-white p-8 shadow-sm transition hover:shadow-md"
//             >
//               <h2 className="mb-4 text-xl font-semibold">{item.title}</h2>
//               <p className="text-[#10233f]/70 leading-7">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

import Navbar from "@/components/Navbar";
import Link from "next/link";

const services = [
  {
    title: "Study Permit & Extension",
    desc: "Support for initial study permit applications, extensions, and document preparation.",
  },
  {
    title: "Visitor Visa & Super Visa",
    desc: "Guidance for temporary visits, family visits, and parent or grandparent Super Visa applications.",
  },
  {
    title: "Work Permit",
    desc: "Professional support for work permit applications and planning your legal status in Canada.",
  },
  {
    title: "School Application Planning",
    desc: "Personalized planning for schools, colleges, and universities based on your academic background and goals.",
  },
  {
    title: "Education Pathway Support",
    desc: "Guidance for choosing schools, understanding options, and preparing for long-term study planning.",
  },
  {
    title: "Consultation & Case Review",
    desc: "Structured consultation to better understand your current situation and possible next steps.",
  },
];

const process = [
  "Initial consultation",
  "Case review and planning",
  "Document preparation support",
  "Submission guidance and follow-up",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,74,0.10),_transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
            Services
          </p>
          <h1 className="mb-6 text-5xl font-semibold md:text-6xl">
            Professional Services
            <br />
            Designed with Clarity
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[#10233f]/75">
            We offer immigration and education-related support with a clear structure,
            a refined presentation, and a more thoughtful client experience.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              Service Areas
            </p>
            <h2 className="text-4xl font-semibold">What We Support</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-[#10233f]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10233f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              Process
            </p>
            <h2 className="mb-6 text-4xl font-semibold">A More Organized Client Journey</h2>
            <p className="max-w-2xl leading-8 text-white/75">
              We believe a more refined service experience starts with structure.
              That is why we guide clients through a clear process from consultation
              to preparation and next steps.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a24a] font-semibold text-[#10233f]">
                    {index + 1}
                  </span>
                  <p className="text-white/85">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
            Consultation
          </p>
          <h2 className="mb-6 text-4xl font-semibold">Need Help with Your Situation?</h2>
          <p className="mx-auto mb-8 max-w-2xl leading-8 text-[#10233f]/70">
            Contact us to learn more about the service that may best match your
            immigration or education needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#10233f] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
          >
            Contact Summit
          </Link>
        </div>
      </section>
    </main>
  );
}