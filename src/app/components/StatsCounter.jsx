
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "M+", label: "Screens Annually" },
  { value: 1, suffix: "B+", label: "Records in proprietary databases" },
  { value: 200, suffix: "+", label: "Countries and territories" },
  { value: 100, suffix: "+", label: "ATS and HCM integrated partners" },
  { value: 90, suffix: "%", label: "U.S. criminal screens close in one day" },
];

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    let startTime = null;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((item) =>
          Math.round(item.value * easeOut)
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start]);

  return (
    <section className="w-full bg-gradient-to-r from-[#162344] via-[#162344] to-[#1B664E] ">
      <div
        ref={sectionRef}
        className="mx-auto grid min-h-[170px] w-full max-w-[1200px] grid-cols-5 items-center gap-y-8 px-6 py-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-[380px]:grid-cols-1"
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="px-3 text-center"
          >
            <h2 className="mb-2 text-[44px] font-bold leading-tight tracking-tight text-white max-md:text-[34px]">
              {counts[index]}
              {item.suffix}
            </h2>

            <p className="mx-auto max-w-[190px] text-[15px] leading-relaxed text-[#00e6a0] max-md:text-[13px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
