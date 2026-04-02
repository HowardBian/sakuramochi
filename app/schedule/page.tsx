"use client";

import Image from "next/image";

export default function Schedule() {
  return (
    <main className="flex flex-col w-full min-h-screen p-10 pb-24 text-black text-pretty">
      <p data-aos="fade-up" className="w-full max-w-5xl font-display-en uppercase text-black text-6xl md:text-7xl lg:text-8xl mb-6 md:text-nowrap">
        Schedule & Activities
      </p>

          {/* <p data-aos="fade-up" className="font-sans font-medium text-lg">
          {`Evening events:`}<br/>
          {`- `}<b>{`Idol Showcase`}</b>{` - Norm Theatre - START: 7:00 PM`}<br/>
          {`- `}<b>{`Animirai After Party`}</b>{` - Abdul Ladha Building - START: 8:30 PM (19+ only)`}
          </p> */}
      <div data-aos="fade-up" className="w-full bg-gray-100 p-6 flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full lg:w-2/3 px-2 md:px-4">
          <Image src="/schedule.webp" className="rounded-lg shadow-md w-full" alt="Schedule" width={0} height={0} sizes="100vw" />
          <Image src="/panelists_0.webp" className="rounded-lg shadow-md w-full" alt="Panel List 1" width={0} height={0} sizes="100vw" />
          <Image src="/panelists_1.webp" className="rounded-lg shadow-md w-full" alt="Panel List 2" width={0} height={0} sizes="100vw" />
          <Image src="/panelists_2.webp" className="rounded-lg shadow-md w-full" alt="Panel List 3" width={0} height={0} sizes="100vw" />
          <Image src="/raffle_1.webp" className="rounded-lg shadow-md w-full" alt="Raffle 1" width={0} height={0} sizes="100vw" />
          <Image src="/raffle_2.webp" className="rounded-lg shadow-md w-full" alt="Raffle 2" width={0} height={0} sizes="100vw" />
          <Image src="/raffle_3.webp" className="rounded-lg shadow-md w-full" alt="Raffle 3" width={0} height={0} sizes="100vw" />
          <Image src="/raffle_4.webp" className="rounded-lg shadow-md w-full" alt="Raffle 4" width={0} height={0} sizes="100vw" />
          <Image src="/raffle_5.webp" className="rounded-lg shadow-md w-full" alt="Raffle 5" width={0} height={0} sizes="100vw" />
          <Image src="/raffle_6.webp" className="rounded-lg shadow-md w-full" alt="Raffle 6" width={0} height={0} sizes="100vw" />
        </div>
      </div>
    </main>
  );
}