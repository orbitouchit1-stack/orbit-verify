
import {
  Landmark,
  Code2,
  HeartPulse,
  Radio,
  GraduationCap,
  Factory,
  Building2,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Secure your financial workforce with reliable identity, employment and background verification solutions.",
    checks: ["Identity Check", "Credit History", "Employment"],
    icon: Landmark,
  },
  {
    title: "Information Technology",
    description:
      "Verify IT professionals, developers and technology teams to build a secure and trustworthy workforce.",
    checks: ["Education", "Employment", "Identity"],
    icon: Code2,
  },
  {
    title: "Healthcare & Pharmaceuticals",
    description:
      "Ensure patient safety by verifying healthcare professionals, medical credentials and employment history.",
    checks: ["Medical Credentials", "Criminal Check", "Employment"],
    icon: HeartPulse,
  },
  {
    title: "Telecommunications",
    description:
      "Strengthen workforce security with comprehensive employee identity, address and background checks.",
    checks: ["Identity", "Address", "Criminal Check"],
    icon: Radio,
  },
  {
    title: "Education & EdTech",
    description:
      "Maintain institutional trust by verifying teachers, academic professionals and administrative staff.",
    checks: ["Education", "Employment", "Identity"],
    icon: GraduationCap,
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "Create safer operations by screening factory workers, logistics teams, drivers and management staff.",
    checks: ["Address", "Criminal Check", "Employment"],
    icon: Factory,
  },
  {
    title: "Real Estate & Construction",
    description:
      "Reduce business risks by verifying contractors, construction workers and property professionals.",
    checks: ["Identity", "Address", "Criminal Check"],
    icon: Building2,
  },
  {
    title: "And Many More Industries",
    description:
      "Customized background verification solutions designed around your business and workforce requirements.",
    checks: ["Custom Checks", "Compliance", "Due Diligence"],
    icon: BriefcaseBusiness,
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="bg-[#F8FAFC] px-5 py-10 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl lg:text-5xl">
            Verification Solutions for
            <span className="text-green-600"> Every Industry</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-500">
            Every industry has unique hiring challenges. We provide
            tailored background verification solutions to help
            businesses build safer and more trustworthy workplaces.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group shadow flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-[0_18px_45px_rgba(7,27,73,0.08)] sm:p-7"
              >
                {/* Icon & Number */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B49]/5 text-[#071B49] transition-colors duration-300 group-hover:bg-green-50 group-hover:text-green-600">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold leading-snug text-[#071B49]">
                  {item.title}
                </h3>

                <p className="mb-4 flex-grow text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* Verification Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {item.checks.map((check) => (
                    <span
                      key={check}
                      className="rounded-md bg-[#E9FAF0] px-3 py-2 text-xs font-medium text-[#20A957]"
                    >
                      {check}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="/contact"
                  className="flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#071B49] transition-colors group-hover:text-green-600"
                >
                  Explore Solutions

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-green-500 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
