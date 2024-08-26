'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

import LogoNetflix from '@/assets/logo.png';
import { useBalance } from "@/hook/useBalance";
import Link from "next/link";

export function Header() {
  const [isBlack, setIsBlack] = useState(false);
  const { balance } = useBalance(); 

  useEffect(() => {
    const handleScroll = () => setIsBlack(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 flex items-center justify-between px-10 md:px-4 py-5 transition-colors duration-800 ${
        isBlack ? 'bg-black' : 'bg-gradient-to-b from-gray-900 via-transparent'
      }`}
    >
      <Link href={'/'} className="flex items-center">
        <Image src={LogoNetflix} alt="Netflix Logo" className="w-[8rem] mr-4" />
      </Link>

      <div className="flex items-center">
        <button className="flex items-center">
          <div className="p-2 bg-red-600 rounded-xl text-white">
            Saldo: <b>{balance}</b>
          </div>
        </button>
      </div>
    </header>
  );
}
