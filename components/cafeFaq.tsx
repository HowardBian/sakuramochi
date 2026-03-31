type CafeFaqItemData = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const cafeFaqItems: CafeFaqItemData[] = [
  {
    question: 'What are the hours of the Cafe?',
    answer: 'We are open at 12:30PM until we run out of drinks, or 7:00PM, whichever comes first!',
    defaultOpen: true,
  },
  {
    question: 'Do I need a reservation for the cafe, or can I walk in?',
    answer: 'No! Simply walk into the cafe and line up to place your order.',
  },
  {
    question: 'Do I need to purchase a ticket for Pop-Up Hanami to go to the cafe?',
    answer: 'Tickets to Pop-Up Hanami are required for entrance to the cafe.',
  },
  {
    question: 'What type of food/drinks do you serve?',
    answer: 'We serve four specially-made themed drinks, please find them on our menu!',
  },
  {
    question: 'Are your drinks vegetarian/vegan?',
    answer: 'All of our drinks are vegan!',
  },
  {
    question: 'What are the prices of each drink?',
    answer: 'All of our drinks are priced at $5!',
  },
  {
    question: 'What kind of payment does the cafe take?',
    answer: 'No cash, we take cards only!',
  },
  {
    question: 'What time are the cafe performances?',
    answer: '2:00PM to 3:30PM, we will first have UAM playing, and then AniJazz Project!',
  }
];

function AccordionChevron() {
  return (
    <>
      <svg
        className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-black group-hover:text-green"
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
        <path d="m6 9 6 6 6-6" />
      </svg>
      <svg
        className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-black group-hover:text-green"
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
        <path d="m18 15-6-6-6 6" />
      </svg>
    </>
  );
}

function CafeFaqItem(props: { item: CafeFaqItemData; index: number }) {
  const headingId = 'cafe-faq-heading-' + (props.index + 1);
  const collapseId = 'cafe-faq-collapse-' + (props.index + 1);
  const accordionClassName =
    'hs-accordion hs-accordion-active:bg-grey bg-opacity-25 rounded-xl p-6' +
    (props.item.defaultOpen ? ' active' : '');
  const contentClassName =
    'hs-accordion-content w-full overflow-hidden transition-[height] duration-300' +
    (props.item.defaultOpen ? '' : ' hidden');

  return (
    <div className={accordionClassName} id={headingId}>
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-green"
        aria-controls={collapseId}
      >
        {props.item.question}
        <AccordionChevron />
      </button>
      <div id={collapseId} className={contentClassName} aria-labelledby={headingId}>
        <p className="text-black">{props.item.answer}</p>
      </div>
    </div>
  );
}

export function CafeFaq() {
  return (
    <div className="mx-auto font-sans">
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight  ">
          Got questions about the Cafe?
        </h2>
      </div>

      <div className="mx-auto">
        <div className="hs-accordion-group">
          {cafeFaqItems.map((item, index) => (
            <CafeFaqItem key={item.question} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}