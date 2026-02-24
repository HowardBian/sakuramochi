"use client";

import { ChevronRightRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [featureOffset, setFeatureOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = currentScrollPos > featureOffset;
      setIsVisible(isVisible);
    };

    const featureElement = document.getElementById("feature");
    if (featureElement) {
      setFeatureOffset(featureElement.offsetTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [featureOffset]);
  return (
    <header className="font-sans sticky top-4 inset-x-0 flex flex-wrap md:justify-between md:flex-nowrap z-50 w-full px-10 lg:px-20 text-sm">
      <motion.nav
        className="relative w-full bg-white text-lg tracking-wider uppercase font-bold border-2 border-grey md:rounded-full rounded-[30px] mx-2 py-3 px-4 md:flex md:items-center justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto"
        aria-label="Global"
        initial={{ y: -100 }} // Initially hidden above the viewport
        animate={{ y: isVisible ? 0 : -100 }} // Fade in and slide down when visible
        transition={{ duration: 0.3 }}
      >
        <div className="lg:max-w-[90rem]">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center rounded-full border-2 border-grey text-black hover:bg-grey disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6"></line>
                  <line x1="3" x2="21" y1="12" y2="12"></line>
                  <line x1="3" x2="21" y1="18" y2="18"></line>
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-start md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a
                className="font-medium text-black transition hover:text-pink md:py-6"
                href="/"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-black transition hover:text-pink md:py-6"
                href="https://www.ubcani.com/"
                target="_blank"
              >
                About Us
              </a>
              <a
                className="font-medium text-black transition hover:text-pink md:py-6"
                href="/volunteer"
              >
                Volunteering
              </a>
              <a
                className="font-medium text-black transition hover:text-pink md:py-6"
                href="/policies"
              >
                Event Policies
              </a>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-3 top-3 md:top-5 md:right-5 text-nowrap font-sans underline underline-offset-4 uppercase font-bold text-xl text-pink tracking-wider flex flex-row items-center gap-x-2 rounded-full"
          >
            <a href="https://anisocial.square.site" target="_blank">
              Buy Tickets NOW
              <ChevronRightRounded fontSize="large" />
            </a>
            {/* Tickets coming soon! */}
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}
