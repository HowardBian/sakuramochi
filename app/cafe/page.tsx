"use client";
// import { CafeFaq } from "@/components/cafeFaq";
// import { easeInOut, motion } from "framer-motion";

import ComingSoon from "../coming-soon/page";

export default function Cafe() {
  return <ComingSoon />;
  // return (
  //   <main>
  //     <div className="relative flex flex-col w-full min-h-dvl items-center p-10 pb-24 text-black text-pretty">
  //       <div
  //         data-aos="fade-up"
  //         className="relative flex flex-row xl:w-2/3 md:justify-items-start justify-between"
  //       >
  //         <div className="flex flex-col z-40 items-center md:items-start gap-2 p-0">
  //           <p className="font-sans uppercase text-2xl font-bold text-pink tracking-wider">
  //             Pop-Up Hanami 2025
  //           </p>
  //           <p className="hidden sm:block font-display-en uppercase text-black text-9xl">
  //             Cosplay Cafe
  //           </p>
  //           <p className="sm:hidden font-display-en uppercase text-black text-8xl">
  //             Sakura Cosplay Cafe
  //           </p>
  //         </div>
  //       </div>
  //       <div data-aos="fade-up" className="lg:w-2/3">
  //         <p className="font-sans font-medium text-lg">
  //         {`Step into a world of pastel dreams at this year's Sakura Cosplay Cafe, where the magic of the early 2000s Shoujo comes to life! Sip on a Sailor Moonblast served by waiters in your favorite Shoujo-inspired outfits, and who knows? A little spark of romance might just find its way into your cup~`}
  //         </p>
  //       </div>
  //       <motion.img
  //         src="/menu.png"
  //         className="md:block float rounded-xl z-0 p-10"
  //         initial={{ y: 500, rotateZ: 50 }}
  //         animate={{ y: 0, rotateZ: 0 }}
  //         transition={{
  //           duration: 2,
  //           bounce: 0.25,
  //           type: "spring",
  //           ease: "easeInOut",
  //         }}
  //       ></motion.img>
  //       <div data-aos="fade-up" className="lg:w-2/3 my-24">
  //         <CafeFaq />
  //       </div>
        
  //     </div>
  //   </main>
  // );
}
