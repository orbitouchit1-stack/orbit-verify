import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const verificationSteps = [
  {
    number: "01",
    title: "Identity Verification",
    subtitle: "Know who you are hiring.",
    description:
      "Verify candidate identity through authentic government-issued documents and reliable identity checks.",
    services: [
      "Aadhaar Verification",
      "PAN Card Verification",
      "Passport Verification",
      "Voter ID Verification",
    ],
  },
  {
    number: "02",
    title: "Address Verification",
    subtitle: "Verify residential details.",
    description:
      "Confirm current and permanent residential addresses to establish candidate authenticity.",
    services: [
      "Current Address Verification",
      "Permanent Address Verification",
      "Physical Address Verification",
      "Digital Address Verification",
    ],
  },
  {
    number: "03",
    title: "Employment Verification",
    subtitle: "Validate professional history.",
    description:
      "Check previous employment records and professional experience to ensure accurate work history.",
    services: [
      "Previous Employment Check",
      "Designation Verification",
      "Employment Duration Check",
      "Salary Verification",
    ],
  },
  {
    number: "04",
    title: "Education Verification",
    subtitle: "Validate academic credentials.",
    description:
      "Verify educational qualifications directly against available university and institution records.",
    services: [
      "Degree Verification",
      "University Verification",
      "Marksheet Verification",
      "Professional Certificate Check",
    ],
  },
  {
    number: "05",
    title: "Criminal Record Check",
    subtitle: "Build a safer workplace.",
    description:
      "Screen available court and criminal records to identify relevant background information.",
    services: [
      "Court Record Verification",
      "Criminal Record Search",
      "Police Verification",
      "Database Screening",
    ],
  },
  {
    number: "06",
    title: "Reference Verification",
    subtitle: "Understand candidate credibility.",
    description:
      "Connect with professional references to understand candidate performance and workplace conduct.",
    services: [
      "Professional Reference Check",
      "Previous Manager Feedback",
      "Character Reference",
      "Behavioural Assessment",
    ],
  },
];

export default function VerificationSolution() {
  return (
    <>
      <section className="w-full relative bg-linear-to-r from-[#F0F2F7] via-[#ECF1FA] to-[#E9FAF0] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              OUR VERIFICATION SERVICES
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071B49] sm:text-4xl lg:text-5xl">
              Complete Background{" "}
              <span className="text-green-600"> Verification Solutions</span>
            </h2>
          </div>

          {/* Sticky + Scroll Layout */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Sticky Panel */}
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden">
                <Image
                  src='/images/verification-thumb.webp'
                  alt="Verification"
                  width={400}
                  height={260}
                  className="h-full w-full object-cover rounded-3xl"
                />
                <h3 className="text-3xl font-bold text-[#071B49] mt-4">Your named HR manager</h3>
                <p className="mt-2 text-lg text-gray-800">
                  Your team gets one person in India who knows them. It's the same person from the first offer to the last payslip.
                </p>
              </div>
            </div>

            {/* Right Scrollable Services */}
            <div className="space-y-5">
              {verificationSteps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-3xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 sm:p-8"
                >
                  <h3 className="text-2xl font-bold text-[#162344]">
                    {step.title}
                  </h3>

                  <p className="font-semibold text-[#667BA8]">
                    {step.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-900">
                    {step.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {step.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-xs text-green-600">
                          <ShieldCheck />                        
                          </span>
                        <span className="font-medium text-[#162344]">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
