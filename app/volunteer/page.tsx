"use client";
import { motion } from "framer-motion";
import {
  BackHandRounded,
  BakeryDiningRounded,
  LocalCafeRounded,
  PhotoCameraBackRounded,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import Chip from "@/components/chip";

export default function Volunteer() {
  return (
    <main>
      <div className="relative flex flex-col w-full min-h-dvl items-center p-10 pb-24 text-black text-pretty">
        <div
          data-aos="fade-up"
          className="relative flex flex-row xl:w-2/3 md:justify-items-start justify-between"
        >
          <div className="flex flex-col z-40 items-center md:items-start gap-2 p-0">
            <p className="hidden md:block font-sans uppercase text-2xl font-bold text-pink tracking-wider">
              help bring pop-up hanami to life!
            </p>
            <p className="font-display-en uppercase text-pink text-8xl mb-6 md:text-9xl">
              Volunteer <span className="hidden text-black lg:inline">Now</span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="border-grey border-2 relative aspect-[18/6] w-full xl:w-2/3 rounded-xl overflow-hidden mb-10"
        >
          <img
            className="size-full absolute top-0 start-0 object-cover rounded-2xl"
            src="/volunteers wanted.png"
          />
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-2/3 font-sans font-medium text-lg"
        >
          <p>
            All volunteers will be expected to arrive early on the day-of to
            help set-up the event, and have a Discord account for us to
            communicate to you with. Different roles may require additional
            training. Thank you so much for your interest in volunteering at
            Pop-Up Hanami!
          </p>
          <p className="mt-4 italic">
            The event can only happen because of people like you :)
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                title={"General Volunteer"}
                description={
                  "Set up, Registration, Activity Booths, Stagehands, Security, and more!"
                }
                icon={<BackHandRounded />}
                link={"https://docs.google.com/forms/d/e/1FAIpQLSc7O8EXoxg6WkQ4m08pg1jAuOhqOg8OkSg79kizkkD1_gIR7Q/viewform"}
              />
            </motion.div>
            {/* <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                title={"Photography Volunteer"}
                description={
                  "Film attendees, guests, the cafe, stage events, and volunteers behind the scenes."
                }
                icon={<PhotoCameraBackRounded />}
                link={"https://forms.gle/prLY4uzrH2rVZst27"}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                title={"Cafe Food Team"}
                description={"Plate and decorate food in the kitchen."}
                icon={<BakeryDiningRounded />}
                link={"https://forms.gle/J8gXTUcqgxoxkLh6A"}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                title={"Cafe Drinks Team"}
                description={"Creating and making drinks."}
                icon={<LocalCafeRounded />}
                link={"hhttps://forms.gle/mX7NxP2opHf7xXAo9"}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                title={"Cafe Server Team"}
                description={
                  "Become a server and host guests at the Sakura Cosplay Cafe."
                }
                icon={<VolunteerActivismRounded />}
                link={"https://forms.gle/ytXTNp3SqYjH8J8EA"}
              />
            </motion.div> */}
            {/* <b>Volunteer applications coming soon!</b> */}
          </div>
        </div>
      </div>
    </main>
  );
}
