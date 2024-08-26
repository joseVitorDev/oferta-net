'use client'
import { useState } from "react";

import { useBalance } from "@/hook/useBalance";
import Link from "next/link";

export function InitialContent() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  

  const { balance, updateBalance } = useBalance();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setError(""); 
  };

  const handleButtonClick = () => {

    if (!email.includes("@")) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }


    updateBalance(10);



  };

  return (
    <>
      <div id="textoprincipal" className="flex flex-col justify-center items-center text-center font-poppins">
        <div id="ganheassistindocaixa" className="bg-red-700 text-white p-2 font-bold text-2xl mb-2 rounded-md ">
          Ganhe assistindo
        </div>
        <p className="text-lg font-bold md:text-2xl">
          Filmes, séries e muito mais, sem limites
        </p>
        <p id="textodetalhelogin" className="text-sm md:text-base mt-5 font-medium">
          Quer ganhar assistindo? Informe seu email e comece agora mesmo
        </p>
        <input
          type="email"
          id="inputtypetext"
          className="border border-white/25 bg-black bg-opacity-70 text-white w-full max-w-lg rounded-md mt-5 py-3 px-4 font-bold placeholder-white/25"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div id="botaolucraretapa" className="flex justify-center items-center mt-5">
        <button
          onClick={handleButtonClick}
          id="botaoproximaetapa"
          className="bg-red-700 text-white font-bold py-3 px-6 rounded-md text-lg"
        >
        <Link href={'/step'}>
        Lucrar agora mesmo
        </Link>
        </button>
      </div>
    </>
  );
}
