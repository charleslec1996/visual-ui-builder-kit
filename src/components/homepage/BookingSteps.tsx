import React from 'react';

const BookingSteps: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/94f2478d2be1a0667bf6a3f15b136d788ccd6504?placeholderIfAbsent=true",
      title: "Start Your Umrah and Trip Journey",
      description: "Embark on your spiritual adventure with us as you begin your Umrah and travel experience. Let us guide you every step of the way!"
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/20bd96610d482c74485365a6a0430af5e6ea2afd?placeholderIfAbsent=true",
      title: "Select Your Preferred Package",
      description: "Explore our wide range travel packages. Whether you're looking for a luxurious experience or a budget-friendly option, we have the perfect package for you to create lasting memories"
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/fb0fbe972e9b03a4993367347de747e6845e863b?placeholderIfAbsent=true",
      title: "Provide Travel Details",
      description: "Share your travel information and fill in your details. Let us handle the rest, ensuring a smooth and personalized experience for your journey!"
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/94148cfea4f5c3b6f5ae51e141b126e47e4e7d39?placeholderIfAbsent=true",
      title: "Confirm and Complete Booking",
      description: "Take a moment to review all your selections, making sure everything is just as you want it."
    }
  ];

  return (
    <section className="flex w-full items-stretch text-white tracking-[0.5px] flex-wrap px-[120px] py-[60px] max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/1df561bb64ac6a6eb9346994dba3fbb0e6085cf2?placeholderIfAbsent=true"
        className="aspect-[0.6] object-contain w-[472px] min-w-60 grow shrink my-auto rounded-[32px_0px_0px_32px] max-md:max-w-full"
        alt="Booking steps illustration"
      />
      <div className="bg-[rgba(0,63,19,1)] flex min-w-60 flex-col items-stretch justify-center grow shrink w-[492px] p-8 rounded-[0px_32px_32px_0px] max-md:max-w-full max-md:px-5">
        <h2 className="w-full text-5xl font-bold leading-[72px] max-md:max-w-full max-md:text-[40px] max-md:leading-[67px]">
          Easy Step to Booking and Checkout Trip
        </h2>
        <div className="w-full mt-8 max-md:max-w-full">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex w-full gap-8 flex-wrap ${index > 0 ? 'mt-14 max-md:mt-10' : ''} max-md:max-w-full`}
            >
              <img
                src={step.icon}
                className="aspect-[1] object-contain w-20 shrink-0"
                alt={`Step ${step.id} icon`}
              />
              <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                <h3 className="text-2xl font-bold max-md:max-w-full">
                  {step.title}
                </h3>
                <p className="text-base font-normal leading-8 mt-2 max-md:max-w-full">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
