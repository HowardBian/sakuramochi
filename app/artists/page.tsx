"use client";
import Image from "next/image";

export default function Volunteer() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-10 pb-24 text-black text-pretty">
        <div
          data-aos="fade-up"
          className="relative flex flex-row xl:w-2/3 md:justify-items-start justify-between"
        >
          <div className="flex flex-col z-40 items-center md:items-start gap-2 p-0">
            <p className="font-display-en uppercase text-pink text-8xl mb-6 md:text-9xl">
              Artists
            </p>
          </div>
        </div>

        <div 
          data-aos="fade-up"
          className="flex flex-col z-40 items-center md:items-start gap-2 p-4 w-full md:w-3/4">
          <Image
            src="/GreatHallFloorplan2026.webp"
            alt="Great Hall floor plan"
            width={4096}
            height={2720}
            className="w-full h-auto"
          />
          <Image
            src="/Room2306And2301Floorplan2026.webp"
            alt="Room 2306 and Room 2301 floor plan"
            width={4096}
            height={2170}
            className="w-full h-auto"
          />
        </div>
          
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-4 gap-6 w-full max-w-6xl"
        >
          <Image
            className="w-full h-auto"
            src="/A1.webp"
            alt="Artist Section A 1st frame"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/A2.webp"
            alt="Artist Section A 2nd frame"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/A3.webp"
            alt="Artist Section A 3rd frame"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/A4.webp"
            alt="Artist Section A 4th frame"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/A5.webp"
            alt="Artist Section A 5th frame"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/A6.webp"
            alt="Artist Section A 6nd frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/A7.webp"
            alt="Artist Section A 7th frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/A8-B1.webp"
            alt="Artist Section A 1st frame to Artist Section B 1st frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/B2.webp"
            alt="Artist Section B 2nd frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/B3.webp"
            alt="Artist Section B 3rd frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/C1.webp"
            alt="Artist Section C 1st frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/C2.webp"
            alt="Artist Section C 2nd frame"
            width={977}
            height={652}
          />
          <Image
            className="w-full h-auto"
            src="/C3.webp"
            alt="Artist Section C 3rd frame"
            width={977}
            height={652}
          />
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-2/3 font-sans font-medium text-lg"
        >
          
        </div>
      </div>
    </main>
  );
}
