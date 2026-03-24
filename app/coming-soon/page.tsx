"use client";

export default function ComingSoon() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-10 md:p-24 text-black">
        <div
          // data-aos="fade-up"
          className="relative flex flex-row w-full mx-10 lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-display-en text-black text-6xl md:text-9xl">
              More info coming soon~!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
