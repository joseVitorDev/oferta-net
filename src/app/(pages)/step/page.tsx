import Image from "next/image";
import Banner from '@/assets/banner.png'
import { Quiz } from "@/components/quiz";
import { Header } from "@/components/header";

export default function Page1() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col md:flex-row flex-grow w-full">
        <Image alt="Banner" src={Banner} className="object-cover h-screen" />
        <main className="absolute inset-x-0 top-24 flex flex-col text-white text-center px-4">
          <Quiz />
        </main>
      </div>



    </>
  )
}