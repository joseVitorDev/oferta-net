'use client';

import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import YouTubeVideo from "./youtube-video";
import { useBalance } from "@/hook/useBalance";
import { Loading } from "./loader";
import { useRouter } from "next/navigation";

export function Quiz() {
  const {push} = useRouter()
  const seriesData = [
    { videoId: "RA2gB0WWUyg", value: 75.8 },
    { videoId: "iS5xXr-GOnM", value: 55.8 },
    { videoId: "Ruyl8_PT_y8", value: 35.8 },
    { videoId: "Nu5z3AT2jv8", value: 75.8 },
    { videoId: "CxdkobbNF38", value: 75.8 },
    { videoId: "HxlVXqlUfbc", value: 75.8 },
    { videoId: "pyi8QAlHR8k", value: 75.8 },
    { videoId: "Dgz0fk95wpY", value: 30 },
    { videoId: "80RabL2JNcA", value: 40 },
    { videoId: "2UlW4zoRwoE", value: 30 },
  ];

  const { currentSeriesIndex, updateBalance, updateSeriesIndex } = useBalance();

  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    setTimeout(() => setLoading(false), 1000); 
  }, []);

  const handleNextSeriesClick = () => {
    setLoading(true);
  
    setTimeout(() => {
      const nextSeriesIndex = currentSeriesIndex + 1;
  
      if (nextSeriesIndex >= seriesData.length) {

        updateSeriesIndex(0); 

        push("/saque");
      } else {

        updateSeriesIndex(nextSeriesIndex);
        
        setRating(0);
        setRecommendation(null);
  
        updateBalance(seriesData[nextSeriesIndex].value);
  
        window.location.reload();
      }
    }, 2000);
  };
  const handleRecommendationClick = (value: any) => {
    setRecommendation(value);
  };

  const currentSeries = seriesData[currentSeriesIndex];

  if (loading) {
    return <Loading />; 
  }

  return (
    <div id="textoprincipal" className="text-white w-full max-w-xl mx-auto flex flex-col justify-center items-center text-center text-xl md:text-2xl space-y-6">
      <YouTubeVideo videoId={currentSeries.videoId} />

      <div id="avaloacaoserie" className="space-y-6">
        <p id="avaliacaotexto" className="text-lg font-semibold">Quanto você avalia esta série:</p>
        <div className="rating flex justify-center mt-4">
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <input
                type="radio"
                name="star"
                id={`star${i + 1}`}
                className="hidden"
                onClick={() => setRating(i + 1)}
              />
              <label
                htmlFor={`star${i + 1}`}
                className="cursor-pointer relative w-12 text-5xl text-gray-500 hover:text-red-600"
              >
                {rating > i ? <FaStar className="text-red-600" /> : <CiStar />}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div id="avaloacaoserie" className="space-y-6">
        <p id="avaliacaotexto" className="text-lg font-semibold">Deixe seu feedback sobre a série?</p>
        <input
          type="text"
          id="inputtypetext"
          placeholder="Escreva aqui..."
          className="border border-white/25 bg-black bg-opacity-70 text-white rounded-md w-[23rem] md:w-[30rem] p-3 font-bold placeholder-white/50"
        />
      </div>

      <div id="avaloacaoserie" className="mt-6 ">
        <p id="avaliacaotexto" className="text-lg font-semibold">Recomendaria esta série?</p>
        <div id="simounaonet" className="flex justify-between mt-3 md:w-[31rem] w-[24rem]">
          <button
            className={`border w-full rounded-md py-3 font-bold ml-3 ${
              recommendation === 'yes' ? 'bg-red-600 text-white' : 'bg-transparent text-white border-red-700 hover:bg-red-600'
            }`}
            onClick={() => handleRecommendationClick('yes')}
          >
            Sim
          </button>
          <button
            className={`border w-full rounded-md py-3 font-bold ml-3 ${
              recommendation === 'no' ? 'bg-red-600 text-white' : 'bg-transparent text-white border-red-700 hover:bg-red-600'
            }`}
            onClick={() => handleRecommendationClick('no')}
          >
            Não
          </button>
        </div>
      </div>

      <button
        onClick={handleNextSeriesClick}
        id="botaoproximaetapa"
        className="bg-red-700 text-white font-bold p-3 w-full max-w-[23rem] md:max-w-[30rem] rounded-md text-lg"
      >
        PRÓXIMA SÉRIE
      </button>
    </div>
  );
}
