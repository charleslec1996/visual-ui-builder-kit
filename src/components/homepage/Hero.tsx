import React, { useState } from 'react';
import SearchForm from './SearchForm';

const Hero: React.FC = () => {
  return (
    <section className="self-stretch w-full pb-[72px] max-md:max-w-full">
      <div className="flex flex-col relative min-h-[890px] w-full pt-10 px-20 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/6360d558b5fb7ec7b8a072c773ce57296d18fb45?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background"
        />
        <div className="relative z-10 flex mb-[-72px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
          <nav className="bg-[rgba(0,63,19,1)] flex w-full flex-col items-stretch text-white justify-center p-8 rounded-[120px] max-md:max-w-full max-md:px-5">
            <div className="flex w-full items-center flex-wrap max-md:max-w-full">
              <div className="self-stretch flex items-center gap-3 text-xl font-bold whitespace-nowrap my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/f61cd48a34aa4e7609bbbb609bdf1a91028c005a?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-11 self-stretch shrink-0 my-auto"
                  alt="QiblaTrip logo"
                />
                <div className="self-stretch my-auto">
                  QIBLATRIP
                </div>
              </div>
              <div className="self-stretch flex min-w-60 items-center gap-[40px_45px] text-base tracking-[0.3px] flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <div className="self-stretch flex min-w-60 items-center gap-6 font-normal my-auto">
                  <a href="#" className="self-stretch my-auto hover:text-gray-200 transition-colors">
                    Upcoming Trip
                  </a>
                  <a href="#" className="self-stretch my-auto hover:text-gray-200 transition-colors">
                    Gallery
                  </a>
                  <a href="#" className="self-stretch my-auto hover:text-gray-200 transition-colors">
                    About
                  </a>
                </div>
                <button className="self-stretch border gap-2.5 font-semibold my-auto px-6 py-3 rounded-3xl border-white border-solid hover:bg-white hover:text-[rgba(0,63,19,1)] transition-colors max-md:px-5">
                  My Booking
                </button>
              </div>
            </div>
          </nav>
          <div className="self-center flex w-[950px] max-w-full flex-col items-center mt-9">
            <div className="flex w-[695px] max-w-full flex-col items-stretch">
              <div className="flex w-full flex-col items-stretch text-black text-center max-md:max-w-full">
                <h1 className="text-[64px] font-medium tracking-[0.1px] self-center max-md:max-w-full max-md:text-[40px]">
                  Your Spiritual Journey
                  <br />
                  Perfectly Planned
                </h1>
                <p className="text-xl font-light mt-2 max-md:max-w-full">
                  With comprehensive support, we make your holy pilgrimage
                  stress-free
                </p>
              </div>
              <button className="self-center bg-[rgba(103,126,50,1)] gap-2.5 text-base text-white font-semibold tracking-[0.3px] mt-8 px-6 py-3 rounded-3xl hover:bg-[rgba(83,106,30,1)] transition-colors max-md:px-5">
                Check Deals
              </button>
            </div>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
