"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Lang = "zh" | "en";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");

  const content = useMemo(() => {
    if (lang === "zh") {
      return {
        heroTag: "Summit Immigration & Education",
        heroTitle: ["为您的加拿大", "移民与留学之路", "提供专业支持"],
        heroDesc:
          "我们为加拿大移民与留学提供细致、个性化的支持服务，包括学签、访问签证、工签以及学校申请规划等。",
        heroPrimary: "立即咨询",
        heroSecondary: "查看服务",

        trustedTag: "专业支持",
        trustedTitle: ["移民与教育服务", "以清晰与关怀", "陪伴每一步"],

        trustItems: [
          {
            title: "位于本拿比",
            desc: "为计划在加拿大留学与移民的客户提供本地化支持与咨询服务。",
          },
          {
            title: "中英双语支持",
            desc: "提供中文和英文沟通，让咨询过程更清晰、更安心。",
          },
          {
            title: "以客户为中心",
            desc: "根据不同背景和目标，提供更贴合实际情况的支持。",
          },
        ],

        servicesTag: "服务项目",
        servicesTitle: "我们可以为您提供的支持",
        viewAll: "查看全部服务",
        services: [
          {
            title: "学签申请与续签",
            desc: "协助学签申请、续签以及相关材料整理与准备。",
          },
          {
            title: "访问签证与超级签证",
            desc: "为探亲、短期访问以及父母超级签证提供申请支持。",
          },
          {
            title: "工签申请",
            desc: "提供工签相关申请和身份规划方面的专业支持。",
          },
          {
            title: "学校申请规划",
            desc: "根据学生背景和目标，提供个性化学校申请规划。",
          },
        ],

        whyTag: "为什么选择 Summit",
        whyTitle: "更有条理、更有温度的咨询体验",
        advantages: [
          {
            title: "清晰沟通",
            desc: "我们注重把流程、重点和下一步说明清楚，让客户更容易理解。",
          },
          {
            title: "个案化规划",
            desc: "每位客户的背景不同，我们会先了解情况，再提供更适合的方向。",
          },
          {
            title: "专业体验",
            desc: "我们希望带来更专业、更可靠、也更注重细节的咨询体验。",
          },
        ],

        processTag: "服务流程",
        processTitle: "更清晰的下一步",
        processSteps: [
          {
            step: "01",
            title: "初步咨询",
            desc: "先了解您的情况、目标以及目前最关心的问题。",
          },
          {
            step: "02",
            title: "个案分析",
            desc: "结合您的背景，梳理可能方向和需要注意的重点。",
          },
          {
            step: "03",
            title: "准备支持",
            desc: "协助整理申请思路与相关准备事项，让流程更清楚。",
          },
          {
            step: "04",
            title: "下一步指导",
            desc: "帮助您更有方向地推进后续申请与规划。",
          },
        ],

        ctaTag: "联系我们",
        ctaTitle: "准备开始您的下一步了吗？",
        ctaDesc:
          "欢迎联系我们，了解更适合您情况的移民或留学支持服务。",
        ctaPrimary: "联系 Summit",
        ctaSecondary: "发送邮件",

        footerText: "© 2026 Summit Immigration & Education. 版权所有。",
      };
    }

    return {
      heroTag: "Summit Immigration & Education",
      heroTitle: [
        "Professional Guidance",
        "For Your Canada",
        "Journey",
      ],
      heroDesc:
        "We provide thoughtful and personalized support for immigration and education pathways in Canada, including study permits, visitor visas, work permits, and school application planning.",
      heroPrimary: "Book a Consultation",
      heroSecondary: "Explore Services",

      trustedTag: "Trusted Support",
      trustedTitle: [
        "Immigration and Education Services",
        "With Care and Clarity",
        "",
      ],

      trustItems: [
        {
          title: "Based in Burnaby, BC",
          desc: "Local support for clients planning immigration and education pathways in Canada.",
        },
        {
          title: "Bilingual Support",
          desc: "Chinese and English support for clearer and more comfortable communication.",
        },
        {
          title: "Client-Focused Service",
          desc: "Thoughtful guidance tailored to each client’s background, priorities, and next steps.",
        },
      ],

      servicesTag: "Our Services",
      servicesTitle: "What We Support",
      viewAll: "View All Services",
      services: [
        {
          title: "Study Permit & Extension",
          desc: "Support for study permit applications, extensions, and document preparation.",
        },
        {
          title: "Visitor Visa & Super Visa",
          desc: "Guidance for temporary visits, family visits, and Super Visa applications.",
        },
        {
          title: "Work Permit",
          desc: "Professional support for work permit applications and status planning.",
        },
        {
          title: "School Application Planning",
          desc: "Personalized support for choosing schools and planning your pathway.",
        },
      ],

      whyTag: "Why Choose Summit",
      whyTitle: "A More Thoughtful Client Experience",
      advantages: [
        {
          title: "Clear Communication",
          desc: "We focus on making each step easier to understand, with clearer guidance and more organized support.",
        },
        {
          title: "Thoughtful Case Planning",
          desc: "Every case is different. We take time to understand your situation before suggesting the next steps.",
        },
        {
          title: "Professional Experience",
          desc: "We aim to create a more refined, reliable, and client-focused consultation experience.",
        },
      ],

      processTag: "Our Process",
      processTitle: "A Clearer Path Forward",
      processSteps: [
        {
          step: "01",
          title: "Initial Consultation",
          desc: "We begin by understanding your situation, goals, and immediate questions.",
        },
        {
          step: "02",
          title: "Case Review",
          desc: "We review your background and identify possible pathways and important considerations.",
        },
        {
          step: "03",
          title: "Preparation Support",
          desc: "We help organize the process and prepare for the next stage with more clarity.",
        },
        {
          step: "04",
          title: "Next-Step Guidance",
          desc: "We continue with structured support so you can move forward more confidently.",
        },
      ],

      ctaTag: "Contact Us",
      ctaTitle: "Ready to Start Your Next Step?",
      ctaDesc:
        "Contact us to discuss your situation and learn more about the immigration or education support that may fit your needs.",
      ctaPrimary: "Contact Summit",
      ctaSecondary: "Email Us",

      footerText: "© 2026 Summit Immigration & Education. All rights reserved.",
    };
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar lang={lang} onChangeLang={setLang} />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,74,0.10),_transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.heroTag}
            </p>

            <h1 className="mb-6 text-5xl font-semibold leading-[1.05] md:text-7xl">
              {content.heroTitle[0]}
              <br />
              {content.heroTitle[1]}
              <br />
              {content.heroTitle[2]}
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#10233f]/72">
              {content.heroDesc}
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#10233f] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
              >
                {content.heroPrimary}
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-[#c9a24a] px-8 py-3 text-sm font-bold text-[#c9a24a] transition hover:bg-[#c9a24a] hover:text-[#10233f]"
              >
                {content.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#eadfc8] bg-white p-8 shadow-[0_20px_60px_rgba(16,35,63,0.10)]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.trustedTag}
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight">
              {content.trustedTitle[0]}
              <br />
              {content.trustedTitle[1]}
              {content.trustedTitle[2] ? (
                <>
                  <br />
                  {content.trustedTitle[2]}
                </>
              ) : null}
            </h2>

            <div className="space-y-4">
              {content.services.map((service, index) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#f1e8d6] bg-[#fcfbf8] p-5 transition hover:border-[#c9a24a]"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10233f] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#10233f]/70">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {content.trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8"
              >
                <h3 className="mb-4 text-2xl font-bold text-[#10233f]">
                  {item.title}
                </h3>
                <p className="leading-8 text-[#10233f]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
                {content.servicesTag}
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-[#10233f]">
                {content.servicesTitle}
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit rounded-full border border-[#c9a24a] px-6 py-3 text-sm font-bold text-[#c9a24a] transition hover:bg-[#c9a24a] hover:text-[#10233f]"
            >
              {content.viewAll}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {content.services.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-[#eadfc8] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10233f] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a24a]">
                    Service
                  </p>
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-snug text-[#10233f]">
                  {item.title}
                </h3>

                <p className="max-w-xl text-base leading-8 text-[#10233f]/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.whyTag}
            </p>
            <h2 className="text-4xl font-bold">{content.whyTitle}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {content.advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8"
              >
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-[#10233f]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10233f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.processTag}
            </p>
            <h2 className="text-4xl font-bold">{content.processTitle}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#c9a24a]">
                  {item.step}
                </p>
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-white/78">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
            {content.ctaTag}
          </p>

          <h2 className="mb-6 text-4xl font-bold">{content.ctaTitle}</h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#10233f]/72">
            {content.ctaDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#10233f] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
            >
              {content.ctaPrimary}
            </Link>

            <a
              href="mailto:info@summit-immigration.com"
              className="inline-flex rounded-full border border-[#c9a24a] px-8 py-3 text-sm font-bold text-[#c9a24a] transition hover:bg-[#c9a24a] hover:text-[#10233f]"
            >
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#eee4d1] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-[#10233f]/70">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>{content.footerText}</p>
            <p>2311 Beta Ave, Burnaby, BC V5C 0M1</p>
          </div>

          <div className="mt-3">
            <a
              href="mailto:info@summit-immigration.com"
              className="font-medium transition hover:text-[#c9a24a]"
            >
              info@summit-immigration.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}