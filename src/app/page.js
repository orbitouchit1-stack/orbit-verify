import Image from "next/image";
import StatsCounter from "./components/StatsCounter";

export default function Home() {
  return (
    <>
      <section className="hero-section relative text-center bg-linear-to-r from-[#F0F2F7] via-[#ECF1FA] to-[#E9FAF0]
                py-6 lg:py-6">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
            <div className="relative text-left text-[#101B34] flex flex-col justify-center items-start">
              <h1 className="text-[80px] font-bold leading-24">Build Trust. </h1>
              <h4 className="text-4xl font-medium italic"> Verify with confidence.</h4>
              <button className="mt-12 h-[48px] cursor-pointer min-w-[152px] px-6 flex items-center justify-center
                           bg-[#2BC76B] rounded-lg
                           text-[#162344] font-semibold
                           hover:bg-[#20A957] transition-all duration-300">
                Request a consultation
              </button>
            </div>

            <div className="verification-art">

              <div className="circle circle-outer">
                <div className="circle circle-middle">
                  <div className="circle circle-inner"></div>
                </div>
              </div>

              <div className="star-decoration">
                    <Image src="/images/stars-blink.svg" alt="Star Decoration" width={100} height={100} className="w-full h-full object-cover" />

              </div>

              <div
                className="flex gap-4 top-1/2 transform -translate-y-1/2 items-center justify-center relative z-10">
                <div className="profile-card">

                  <div className="profile-dash flex items-center justify-between">

                    <div className="text-left">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-[#667BA8]">
                        VERIFICATION OVERVIEW
                      </p>

                      <h2 className="text-[20px] leading-[22px] font-semibold text-[#162344]">
                        Candidate profile
                      </h2>
                    </div>

                    <span
                      className="flex items-center font-semibold gap-2 rounded-full bg-[#E9FAF0] px-2 leading-4 text-[10px] text-[#20A957]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#20A957]"></span>
                      Verified
                    </span>

                  </div>

                  <div className="flex items-center justify-between py-4.5">

                    <div className="flex items-center gap-2">

                      <div className="profile-avatar flex items-end justify-center">
                        <Image src="/images/profile-circle.svg" alt="Candidate Avatar" width={100} height={100} className="w-full h-full object-cover rounded-full" />
                      </div>

                      <div className="text-left">
                        <h3 className="text-lg font-bold text-[#162344]">
                          Rahul Sharma
                        </h3>
                        <p className="text-sm text-[#667BA8]">
                          Product Operation - 2048
                        </p>
                      </div>

                    </div>

                    <div className="text-[#20A957] whitespace-nowrap">
                      <span className="text-[22px] font-bold">98</span><span
                        className="text-[12px] font-semibold text-[#162344]">/100</span>
                    </div>

                  </div>

                  <div className="progress-track">
                    <div className="progress-fill"></div>
                  </div>

                  <div className="mt-4.5 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image src="/images/identity-check.svg" alt="Identity Check Icon" width={22} height={22} />
                          <span className="text-sm font-medium text-[#4A6297]">
                            Identity Check
                          </span>
                      </div>

                      <span className="relative">
                        <Image src="/images/check_circle.svg" alt="Verified Icon" width={16} height={16} />
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image src="/images/education-check.svg" alt="Education & Employment Checks Icon" width={22} height={22} />
                          <span className="text-sm font-medium text-[#4A6297]">
                            Education & Employment Checks
                          </span>
                      </div>

                      <span className="relative">
                        <Image src="/images/check_circle.svg" alt="Verified Icon" width={16} height={16} />
                      </span>
                    </div>


                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image src="/images/criminal-check.svg" alt="Criminal Background Checks Icon" width={22} height={22} />
                          <span className="text-sm font-medium text-[#4A6297]">
                            Criminal Background Checks
                          </span>
                      </div>

                      <span className="relative">
                        <Image src="/images/check_circle.svg" alt="Verified Icon" width={16} height={16} />
                      </span>
                    </div>
                  </div>

                </div>

                <div className="flex flex-col gap-4">
                  <div className="floating-card floating-one">
                    <div className="floating-icon">
                      <Image src="/images/trust-verified.svg" alt="Verified Icon" width={24} height={24} />
                    </div>
                    <div>
                      <p className="text-[14px] leading-3.5 font-bold text-[#162344] whitespace-nowrap">
                        Trust, verified
                      </p>
                      <p className="text-[10px] text-[#626468] whitespace-nowrap">
                        Every detail matters
                      </p>
                    </div>
                  </div>
                  <div className="floating-card floating-one">
                    <div className="floating-icon">
                      <Image src="/images/clear-insight.svg" alt="Verified Icon" width={24} height={24} />
                    </div>
                    <div className="text-left">
                      <p className="text-[14px] leading-3.5 font-bold text-[#162344] whitespace-nowrap">
                        Clear insights
                      </p>
                      <p className="text-[10px] text-[#626468] whitespace-nowrap">
                        Clear insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <StatsCounter />

    </>
  );
}
