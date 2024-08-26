import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";

interface props {
  videoId: any
}


export default function YouTubeVideo({ videoId }: props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative rounded-lg flex justify-center items-center w-full max-w-[30rem] cursor-pointer bg-cover bg-center ${clicked ? '' : 'bg-silver'}`}
      style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/0.jpg)`, aspectRatio: '16/9' }}
    >
      {!clicked ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-1/6 aspect-square rounded-full bg-white flex justify-center items-center">

              <FaPlay className='text-black text-3xl'/>

          </div>
        </div>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          allow="autoplay"
          allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
        ></iframe>
      )}
    </div>
  );
}
