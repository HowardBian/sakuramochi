"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/card";
import { Floorplan } from "@/components/floorplan";
import { Sponsors } from "@/components/sponsors";
import { Faq } from "@/components/faq";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  return (
    <>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-24 text-black text-balance">
        {/* <motion.div
          id="logo"
          className="mt-8 w-full md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="logo.png" />
        </motion.div> */}

        <div
          data-aos="fade-up"
          ref={ref}
          className="relative flex flex-row lg:w-2/3 justify-between"
        >
          <div className="flex flex-col z-40 lg:items-start justify-items-center gap-2 p-0">
            <p className="font-sans uppercase text-2xl font-bold text-pink tracking-wider">
              ubc anime club presents
            </p>
            <p className="font-display-en uppercase text-9xl">
              <span className="text-pink">Pop-Up</span> Hanami<br></br>
              <span className="text-pink"> 2025</span>
            </p>
            
            <div className="font-mono font-bold text-3xl md:text-4xl uppercase mb-5 text-nowrap">
              <p>Date March 29, 2025</p>
              <p>11:00am - 8:30pm</p>
            </div>
            <p className="font-sans w-full lg:w-2/5 font-medium text-lg">
            A one-day, cherry-blossom-themed event at the University of British Columbia, featuring a cosplay cafe, an artist alley, stage performances, games & raffles, and more!
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 my-10 justify-items-stretch">
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="font-sans uppercase font-bold text-lg text-white tracking-wider bg-pink py-4 px-10 inline-flex items-center gap-x-2 rounded-full border-none"
              >
                <a href="#features">Learn More</a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="font-sans uppercase font-bold text-lg tracking-wider border-2 bg-white border-black py-4 px-10 inline-flex items-center gap-x-2 rounded-full"
              >
                <a href="https://anisocial.square.site" target="_blank">
                  Buy Tickets NOW!
                </a>
              </motion.button>
            </div>
          </div>
          <motion.img
            style={{ y }}
            className="hidden absolute z-0 lg:block -right-28 -top-10 w-3/4"
            src="/graphic3.png"
          />
        </div>
      </div>
      <div id="features" className="z-50 px-10 md:px-20 -mt-20 lg:p-40">
        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-2 gap-10 text-black"
        >
          <Card
            title={"Sakura Cosplay Cafe"}
            description={
              "Cosplay waiters serve you sweet treats under the cherry blossoms!"
            }
            link={"/cafe"}
            imgsrc={"/cosplay cafe.png"}
          />
          <Card
            title={"Artist & Vendor Alley"}
            description={
              "Featuring never before seen merch from the hidden talents of UBCAni artists."
            }
            link={"/artists"}
            imgsrc={"/artist alley.png"}
          />
          <Card
            title={"Stage Performances"}
            description={
              "Dance performances, idol groups, non-stop J-Pop, J-Rock, and anime OPs for the whole day."
            }
            link={"/stage"}
            imgsrc={"/stage performances.png"}
          />
          <Card
            title={"Schedule & Activities"}
            description={
              "Join our community hosted panels, workshops, and Hanami-inspired activities to cash in at our raffles and prizes!"
            }
            link={"/schedule"}
            imgsrc={"/games.png"}
          />
        </div>
        <div data-aos="fade-up" className="mt-20">
          <Floorplan />
          <Sponsors />
          <Faq />
        </div>
      </div>
    </>
  );
}
