"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Lang = "zh" | "en";

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("en");

  const content = useMemo(() => {
    if (lang === "zh") {
      return {
        heroTag: "服务项目",
        heroTitle: ["专业服务", "更清晰的", "支持方式"],
        heroDesc:
          "我们提供加拿大移民与留学相关支持服务，希望用更清楚的结构、更细致的准备和更专业的沟通，帮助客户更安心地推进下一步。",

        servicesTag: "服务范围",
        servicesTitle: "我们可以提供的支持",
        services: [
          {
            title: "学签申请与续签",
            desc: "协助学签申请、续签以及相关材料整理与准备。",
          },
          {
            title: "访问签证与超级签证",
            desc: "为短期访问、探亲以及父母超级签证提供申请支持。",
          },
          {
            title: "工签申请",
            desc: "提供工签相关申请和在加拿大身份规划方面的支持。",
          },
          {
            title: "学校申请规划",
            desc: "根据学生背景和目标，提供个性化学校申请规划。",
          },
          {
            title: "教育路径支持",
            desc: "协助了解学校选择、申请方向以及更长期的学习规划。",
          },
          {
            title: "咨询与个案评估",
            desc: "通过结构化咨询，帮助您更清楚地了解自身情况与下一步方向。",
          },
        ],

        processTag: "服务流程",
        processTitle: "更有条理的服务体验",
        processDesc:
          "我们相信更专业的服务体验来自更清楚的结构，因此会从咨询、分析、准备到后续方向，为客户提供更有条理的支持。",
        process: [
          {
            step: "01",
            title: "初步咨询",
            desc: "先了解您的背景、目标与当前最关心的问题。",
          },
          {
            step: "02",
            title: "个案分析与规划",
            desc: "结合您的情况，梳理可能方向与需要关注的重点。",
          },
          {
            step: "03",
            title: "准备支持",
            desc: "协助整理申请思路、材料准备与整体呈现方式。",
          },
          {
            step: "04",
            title: "后续指导",
            desc: "帮助您更清楚地推进下一步计划与申请安排。",
          },
        ],

        ctaTag: "进一步咨询",
        ctaTitle: "想了解哪项服务更适合您？",
        ctaDesc:
          "欢迎联系我们，我们可以根据您的背景与需求，帮助您了解更适合的移民或留学支持方向。",
        ctaButton: "联系 Summit",
      };
    }

    return {
      heroTag: "Services",
      heroTitle: ["Professional Services", "Designed With", "Clarity"],
      heroDesc:
        "We provide immigration and education-related support in Canada with clearer structure, more careful preparation, and a more thoughtful consultation experience.",

      servicesTag: "Service Areas",
      servicesTitle: "What We Support",
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
          desc: "Professional support for work permit applications and status planning in Canada.",
        },
        {
          title: "School Application Planning",
          desc: "Personalized planning for schools, colleges, and universities based on your goals.",
        },
        {
          title: "Education Pathway Support",
          desc: "Guidance for choosing schools, understanding options, and longer-term study planning.",
        },
        {
          title: "Consultation & Case Review",
          desc: "Structured consultation to better understand your situation and possible next steps.",
        },
      ],

      processTag: "Process",
      processTitle: "A More Organized Client Journey",
      processDesc:
        "We believe a more refined service experience starts with structure. That is why we guide clients through a clearer process from consultation to preparation and next steps.",
      process: [
        {
          step: "01",
          title: "Initial Consultation",
          desc: "We begin by understanding your background, goals, and immediate questions.",
        },
        {
          step: "02",
          title: "Case Review & Planning",
          desc: "We review your situation and identify possible pathways and key considerations.",
        },
        {
          step: "03",
          title: "Preparation Support",
          desc: "We help organize your documents, planning, and overall preparation approach.",
        },
        {
          step: "04",
          title: "Next-Step Guidance",
          desc: "We continue with clearer guidance so you can move forward with more confidence.",
        },
      ],

      ctaTag: "Consultation",
      ctaTitle: "Need Help With Your Situation?",
      ctaDesc:
        "Contact us to learn more about the service that may best match your immigration or education needs.",
      ctaButton: "Contact Summit",
    };
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar lang={lang} onChangeLang={setLang} />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,162,74,0.08),_transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
            {content.heroTag}
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {content.heroTitle[0]}
            <br />
            {content.heroTitle[1]}
            <br />
            {content.heroTitle[2]}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-[#10233f]/72">
            {content.heroDesc}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.servicesTag}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              {content.servicesTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eee4d1] bg-[#f8f6f1] p-8 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10233f] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a24a]">
                    Service
                  </p>
                </div>

                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="leading-8 text-[#10233f]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10233f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.processTag}
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight">
              {content.processTitle}
            </h2>

            <p className="max-w-2xl leading-8 text-white/78">
              {content.processDesc}
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-4">
              {content.process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 px-5 py-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a24a] text-sm font-bold text-[#10233f]">
                      {item.step}
                    </span>
                    <p className="text-lg font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                  <p className="leading-8 text-white/78">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
            {content.ctaTag}
          </p>

          <h2 className="mb-6 text-4xl font-semibold tracking-tight">
            {content.ctaTitle}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#10233f]/72">
            {content.ctaDesc}
          </p>

          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#10233f] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
          >
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}