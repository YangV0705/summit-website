"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";

type Lang = "zh" | "en";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("en");

  const content = useMemo(() => {
    if (lang === "zh") {
      return {
        heroTag: "联系我们",
        heroTitle: ["欢迎联系", "Summit"],
        heroDesc:
          "如果您想进一步了解服务内容、讨论自己的情况，或希望获得更清晰的下一步建议，欢迎与我们联系。",

        formTag: "咨询表单",
        formTitle: "提交您的咨询信息",
        formDesc:
          "请填写下面的表单，我们会尽快与您联系。",

        nameLabel: "姓名",
        emailLabel: "邮箱",
        contactLabel: "联系方式（微信/电话）",
        serviceLabel: "咨询服务",
        messageLabel: "简单描述您的情况",
        submitText: "提交咨询",

        serviceOptions: [
          "学签申请",
          "访问签证",
          "工签申请",
          "学校申请规划",
          "其他",
        ],

        officeTag: "办公室信息",
        officeTitle: "更清晰、更专业的咨询体验",
        officeDesc:
          "我们希望为客户提供更有条理、更值得信赖的咨询体验，让每一次沟通都更清楚、更安心。",
        officePoints: [
          "重视沟通体验",
          "注重服务细节",
          "以客户情况为基础提供支持",
        ],

        directTag: "直接联系",
        directTitle: "您也可以直接通过以下方式联系我们",
        emailTitle: "邮箱",
        addressTitle: "地址",
        languagesTitle: "语言",
        languagesValue: "中文 / English",

        ctaTag: "下一步",
        ctaTitle: "欢迎进一步了解 Summit",
        ctaDesc:
          "如果您希望了解我们的服务方式，或想讨论自己的情况，欢迎通过邮箱与我们联系。",
        ctaPrimary: "发送邮件",
      };
    }

    return {
      heroTag: "Contact Us",
      heroTitle: ["Get in Touch", "With Summit"],
      heroDesc:
        "If you would like to learn more about our services, discuss your situation, or receive clearer next-step guidance, feel free to contact us.",

      formTag: "Consultation Form",
      formTitle: "Submit Your Inquiry",
      formDesc:
        "Please complete the form below and we will get back to you as soon as possible.",

      nameLabel: "Name",
      emailLabel: "Email",
      contactLabel: "Phone / WeChat",
      serviceLabel: "Service Interested",
      messageLabel: "Message",
      submitText: "Submit Request",

      serviceOptions: [
        "Study Permit",
        "Visitor Visa",
        "Work Permit",
        "School Application Planning",
        "Other",
      ],

      officeTag: "Office Message",
      officeTitle: "A Clearer and More Professional Consultation Experience",
      officeDesc:
        "We aim to provide a more thoughtful, organized, and reliable consultation experience, so that each conversation feels clearer and more supportive.",
      officePoints: [
        "Client-focused communication",
        "Attention to service detail",
        "Support based on your real situation",
      ],

      directTag: "Direct Contact",
      directTitle: "You May Also Contact Us Directly",
      emailTitle: "Email",
      addressTitle: "Address",
      languagesTitle: "Languages",
      languagesValue: "Chinese / English",

      ctaTag: "Next Step",
      ctaTitle: "Learn More About Summit",
      ctaDesc:
        "If you would like to understand how we work or discuss your situation, feel free to reach out by email.",
      ctaPrimary: "Email Us",
    };
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#10233f]">
      <Navbar lang={lang} onChangeLang={setLang} />

      <section className="relative overflow-hidden border-b border-[#eee4d1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,74,0.08),_transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
            {content.heroTag}
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {content.heroTitle[0]}
            <br />
            {content.heroTitle[1]}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-[#10233f]/72">
            {content.heroDesc}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1fr_0.95fr] md:items-start">
          <div className="rounded-[32px] border border-[#eee4d1] bg-[#f8f6f1] p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
              {content.formTag}
            </p>

            <h2 className="mb-4 text-4xl font-semibold tracking-tight">
              {content.formTitle}
            </h2>

            <p className="mb-8 text-lg leading-8 text-[#10233f]/72">
              {content.formDesc}
            </p>

            <form
              action="https://formsubmit.co/info@summit-immigration.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Consultation Request"
              />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#10233f]">
                  {content.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[#eadfc8] bg-white px-4 py-3 outline-none transition focus:border-[#c9a24a]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#10233f]">
                  {content.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[#eadfc8] bg-white px-4 py-3 outline-none transition focus:border-[#c9a24a]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#10233f]">
                  {content.contactLabel}
                </label>
                <input
                  type="text"
                  name="contact"
                  className="w-full rounded-xl border border-[#eadfc8] bg-white px-4 py-3 outline-none transition focus:border-[#c9a24a]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#10233f]">
                  {content.serviceLabel}
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl border border-[#eadfc8] bg-white px-4 py-3 outline-none transition focus:border-[#c9a24a]"
                >
                  {content.serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#10233f]">
                  {content.messageLabel}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-[#eadfc8] bg-white px-4 py-3 outline-none transition focus:border-[#c9a24a]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#10233f] py-3 text-sm font-bold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
              >
                {content.submitText}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] bg-[#10233f] p-8 text-white shadow-[0_20px_60px_rgba(16,35,63,0.10)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
                {content.officeTag}
              </p>

              <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight">
                {content.officeTitle}
              </h2>

              <p className="mb-10 leading-8 text-white/78">
                {content.officeDesc}
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24a]">
                  Summit
                </p>

                <ul className="space-y-3 text-white/82">
                  {content.officePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#eee4d1] bg-[#f8f6f1] p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9a24a]">
                {content.directTag}
              </p>

              <h2 className="mb-8 text-3xl font-semibold tracking-tight">
                {content.directTitle}
              </h2>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-[#eadfc8] bg-white px-6 py-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24a]">
                    {content.emailTitle}
                  </p>
                  <p className="text-lg font-medium leading-8 text-[#10233f]/82">
                    info@summit-immigration.com
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfc8] bg-white px-6 py-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24a]">
                    {content.addressTitle}
                  </p>
                  <p className="text-lg font-medium leading-8 text-[#10233f]/82">
                    2311 Beta Ave, Burnaby, BC V5C 0M1
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfc8] bg-white px-6 py-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c9a24a]">
                    {content.languagesTitle}
                  </p>
                  <p className="text-lg font-medium leading-8 text-[#10233f]/82">
                    {content.languagesValue}
                  </p>
                </div>
              </div>
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

          <a
            href="mailto:info@summit-immigration.com"
            className="inline-flex rounded-full bg-[#10233f] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#c9a24a] hover:text-[#10233f]"
          >
            {content.ctaPrimary}
          </a>
        </div>
      </section>
    </main>
  );
}