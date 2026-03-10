import Image from "next/image";

const floorplans = [
    { src: "/floorplan_1.png"},
    { src: "/floorplan_2.png"},
    { src: "/floorplan_3.png"},
    { src: "/floorplan_4.png"},
];

export function Floorplan() {
  return (
    <div className="max-w-[90rem] font-sans text-black text-lg px-4 mb-24 lg:mb-0 lg:px-8 mx-auto">
  <div className="flex flex-col items-center mb-14">
    <h2 className="text-5xl md:text-6xl uppercase font-display-en font-bold lg:text-7xl md:leading-tight">
      Floorplans
    </h2>

    {/* Floorplan container: vertical on mobile, grid on larger screens */}
    <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-8 mt-6 w-full">
      {floorplans.map((plan, index) => (
        <div
          key={index}
          className="border-grey border-2 relative overflow-hidden ease-in-out rounded-xl w-full max-w-[600px] h-auto aspect-[1440/1024]"
        >
          <Image src={plan.src} alt={`Floor plan ${index + 1}`} fill sizes="(max-width: 640px) 100vw, 600px" className="object-cover"/>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}