import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: "Great trip to Makkah and Turkey! Booking was easy, and everything was well-organized. I highly recommend it for anyone going on a pilgrimage",
      name: "Ahmed Iqbal",
      designation: "Professional Farmer",
      avatar: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/8dc4414759ead70df8e838419bd98903788620a9?placeholderIfAbsent=true"
    },
    {
      id: 2,
      text: "The QiblaTrip experience exceeded my expectations. The guides were knowledgeable and the accommodations were excellent. Will definitely book again!",
      name: "Fatima Hassan",
      designation: "Teacher",
      avatar: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/3e28129338e49c2b618a3891eb8b4e8b5e99b062?placeholderIfAbsent=true"
    },
    {
      id: 3,
      text: "As a first-time pilgrim, I was nervous about the journey, but QiblaTrip made everything seamless. Their attention to detail is impressive!",
      name: "Mohammed Ali",
      designation: "Business Owner",
      avatar: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/b5ee45fcf1eb5f623c6c9d403e492a6d00a4a70a?placeholderIfAbsent=true"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section className="flex w-full flex-col items-center px-[120px] py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex max-w-full w-[1200px] flex-col items-center text-black text-center tracking-[0.5px]">
        <h2 className="text-5xl font-bold max-md:max-w-full max-md:text-[40px]">
          Explore Inspiring Stories and
          <br />
          Prepare for an Unforgettable Journey
        </h2>
        <p className="text-base font-normal leading-8 w-[954px] mt-2 max-md:max-w-full">
          Discover the heartfelt experiences of fellow travelers who have
          embarked on their spiritual journeys with us. Their stories will
          inspire you and help you envision the incredible adventures that
          await you with Qiblatrip!
        </p>
      </div>
      <div className="bg-white flex max-w-full w-[1200px] items-stretch gap-[40px_48px] justify-center flex-wrap mt-8 px-[72px] py-14 rounded-[32px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/c41b67d890aa72a2651d7fcb5a53d6b84fde67fb?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[520px] min-w-60 rounded-[0px_0px_0px_0px] max-md:max-w-full"
          alt="Testimonial illustration"
        />
        <div className="flex min-w-60 flex-col items-stretch justify-between flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-black max-md:max-w-full">
            <blockquote className="text-[32px] font-normal leading-[48px] tracking-[0.5px] max-md:max-w-full">
              "{activeTestimonial.text}"
            </blockquote>
            <div className="flex gap-3 text-center justify-center mt-6">
              <img
                src={activeTestimonial.avatar}
                className="aspect-[1] object-contain w-16 shrink-0"
                alt={activeTestimonial.name}
              />
              <div className="flex flex-col">
                <div className="text-2xl font-semibold tracking-[0.5px]">
                  {activeTestimonial.name}
                </div>
                <div className="text-base font-normal tracking-[0.3px] mt-2">
                  {activeTestimonial.designation}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-32 max-md:mt-10">
            {testimonials.map(testimonial => (
              <img
                key={testimonial.id}
                src={testimonial.avatar}
                className={`aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto cursor-pointer ${
                  activeTestimonial.id === testimonial.id ? 'ring-4 ring-[rgba(0,63,19,1)] rounded-full' : ''
                }`}
                alt={testimonial.name}
                onClick={() => setActiveTestimonial(testimonial)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
