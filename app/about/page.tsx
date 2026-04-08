"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Lang = "zh" | "en";

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");

  const content = useMemo(() => {
    if (lang === "zh") {
      return {
        heroTag: "关于我们",
        heroTitle: ["认识 Summit", "以及我们的团队"],
        heroDesc:
          "我们希望用更专业、更清晰、也更有温度的方式，为客户提供加拿大移民与留学支持。",

        imageBlockTag: "About Summit",
        imageBlockTitle: ["更清晰、更细致的", "移民与留学支持方式"],
        imageBlockDesc:
          "我们相信移民与留学服务不应该只是信息传递，更应该是一种建立在理解、沟通与专业基础上的支持。我们希望让每一位客户都能更清楚地理解自己的方向与下一步。",

        introTag: "我们的定位",
        introTitle: "一个重视专业与沟通的团队",
        introDesc1:
          "Summit Immigration & Education 专注于加拿大移民与留学相关支持服务。我们重视的不只是申请本身，也重视客户是否真正理解自己的选择、路径与下一步。",
        introDesc2:
          "我们希望把咨询做得更清楚、更细致，也更贴近每位客户的实际情况。",

        teamTag: "团队背景",
        teamTitle: "以教育与专业资格为基础",
        advisorTitle: "持牌顾问",
        advisorDesc:
          "我们的顾问拥有 University of Toronto 教育硕士背景，并持有 RCIC 加拿大移民顾问执照，在教育与移民咨询之间具备更扎实的专业连接。",
        founderTitle: "联合创始人",
        founderDesc:
          "我拥有 Simon Fraser University 本科学历，以及 Northeastern University 硕士背景。我的优势在于更贴近学生与家庭的真实需求，也更重视沟通体验、服务细节与客户感受。",

        storyOneTag: "为什么创立 Summit",
        storyOneTitle: "希望把咨询做得更清楚、更细致",
        storyOneDesc:
          "我们创立 Summit，是因为我们相信移民与留学服务不应该只是信息传递，更应该是一种建立在理解、沟通与专业基础上的支持。我们希望把服务做得更有条理，也让客户在每一步都更清楚自己的方向。",

        storyTwoTag: "为什么想做移民留学服务",
        storyTwoTitle: "因为我们理解这背后的重要性",
        storyTwoDesc:
          "对很多学生和家庭来说，留学、签证和身份规划不只是一个申请流程，而是关系到未来学习、生活和长期发展的重要决定。我们希望用更认真、更稳定、也更有温度的方式，为客户提供真正有帮助的支持。",

        valuesTag: "我们的做事方式",
        valuesTitle: "我们重视的不是空泛承诺，而是实际支持",
        values: [
          {
            title: "更清晰的沟通",
            desc: "我们希望客户能真正听懂流程、材料重点和不同选择之间的差异，而不是只得到笼统答复。",
          },
          {
            title: "更细致的准备",
            desc: "我们重视材料逻辑、申请脉络和整体呈现，希望每一步都更有条理。",
          },
          {
            title: "更长期的视角",
            desc: "我们不只看眼前一步，也会关注客户后续的学习、身份和发展方向。",
          },
        ],

        ctaTag: "联系我们",
        ctaTitle: "欢迎进一步了解 Summit",
        ctaDesc:
          "如果您希望了解我们的服务方式，或想讨论自己的情况，欢迎联系我们。",
        ctaButton: "联系 Summit",
      };
    }

    return {
      heroTag: "About Us",
      heroTitle: ["Meet Summit", "And Our Team"],
      heroDesc:
        "We aim to provide immigration and education support in Canada with more professionalism, clarity, and care.",

      imageBlockTag: "About Summit",
      imageBlockTitle: [
        "A More Thoughtful Approach",
        "to Immigration & Education",
      ],
      imageBlockDesc:
        "We believe immigration and education support should be more than simply sharing information. It should be built on understanding, communication, and professionalism, so that each client can move forward with more clarity.",

      introTag: "Who We Are",
      introTitle: "A Team That Values Professionalism and Communication",
      introDesc1:
        "Summit Immigration & Education focuses on immigration and education-related support in Canada. We care not only about the application itself, but also whether clients truly understand their options, pathways, and next steps.",
      introDesc2:
        "Our goal is to make the consultation experience clearer, more thoughtful, and more aligned with each client’s real situation.",

      teamTag: "Team Background",
      teamTitle: "Built on Education and Professional Qualifications",
      advisorTitle: "Licensed Consultant",
      advisorDesc:
        "Our consultant holds a Master of Education from the University of Toronto and is a licensed RCIC, bringing together a strong foundation in both education and immigration consulting.",
      founderTitle: "Co-Founder",
      founderDesc:
        "I hold a bachelor’s degree from Simon Fraser University and a master’s degree from Northeastern University. My strength lies in understanding the real needs of students and families, while placing strong emphasis on communication, service detail, and client experience.",

      storyOneTag: "Why We Created Summit",
      storyOneTitle: "To Make Consultation Clearer and More Thoughtful",
      storyOneDesc:
        "We created Summit because we believe immigration and education support should be more than simply sharing information. It should be built on understanding, communication, and professionalism. We want the experience to feel more organized, more thoughtful, and clearer at every step.",

      storyTwoTag: "Why We Chose This Field",
      storyTwoTitle: "Because We Understand How Important It Is",
      storyTwoDesc:
        "For many students and families, study planning, visas, and immigration decisions are not just application steps. They are important choices that shape future study, life, and long-term plans. We want to support clients in a way that feels more careful, dependable, and genuinely helpful.",

      valuesTag: "How We Work",
      valuesTitle: "We Focus on Real Support, Not Generic Promises",
      values: [
        {
          title: "Clear Communication",
          desc: "We want clients to truly understand the process, the required materials, and the differences between possible options.",
        },
        {
          title: "Careful Preparation",
          desc: "We pay attention to document logic, application structure, and the overall quality of preparation.",
        },
        {
          title: "A Longer-Term Perspective",
          desc: "We do not only look at the immediate application. We also consider future study, status, and long-term planning.",
        },
      ],

      ctaTag: "Contact Us",
      ctaTitle: "Learn More About Summit",
      ctaDesc:
        "If you would like to learn more about how we work or discuss your situation, feel free to contact us.",
      ctaButton: "Contact Summit",
    };
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar lang={lang} onChangeLang={setLang} />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,74,0.08),_transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.heroTag}
            </p>

            <h1 className="mb-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              {content.heroTitle[0]}
              <br />
              {content.heroTitle[1]}
            </h1>

            <p className="max-w-2xl text-base leading-8 text-[#10233f]/72 md:text-lg">
              {content.heroDesc}
            </p>
          </div>

          <div>
            <div className="rounded-[32px] border border-[#eadfc8] bg-white p-8 shadow-[0_20px_60px_rgba(16,35,63,0.08)]">
              <div className="mb-8 flex items-center gap-4">
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
                  <p className="text-2xl font-bold text-[#10233f]">SUMMIT</p>
                  <p className="text-sm uppercase tracking-[0.22em] text-[#c9a24a]">
                    Immigration & Education
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#f1e8d6] bg-[#fcfbf8] p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#c9a24a]">
                  {content.introTag}
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                  {content.introTitle}
                </h2>
                <p className="mb-4 leading-8 text-[#10233f]/74">
                  {content.introDesc1}
                </p>
                <p className="leading-8 text-[#10233f]/74">
                  {content.introDesc2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.imageBlockTag}
            </p>

            <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight">
              {content.imageBlockTitle[0]}
              <br />
              {content.imageBlockTitle[1]}
            </h2>

            <p className="leading-8 text-[#10233f]/75">
              {content.imageBlockDesc}
            </p>
          </div>

          <div className="relative">
            <Image
              src="/about.jpg"
              alt="Consultation"
              width={700}
              height={460}
              className="h-[420px] w-full rounded-[28px] object-cover"
            />
            <div className="absolute inset-0 rounded-[28px] border border-[#eadfc8]" />
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-3 text-sm font-medium shadow-md">
              {lang === "zh" ? "专业咨询支持" : "Professional Consultation"}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <img
            src="/team.jpg"
            className="mb-10 h-[240px] w-full rounded-[28px] object-cover"
          />
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.teamTag}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {content.teamTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#eee4d1] bg-white p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24a]">
                {content.advisorTitle} · CEO
              </p>
              <p className="leading-8 text-[#10233f]/72">
                {content.advisorDesc}
              </p>
            </div>

            <div className="rounded-3xl border border-[#eee4d1] bg-white p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24a]">
                {content.founderTitle}
              </p>
              <p className="leading-8 text-[#10233f]/72">
                {content.founderDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] border border-[#eadfc8] bg-[#f8f6f1] p-8 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
                {content.storyOneTag}
              </p>

              <h2 className="mb-6 text-4xl font-semibold tracking-tight">
                {content.storyOneTitle}
              </h2>

              <p className="leading-8 text-[#10233f]/72">
                {content.storyOneDesc}
              </p>
            </div>

            <div className="rounded-[32px] border border-[#eadfc8] bg-[#f8f6f1] p-8 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
                {content.storyTwoTag}
              </p>

              <h2 className="mb-6 text-4xl font-semibold tracking-tight">
                {content.storyTwoTitle}
              </h2>

              <p className="leading-8 text-[#10233f]/72">
                {content.storyTwoDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.valuesTag}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {content.valuesTitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {content.values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#eee4d1] bg-white p-8"
              >
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="leading-8 text-[#10233f]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10233f] py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.ctaTag}
            </p>
            <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {content.ctaTitle}
            </h2>
            <p className="leading-8 text-white/80">{content.ctaDesc}</p>
          </div>

          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#c9a24a] px-8 py-3 text-sm font-bold text-[#10233f] transition hover:opacity-90"
          >
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}