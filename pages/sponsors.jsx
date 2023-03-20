import Outlet from "@/components/Outlet";
import React from "react";
import Marquee from "react-fast-marquee";

const sponsors = () => {
  return (
    <Outlet>
      <div className="py-12 space-y-12">
        <div className="flex items-center px-12  gap-8">
          <div className="h-3 md:h-5 bg-black w-full" />
          <div className="text-2xl lg:text-5xl font-black">SPONSORS</div>
          <div className="h-3 md:h-5 bg-black w-full" />
        </div>
        <Marquee>
            {
                [...Array(8)]?.map((_, index) => (
                    <div key={index} className='w-[437px] h-[124px] bg-[#D9D9D9] mx-6' />
                ))
            }
        </Marquee>
        <Marquee
        direction="right"
        >
            {
                [...Array(8)]?.map((_, index) => (
                    <div key={index} className='w-[437px] h-[124px] bg-[#D9D9D9] mx-6' />
                ))
            }
        </Marquee>
        <div className="flex items-center px-12  gap-8">
          <div className="h-3 md:h-5 bg-black w-full" />
          <div className="text-2xl lg:text-5xl font-black text-center">PREVIOUS SPONSORS</div>
          <div className="h-3 md:h-5 bg-black w-full" />
        </div>
        <Marquee>
            {
                [...Array(8)]?.map((_, index) => (
                    <div key={index} className='w-[437px] h-[124px] bg-[#D9D9D9] mx-6' />
                ))
            }
        </Marquee>
        <Marquee
        direction="right"
        >
            {
                [...Array(8)]?.map((_, index) => (
                    <div key={index} className='w-[437px] h-[124px] bg-[#D9D9D9] mx-6' />
                ))
            }
        </Marquee>
      </div>
    </Outlet>
  );
};

export default sponsors;
