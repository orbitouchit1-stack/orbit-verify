
"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState,useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "HR Director",
    company: "Tech Solutions Pvt. Ltd.",
    profileImage: "/images/testimonials/testiprofile.jpg",
    category: "Employee Background Verification",
    quote:
      "OrbitVerify has transformed our employee verification process. Their team is professional, responsive, and delivers accurate verification reports within the promised timelines.",
  },
  {
    name: "Priya Mehta",
    role: "Talent Acquisition Head",
    company: "Global Business Group",
    profileImage: "/images/testimonials/testimonal-03.jpg",
    category: "Corporate Background Screening",
    quote:
      "We needed a reliable partner for employee background checks. OrbitVerify made the entire process seamless with transparent communication and quick turnaround times.",
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    company: "Innovate Technologies",
    profileImage: "/images/testimonials/testimonal-02.jpg",
    category: "Business Verification",
    quote:
      "The verification process is simple, structured, and efficient. OrbitVerify has helped us build more confidence in our hiring and business partnerships.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto slide after every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  const item = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-10">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#071B49]/[0.04] blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            Client Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl lg:text-5xl">
            Trusted by businesses.
            <br />
            <span className="text-green-600">Loved by people.</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#071B49] shadow-2xl shadow-[#071B49]/15">

          <div className="grid md:grid-cols-[1.4fr_0.8fr]">

            {/* Left Content */}
            <div className="relative p-8 md:p-14">

              <div className="absolute right-5 top-0 text-[160px] font-serif leading-none text-white/[0.06] md:right-12">
                “
              </div>

              <div className="relative z-10">
                <div className="mb-10 flex items-center gap-1 text-xl text-yellow-400">
                  ★ ★ ★ ★ ★
                </div>

                <span className="mb-6 inline-block rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-blue-100">
                  {item.category}
                </span>

                <div
                  key={active}
                  className="animate-[fadeIn_0.45s_ease-in-out]"
                >
                  <h3 className="max-w-2xl text-xl font-medium leading-relaxed text-white md:text-1xl lg:text-[24px] italic">
                    "{item.quote}"
                  </h3>
                </div>

                {/* Profile Image */}
                <div className="mt-12 flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.profileImage}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm text-blue-200">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Panel */}
            <div className="relative flex flex-col justify-between border-t border-white/10 bg-white/[0.06] p-8 md:border-l md:border-t-0 md:p-12">

              <div>
                <span className="text-sm font-medium uppercase tracking-[2px] text-blue-200">
                  Our Promise
                </span>

                <h3 className="mt-6 text-3xl font-bold leading-snug text-white md:text-4xl">
                  Confidence in every verification.
                </h3>

                <p className="mt-5 text-sm leading-7 text-blue-100/70">
                  We help organizations make informed decisions
                  through structured and reliable verification services.
                </p>
              </div>

              <div className="mt-12 border-t border-white/15 pt-8">
                <p className="text-sm text-blue-200">
                  Hear from our clients
                </p>

                <div className="mt-6 flex items-center justify-between">

                  {/* Slider Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActive(index)}
                        aria-label={`Show testimonial ${index + 1}`}
                        aria-pressed={active === index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          active === index
                            ? "w-9 bg-green-600"
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-green-600 text-white transition hover:bg-green-600 hover:text-[#071B49]"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-green-600 text-[#071B49] transition hover:bg-blue-100"
                    >
                      <ChevronRight />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
