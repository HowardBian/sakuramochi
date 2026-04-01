import Image from "next/image";

const sponsors = [
    { src: "/logo_hyper_x.png", alt: "Hyper X Logo", link:"https://ca.hyperx.com" },
    { src: "/logo_kanto.png", alt: "Kanto Audio Logo", link:"https://www.kantoaudio.com" },
    { src: "/logo_huion.png", alt: "Huion Logo", link:"https://huion.com/" },
    { src: "/logo_teadot.png", alt: "Teadot Logo", link:"https://www.teadotdrinks.com/" },
    
];

export function Sponsors() {
  return (
    <div className="max-w-[90rem] font-sans text-black text-lg px-4 mb-24 lg:mb-0 lg:px-8 mx-auto">
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-5xl md:text-6xl uppercase font-display-en font-bold lg:text-7xl md:leading-tight">
          Sponsorships
        </h2>
        <p className="text-xl">
          A massive thank you to our sponsors for their support. Please check them out!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              className="border-grey border-2 relative flex items-center justify-center overflow-hidden ease-in-out rounded-xl w-36 h-24 md:w-80 md:h-40 p-4"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={320}
                height={320}
                sizes="(min-width: 768px) 320px, 144px"
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}