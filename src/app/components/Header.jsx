import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <>
    <header className="w-full py-2.5 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-md">
         <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="shrink-0">
                <Image src="./images/logo.svg" alt="OrbitVerify Logo Text" width="123" height="82" />
            </Link> 
            
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
                <Link href="/" className="text-[#2BC76B] font-semibold text-[18px]">
                    Home
                </Link>
                <Link href="/about"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    About Us
                </Link>
                <Link href="/industries"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    Industries
                </Link>
                <Link href="/employee-bgv"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    Employee BGV
                </Link>
                <Link href="/business-bgv"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    Business BGV
                </Link>

            </nav>
            <div class="hidden lg:flex items-center gap-4">

                <Link href="/login" class="h-[48px] min-w-[96px] px-6 flex items-center justify-center
                           border border-[#2BC76B] rounded-lg
                           text-[#162344] font-semibold
                           hover:bg-[#2BC76B] hover:text-white
                           transition-all duration-300">
                    Login
                </Link>

                <Link href="/contact" class="h-[48px] min-w-[152px] px-6 flex items-center justify-center
                           bg-[#2BC76B] rounded-lg
                           text-[#162344] font-semibold
                           hover:bg-[#20A957] transition-all duration-300">
                    Contact Us
                </Link>

            </div>
          
        </div>
    </header>
    </>
  )
}
