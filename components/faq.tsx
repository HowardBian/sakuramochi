export function Faq() {
  return (
    <div className="max-w-[90rem] font-sans text-black text-lg px-4 mb-24 lg:mb-0 lg:px-8 mx-auto">
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-5xl md:text-6xl uppercase font-display-en font-bold lg:text-7xl md:leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xl">
          Have more questions? Contact us at{" "}
          <span className="text-pink"><a href="mailto:hanami.ubcani@gmail.com">hanami.ubcani@gmail.com</a></span>!
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="hs-accordion-group divide-y divide-pink">
            <div
              className="hs-accordion pb-3 active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                What time is the event? Can I come at any time?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="mb-2">
                  Pop-Up Hanami officially starts at 11:30am, and will end at 7:30pm. The cafe will run until sold out. 
                </p>
                <p>
                  We recommend coming as early as possible to get your favourite drink at our Cafe and get the limited-run merch at the Artist & Vendor Alley!
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                Can I buy a ticket on the day-of?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p>
                  Tickets can be purchased at the registration counter on the
                  day-of, except in the case we are overcapacity. Therefore, we
                  recommend buying early-bird tickets to enjoy our discounted
                  rate and be guaranteed entry! We accept cash and card payment
                  for at-the-door ticket sales.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                Where can I park?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p>
                  Parking on campus takes the form of lot/street parking as well
                  as parkades. For more information on specific parking
                  information including locations as well as prices and hours,
                  please consult the official UBC parking map:{" "}
                  <span className="underline text-pink">
                    <a href="https://parking.ubc.ca/map">
                      https://parking.ubc.ca/map
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                Are pets permitted at the event?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p className="">
                  Pets are not allowed in the AMS Nest, with the exception of
                  approved support and service animals. For more information,
                  please see our Event Policies.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
              >
                What are your cosplay and weapon prop policies?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <p className="mb-2">
                  We highly encourage attendees to cosplay to Pop-Up Hanami! 
                  However, please keep in mind that this is an all-ages event and cosplay appropriately.
                </p>
                <p className="mb-2">
                  All weapon props must have clear markings or modifications to indicate that they are fake. 
                  Bright ribbons will be provided at registration if required.
                </p>
                <p>For more information, please see our Event Policies.</p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3 lg:hidden"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                Where is the event? How do I get there?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p>
                Pop-Up Hanami will be held across the 2nd floor of the AMS Nest. Please first pick up your registration pass on the First Floor (the booths in front of Teadot) before heading to the main event!</p>
                </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3 lg:hidden"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                How can I purchase a UBCAni Membership?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p>
                  You can purchase a UBCAni Membership at any of our weekly
                  events hosted on UBC campus, or at our club room by dropping
                  us a message at <a href="http://instagram.com/popuphanami">instagram.com/popuphanami</a>, pinging an exec on our
                  Discord Server, or sending an email to <a href="mailto:hanami.ubcani@gmail.com">hanami.ubcani@gmail.com</a>.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3 lg:hidden"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                Is card payment accepted at the event?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="">
                  The cafe will only accept Card payment, but some artist alley
                  booths may be cash only. We encourage you to bring cash just
                  in case!
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3 lg:hidden"
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                How do I connect to the UBC WiFi?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p>
                  You can testaccess UBC’s visitors wifi by selecting ubcvisitor.
                  For more information including how to connect and access
                  ubcvisitor, please consult the official web page:
                  <a href="https://it.ubc.ca/services/email-voice-internet/wireless-internet-access/ubcvisitor-wireless-network" >https://it.ubc.ca/services/email-voice-internet/wireless-internet-access/ubcvisitor-wireless-network</a>
                </p>
              </div>
            </div>

            <div
              className="hs-accordion pt-6 pb-3 lg:hidden"
              id="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
              >
                Help! I have a question that isn’t answered by this FAQ.
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <p>
                  For more information about the Sakura Cafe, Artist & Vendor Alley, Stage Performances, and Activities & Raffles, please see the sections above. If you still cannot find the answer to your question, please email us at <a href="mailto:hanami.ubcani@gmail.com">hanami.ubcani@gmail.com</a>, or message us at <a href="https://instagram.com/popuphanami"> instagram.com/popuphanami</a>!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1">
          <div className="hs-accordion-group divide-y divide-pink">
            {/* Where is the event? How do I get there? */}
            <div
              className="hs-accordion pb-3 active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                Where is the event? How do I get there?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p>
                  Pop-Up Hanami will be held across the 2nd floor of the AMS
                  Nest. Please first pick up your registration pass in the Lower
                  Atrium (head down the stairs in front of Blue Chip) before
                  heading to the main event!
                </p>
              </div>
            </div>

            {/* How can I purchase a UBCAni Membership? */}
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                How can I purchase a UBCAni Membership?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p>
                  You can purchase a UBCAni Membership at any of our weekly
                  events hosted on UBC campus, or at our club room by dropping
                  us a message at <a href="http://instagram.com/popuphanami">instagram.com/popuphanami</a>, pinging an exec on our
                  Discord Server, or sending an email to <a href="mailto:hanami.ubcani@gmail.com">hanami.ubcani@gmail.com</a>.
                </p>
              </div>
            </div>

            {/* Is card payment accepted at the event? */}
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                Is card payment accepted at the event?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="">
                  The cafe will only accept Card payment, but some artist alley
                  booths may be cash only. We encourage you to bring cash just
                  in case!
                </p>
              </div>
            </div>

            {/* How do I connect to the UBC WiFi? */}
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                How do I connect to the UBC WiFi?
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p>
                  You can access UBC’s visitors wifi by selecting ubcvisitor.
                  For more information including how to connect and access
                  ubcvisitor, please consult the official web page: <br></br>
                  <a href="https://it.ubc.ca/services/email-voice-internet/wireless-internet-access/ubcvisitor-wireless-network">https://it.ubc.ca/services/email-voice-internet/wireless-internet-access/ubcvisitor-wireless-network</a>
                </p>
              </div>
            </div>

            {/* Help! I have a question that isn’t answered by this FAQ. */}
            <div
              className="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
              >
                Help! I have a question that isn’t answered by this FAQ.
                <svg
                  className="hs-accordion-active:hidden block flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden flex-shrink-0 size-5 group-hover:text-green "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <p className="">
                  For more information about the Hanami Cafe, Artist & Vendor Alley, Stage Performances, and Activities & Raffles, please see the sections above. If you still cannot find the answer to your question, please email us at <a href="mailto:hanami.ubcani@gmail.com">hanami.ubcani@gmail.com</a>, or message us at <a href="https://instagram.com/popuphanami"> instagram.com/popuphanami</a>!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
