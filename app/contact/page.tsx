import Navbar from "@/components/Navbar";

const contactItems = [
  {
    title: "Email",
    value: "info@summit-immigration.com",
  },
  {
    title: "Address",
    value: "2311 Beta Ave, Burnaby, BC V5C 0M1",
  },
  {
    title: "Languages",
    value: "English / 中文 / Français",
  },
  {
    title: "Office Style",
    value: "Professional consultation support",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,74,0.10),_transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
            Contact
          </p>
          <h1 className="mb-6 text-5xl font-semibold md:text-6xl">
            Get in Touch
            <br />
            With Summit
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[#10233f]/75">
            If you would like to discuss your situation, ask about our services,
            or learn more about the next steps, feel free to contact us.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-[#eee4d1] bg-[#f8f6f1] p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              Contact Information
            </p>
            <h2 className="mb-8 text-3xl font-semibold">
              We’d Be Glad to Hear from You
            </h2>

            <div className="grid gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#eadfc8] bg-white px-5 py-5"
                >
                  <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#c9a24a]">
                    {item.title}
                  </p>
                  <p className="text-[#10233f]/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#eadfc8] bg-[#10233f] p-8 text-white">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#c9a24a]">
              Office Message
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight">
              A Clearer and More Professional Consultation Experience
            </h2>
            <p className="mb-8 leading-8 text-white/75">
              We are committed to providing a more refined and organized
              consultation experience for clients seeking immigration and
              education support in Canada.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#c9a24a]">
                Office Address
              </p>
              <p className="text-white/85">2311 Beta Ave, Burnaby, BC V5C 0M1</p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-[#c9a24a]">
                Contact Email
              </p>
              <p className="text-white/85">info@summit-immigration.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
