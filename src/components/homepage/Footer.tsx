import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(0,63,19,1)] w-full text-white p-[120px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-[40px_64px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex items-center gap-3 text-xl font-bold whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/56c18aa7a0959633bdd694a12a14066405e6ea8d?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-11 self-stretch shrink-0 my-auto"
              alt="QiblaTrip logo"
            />
            <div className="self-stretch my-auto">
              QIBLATRIP
            </div>
          </div>
          <p className="text-base font-normal leading-6 tracking-[0.3px] mt-6">
            specialize in providing seamless travel experiences for your
            spiritual journeys to Makkah, Turkey, and neighboring countries
          </p>
        </div>
        <div className="flex flex-col items-stretch text-base font-normal tracking-[0.3px] justify-center">
          <h3 className="font-semibold">More to know</h3>
          <a href="#" className="mt-4 hover:text-gray-300 transition-colors">Blog</a>
          <a href="#" className="mt-4 hover:text-gray-300 transition-colors">Upcoming</a>
          <a href="#" className="mt-4 hover:text-gray-300 transition-colors">Gallery</a>
          <a href="#" className="mt-4 hover:text-gray-300 transition-colors">About</a>
        </div>
        <div className="flex flex-col items-stretch text-base font-normal tracking-[0.3px] justify-center">
          <h3 className="font-semibold">Contact Us</h3>
          <div className="mt-4">021-0494-3049</div>
          <div className="mt-4">@qiblatrip</div>
          <a href="mailto:admin@qiblatrip.com" className="mt-4 hover:text-gray-300 transition-colors">admin@qiblatrip.com</a>
        </div>
      </div>
      <div className="border min-h-px w-full mt-8 border-white border-solid max-md:max-w-full" />
      <div className="flex w-full gap-6 text-base font-normal tracking-[0.3px] flex-wrap mt-8 max-md:max-w-full">
        <div className="flex-1 shrink basis-[0%] max-md:max-w-full">
          2024 Qiblatrip
        </div>
        <a href="#" className="hover:text-gray-300 transition-colors">Term of Services</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Legal</a>
      </div>
    </footer>
  );
};

export default Footer;
