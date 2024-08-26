'use client';

import React, { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export default function CustomProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Incrementa o progresso em 1% a cada intervalo
        } else {
          clearInterval(interval); // Limpa o intervalo quando atinge 100%
          return 100;
        }
      });
    }, 100); // Ajuste a velocidade do progresso aqui (em milissegundos)

    return () => clearInterval(interval); // Limpeza do intervalo ao desmontar o componente
  }, []);

  return (
    <div className="w-full">
      <p className="text-lg font-bold mb-2 text-center">Processando pagamento...</p>
      <ProgressBar
        completed={progress}
        bgColor="#DC2626"
        height="20px"
        width="100%"
        isLabelVisible={true}
        transitionDuration="1s"
        transitionTimingFunction="ease-in-out"
        labelAlignment="center"
        labelColor="#fff"
        baseBgColor="#f3f4f6"
      />
    </div>
  );
}
