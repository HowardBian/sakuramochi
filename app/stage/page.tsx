"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const mainStage = [
  '/stage/1.webp',
  '/stage/2.webp',
  '/stage/3.webp',
  '/stage/4.webp',
  '/stage/5.webp',
  '/stage/6.webp',
  '/stage/7.webp',
  '/stage/8.webp',
];


function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


export default function Stage() {
  const [shuffledMainStage, setShuffledMainStage] = useState<string[] | null>(null);

  useEffect(() => {
    setShuffledMainStage(shuffleArray(mainStage));
  }, []);
  
  return (
    <main className="flex flex-col w-full min-h-screen p-10 pb-24 text-black text-pretty">
      {/* <p data-aos="fade-up" className="w-full max-w-5xl font-display-en uppercase text-black text-6xl md:text-7xl lg:text-8xl mb-6 md:text-nowrap">
        Stage Performances
      </p> */}

      {/* <img
        src="stageschedule.png"
        className="rounded-lg shadow-md w-[85%] lg:w-[60%] mx-auto"
        alt="Full Schedule"
      /><br/><br/> */}

      <div data-aos="fade-up" className="mx-auto font-sans text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight  ">
          Main Stage Performances
        </h2>

        <div data-aos="fade-up" className="w-full bg-gray-100 p-6 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-2 md:px-4">
            {shuffledMainStage?.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Stage ${index + 1}`}
                className="rounded-lg shadow-md w-full"
                width={2160}
                height={2700}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}