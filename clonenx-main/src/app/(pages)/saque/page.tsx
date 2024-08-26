'use client';

import React, { useState } from "react";
import Image from "next/image";
import Banner from '@/assets/banner.png';
import LogoPix from '@/assets/logo-pix.png';
import { Header } from "@/components/header";
import { useBalance } from "@/hook/useBalance";
import { FaRandom, FaInbox } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useCpfValidation } from "@/hook/useCpfValidation";
import { Loading } from "@/components/loader";
import { useRouter } from "next/navigation";

export default function Page2(): JSX.Element {
  const { balance } = useBalance();
  const { cpf, isValidCpf, handleCpfChange } = useCpfValidation();
  const [selectedPixType, setSelectedPixType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePixTypeClick = (type: string) => {
    setSelectedPixType(type);
  };

  const {push} = useRouter()

  const handleSacarClick = () => {
    if (isValidCpf && selectedPixType) {
      setLoading(true);
      setTimeout(() => {
        // Simulate processing payment
        setLoading(false);
        // Navigate to the next page or show a success message
push('/error-saque')
      }, 5000); // Simulated delay for processing
    }
  };

  return (
    <>
      <Header />
      <div className="relative flex flex-col md:flex-row justify-center items-center h-screen w-full">
        <Image alt="Banner" src={Banner} className="object-cover h-full w-full absolute inset-0 z-[-1]" />
        <main className="flex flex-col text-white text-center px-4 space-y-4 max-w-[40rem] mx-auto">
          {loading ? (
          <Loading/>
          ) : (
            <>
              <div className="bg-red-700/30 border border-red-900 p-4 rounded-lg text-center">
                <p>Você ganhou <b>R${balance} </b></p>
                <p><b>REALIZE SEU SAQUE AGORA</b></p>
              </div>
              <div className="flex flex-col justify-center items-center bg-red-700/30 border rounded-md border-red-900 p-6">
                <Image src={LogoPix} className="w-20 h-20" alt="Logo Pix" />
                <p className="text-3xl font-bold mt-4">Saldo: R$ {balance}</p>
                <p className="text-lg font-bold mt-2">Parabéns! Você concluiu a primeira etapa e está pronto para realizar seu primeiro saque</p>
              </div>

              <div className="flex flex-col justify-center mt-8 space-x-4 space-y-4">
                <h2 className="font-bold text-balance text-white">Tipo de Chave Pix</h2>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    className={`flex flex-col items-center justify-center w-28 h-24 p-4 border-red-600 border text-white rounded-md transition-colors ${
                      selectedPixType === 'CPF' ? 'bg-red-600' : 'bg-zinc-800/50 hover:bg-red-800'
                    }`}
                    onClick={() => handlePixTypeClick('CPF')}
                  >
                    <BsPeopleFill className="text-2xl mb-2" />
                    CPF/CNPJ
                  </button>
                  <button
                    className={`flex flex-col items-center justify-center w-28 h-24 p-4 border-red-600 border text-white rounded-md transition-colors ${
                      selectedPixType === 'Email' ? 'bg-red-600' : 'bg-zinc-800/50 hover:bg-red-800'
                    }`}
                    onClick={() => handlePixTypeClick('Email')}
                  >
                    <FaInbox className="text-2xl mb-2" />
                    Email
                  </button>
                  <button
                    className={`flex flex-col items-center justify-center w-28 h-24 p-4 border-red-600 border text-white rounded-md transition-colors ${
                      selectedPixType === 'Aleatoria' ? 'bg-red-600' : 'bg-zinc-800/50 hover:bg-red-800'
                    }`}
                    onClick={() => handlePixTypeClick('Aleatoria')}
                  >
                    <FaRandom className="text-2xl mb-2" />
                    Aleatória
                  </button>
                  <button
                    className={`flex flex-col items-center justify-center w-28 h-24 p-4 border-red-600 border text-white rounded-md transition-colors ${
                      selectedPixType === 'Celular' ? 'bg-red-600' : 'bg-zinc-800/50 hover:bg-red-800'
                    }`}
                    onClick={() => handlePixTypeClick('Celular')}
                  >
                    <IoPhonePortraitOutline className="text-2xl mb-2" />
                    Celular
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center space-y-2">
                <input
                  type="text"
                  placeholder="Chave Pix aqui..."
                  className="border border-white/25 bg-black text-white rounded-md w-full p-3 font-bold placeholder-white/50"
                />

                <div className="w-full">
                  <input
                    type="tel"
                    id="cpf"
                    name="cpf"
                    placeholder="Digite seu CPF"
                    className="border border-white/25 bg-black text-white rounded-md w-full p-3 font-bold placeholder-white/50"
                    value={cpf}
                    maxLength={14}
                    onChange={handleCpfChange}
                  />
                  <p className={`validation-message ${isValidCpf ? 'text-green-500' : 'text-red-500'} mt-2`}>
                    {isValidCpf ? 'CPF válido' : 'CPF inválido'}
                  </p>
                </div>
              </div>

              <button
                id="botaoproximaetapa"
                className={`w-full mt-4 p-4 ${isValidCpf && selectedPixType ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600/75 cursor-not-allowed'} text-white rounded-lg`}
                disabled={!isValidCpf || !selectedPixType}
                onClick={handleSacarClick}
              >
                SACAR AGORA MESMO
              </button>
            </>
          )}
        </main>
      </div>
    </>
  );
}
