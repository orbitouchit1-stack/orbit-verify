
"use client";

import Image from "next/image";

const brandsRowOne = [
  { name: "Brand One", logo: "/brands/brand-01.png" },
  { name: "Brand Two", logo: "/brands/brand-02.svg" },
  { name: "Brand Three", logo: "/brands/brand-03.png" },
  { name: "Brand Four", logo: "/brands/brand-04.png" },
  { name: "Brand Five", logo: "/brands/brand-05.svg" },
  { name: "Brand Six", logo: "/brands/brand-06.svg" },
];

const brandsRowTwo = [
  { name: "Brand Seven", logo: "/brands/logo-01.png" },
  { name: "Brand Eight", logo: "/brands/logo-02.png" },
  { name: "Brand Nine", logo: "/brands/logo-03.svg" },
  { name: "Brand Ten", logo: "/brands/brand-07.webp" },
  { name: "Brand Eleven", logo: "/brands/logo-04.png" },
  { name: "Brand Twelve", logo: "/brands/logo-05.png" },
];

// Logo Card
function LogoCard({ brand }) {
  return (
    <div className="group flex h-[90px] w-[140px] shrink-0 items-center justify-center ">
      <Image
        src={brand.logo}
        alt={brand.name}
        width={150}
        height={60}
        className="h-12 w-full object-contain"
      />
    </div>
  );
}

// Marquee Row
function MarqueeRow({ brands, reverse = false }) {
  return (
    <div className="brand-marquee overflow-hidden">

      <div
        className={`brand-track flex w-max gap-5 py-3 ${
          reverse ? "brand-reverse" : ""
        }`}
      >
        {[...brands, ...brands].map((brand, index) => (
          <LogoCard
            key={`${brand.name}-${index}`}
            brand={brand}
          />
        ))}
      </div>

    </div>
  );
}

// Main Component
export default function RecognisedBrands() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-10">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            Our Trusted Network
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl lg:text-5xl">
            Recognised Brands Across
            <span className="text-green-600">
              {" "}Industries
            </span>
          </h2>

        </div>

        {/* Marquee Rows */}
        <div className="relative space-y-4">

          {/* Left to Right */}
          <MarqueeRow brands={brandsRowOne} />

          {/* Right to Left */}
          <MarqueeRow brands={brandsRowTwo} reverse />

          {/* Side Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-28" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-28" />

        </div>

      </div>

    </section>
  );
}
