'use client';

import { Header } from "@/components/header";
import Banner from '@/assets/banner.png';
import Image from "next/image";
import { Footer } from "@/components/footer";
import { InitialContent } from "@/components/initial-content";
import { useEffect, useState } from "react";
import nookies from "nookies";
import { IntroPage } from "@/components/intro";

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true); 
  const [delayed, setDelayed] = useState(false); 

  useEffect(() => {
    const loadBalance = () => {
      const cookies = nookies.get(null);
      if (cookies.balance) {
        setBalance(parseFloat(cookies.balance));
      }
      setLoading(false);
    };


    const delayTimeout = setTimeout(() => {
      setDelayed(true);
      loadBalance();
    }, 3000);

    return () => clearTimeout(delayTimeout);
  }, []);

  const updateBalance = (newBalance: any) => {
    setBalance(newBalance);
    nookies.set(null, 'balance', newBalance.toFixed(2));
    console.log(balance);
  };

  if (loading || !delayed) {
    return (
      <div className="flex justify-center items-center">

        <IntroPage/>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="relative flex flex-col md:flex-row flex-grow w-full">
        <Image alt="Banner" src={Banner} className="object-cover h-[35rem]" />
        <main className="absolute inset-x-0 top-24 md:top-48 flex flex-col text-white text-center px-4">
          <InitialContent />
        </main>
      </div>
      <section className="border-b-8 border-gray-900 p-6">
        <div className="mx-auto text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4">
              <div className="max-w-[350px]">
                <h2 className="text-4xl md:text-[3.125rem] font-bold">Aproveite.</h2>
                <p className="mt-4 text-lg md:text-xl">
                  A Netflix que você adora agora colocando dinheiro no seu bolso
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
              <div className="relative z-10">
                <Image
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt="TV"
                  width={640}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
              <video
                autoPlay
                playsInline
                muted
                loop
                className="absolute top-[21%] left-[13.2%] max-w-[72.7%]"
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
