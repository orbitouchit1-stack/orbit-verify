import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <>
    <header>
         <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="shrink-0">
                <Image src="/src/images/logo-text.svg" alt="OrbitVerify Logo Text" width="123" height="82" />
            </Link> 
            
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
                <a href="/" className="text-[#2BC76B] font-semibold text-[18px]">
                    Home
                </a>
                <a href="/about"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    About Us
                </a>
                <a href="/industries"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    Industries
                </a>
                <a href="/employee-bgv"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    Employee BGV
                </a>
                <a href="/business-bgv"
                    className="text-[#162344] font-semibold text-[18px] hover:text-[#2BC76B] transition-colors">
                    Business BGV
                </a>

            </nav>

          
        </div>
    </header>
    </>
  )
}
