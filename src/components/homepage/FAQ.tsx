import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Do I need a visa for these destinations?",
      answer: "Visa requirements depend on your nationality and the destination you are visiting. We recommend checking the visa regulations for Makkah, Turkey, and any other countries in your itinerary. We can also assist with visa application information."
    },
    {
      id: 2,
      question: "What's included in the tour packages?",
      answer: "Our packages typically include accommodation, transportation, guided tours, and some meals. Premium packages may include additional services like VIP access to holy sites, luxury accommodations, and personalized guides. Each package details are clearly listed on the specific trip page."
    },
    {
      id: 3,
      question: "Do you offer discounts for groups?",
      answer: "Yes, we offer special rates for group bookings. The discount varies based on the size of the group and the selected package. Please contact our customer service for more information about group rates and special arrangements."
    },
    {
      id: 4,
      question: "What is the payment process like?",
      answer: "We offer flexible payment options. You can secure your booking with a deposit and pay the remaining amount in installments before your departure date. We accept various payment methods including credit cards, bank transfers, and online payment systems."
    }
  ];

  const [openItem, setOpenItem] = useState<number>(1);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id);
  };

  return (
    <section className="flex w-full gap-[40px_56px] text-black tracking-[0.5px] flex-wrap px-[120px] py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] pt-[120px] max-md:max-w-full max-md:pt-[100px]">
        <h2 className="text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
          Frequently Ask Question
        </h2>
        <p className="text-base font-normal leading-8 mt-2 max-md:max-w-full">
          Your guide to common inquiries about our travel services, helping
          you navigate your travel plans with ease and get clarity on our
          services, bookings, and more!
        </p>
      </div>
      <div className="min-w-60 w-[679px] pt-[120px] max-md:max-w-full max-md:pt-[100px]">
        {faqItems.map((item) => (
          <div 
            key={item.id}
            className={`${
              openItem === item.id 
                ? 'bg-[rgba(220,223,206,1)]' 
                : ''
            } w-full p-8 rounded-3xl mt-8 first:mt-0 max-md:max-w-full max-md:px-5`}
          >
            <div 
              className="flex w-full items-center gap-[40px_100px] text-2xl font-bold leading-none justify-between flex-wrap max-md:max-w-full cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <div className="self-stretch my-auto max-md:max-w-full">
                {item.question}
              </div>
              <div className={`self-stretch flex w-6 shrink-0 h-6 my-auto ${openItem === item.id ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            {openItem === item.id && (
              <div className="text-base font-normal leading-8 mt-4 max-md:max-w-full">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
