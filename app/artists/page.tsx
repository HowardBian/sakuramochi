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

        {/* <div 
          data-aos="fade-up"
          className="flex flex-col z-40 items-center md:items-start gap-2 p-4 w-3/4">
          <img src="Artist_Alley_Floorplan.png"></img>          
        </div> */}
          
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-4 gap-6 w-full max-w-6xl"
        >
          <Image
            className="w-full h-auto"
            src="/frame_1.webp"
            alt="Artist feature frame 1"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/frame_2.webp"
            alt="Artist feature frame 2"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/frame_3.webp"
            alt="Artist feature frame 3"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/frame_4.webp"
            alt="Artist feature frame 4"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/frame_5.webp"
            alt="Artist feature frame 5"
            width={978}
            height={928}
          />
          <Image
            className="w-full h-auto"
            src="/frame_6.webp"
            alt="Artist feature frame 6"
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
