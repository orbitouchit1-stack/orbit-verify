
"use client";

import { useState } from "react";
import {
  Award,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const awards = [
  {
    image:
      "https://static.wixstatic.com/media/8484b6_36ff879e95a543109bbedd4b24affea3~mv2.png/v1/fill/w_252,h_252,al_c,q_85/3.png",
    title: "Recognition 01",
  },
  {
    image:
      "https://static.wixstatic.com/media/8484b6_1ffd49b4ff914fe5afa7534da8ec3216~mv2.png/v1/fill/w_252,h_252,al_c,q_85/4.png",
    title: "Recognition 02",
  },
  {
    image:
      "https://static.wixstatic.com/media/8484b6_f3084da4e96c47b49aff7b9dfa990b02~mv2.png/v1/fill/w_252,h_252,al_c,q_85/2.png",
    title: "Recognition 03",
  },
  {
    image:
      "https://static.wixstatic.com/media/8484b6_3a2d4bc8aad84cf3a789c3afaf9dfa13~mv2.png/v1/fill/w_252,h_252,al_c,q_85/1.png",
    title: "Recognition 04",
  },
];

const faqs = [
  {
    question: "What is Background Verification (BGV)?",
    answer:
      "Background Verification is a process of validating an individual's identity, address, education, employment history and other relevant records to help businesses make informed hiring decisions.",
  },
  {
    question: "What types of Employee BGV services do you offer?",
    answer:
      "We offer identity and address verification, education checks, employment verification, criminal background checks, credit checks, reference checks, drug screening and global compliance checks.",
  },
  {
    question: "How long does the verification process take?",
    answer:
      "The turnaround time depends on the type of verification, availability of records and response from relevant institutions. We aim to deliver accurate results within the committed timelines.",
  },
  {
    question: "Do you provide Business Background Verification?",
    answer:
      "Yes. Our Business BGV services include financial due diligence, vendor verification, legal and compliance checks, cyber security assessment, reputation checks and operational verification.",
  },
  {
    question: "Is the verification process confidential and secure?",
    answer:
      "Yes. We follow a structured verification process and handle information responsibly, with a focus on confidentiality, data security and applicable compliance requirements.",
  },
];

export default function AwardsFaqSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-10 md:py-10">

      {/* Background decoration */}
      <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            <Sparkles size={15} />
            Trust. Excellence. Transparency.
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl lg:text-5xl">
            Recognised for Trust.
            <span className="block text-green-600">
              Committed to Excellence.
            </span>
          </h2>
        </div>

        {/* Main grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT: Awards */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#162344] p-7 text-white shadow-xl shadow-blue-950/10 sm:p-9">

            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative z-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9FAF0] text-[#2BC76B]">
                <Award size={27} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Awards & Recognitions
              </p>

              <h3 className="mt-3 max-w-sm text-2xl font-bold leading-snug sm:text-3xl">
                Excellence that earns recognition.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-blue-100/80">
                Every recognition represents our continued commitment to
                reliable verification, professional service and building trust
                with our clients.
              </p>

              {/* Award Images */}
              <div className="mt-9 grid grid-cols-2 gap-4">

                {awards.map((award, index) => (
                  <div
                    key={award.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >

                    {/* Fixed image container */}
                    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-slate-50">

                      {!failedImages[index] ? (
                        <img
                          src={award.image}
                          alt={award.title}
                          width="152"
                          height="152"
                          loading="lazy"
                          decoding="async"
                          onError={() =>
                            setFailedImages((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          className="h-full w-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2 p-4 text-center text-[#071B49]">
                          <Award size={35} className="text-blue-400" />
                          <span className="text-xs font-semibold">
                            Award Image
                          </span>
                        </div>
                      )}

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT: FAQ */}
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-lg shadow-slate-900/[0.03] sm:p-9">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9FAF0] text-[#2BC76B]">
                <ShieldCheck size={23} />
              </div>

                <h3 className="mt-1 text-2xl font-bold text-[#071B49]">
                  Frequently Asked Questions
                </h3>

            </div>

            <p className="mb-8 mt-4 text-sm leading-6 text-slate-500">
              Everything you need to know about our background verification
              solutions.
            </p>

            {/* FAQ Accordion */}
            <div className="space-y-3">

              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50/60"
                        : "border-slate-200 bg-white hover:border-blue-200"
                    }`}
                  >

                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >

                      <span
                        className={`text-sm font-semibold leading-6 sm:text-base ${
                          isOpen ? "text-[#071B49]" : "text-slate-700"
                        }`}
                      >
                        <span className="mr-3 text-xs font-bold text-[#20A957]">
                          0{index + 1}
                        </span>

                        {faq.question}
                      </span>

                      <span
                        className={`flex cursor-pointer h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#2BC76B] text-white"
                            : "bg-slate-100 text-[#071B49]"
                        }`}
                      >
                        <ChevronDown size={17} />
                      </span>

                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-12 text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Contact CTA */}
            <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#071B49] p-5 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm font-bold text-white">
                  Still have questions?
                </p>

                <p className="mt-1 text-xs text-blue-200">
                  Our team is here to help you.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#2BC76B] px-5 py-3 text-sm font-bold text-[#071B49] transition-all duration-300 hover:bg-blue-50"
              >
                Contact Us <span className="ml-2">→</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
