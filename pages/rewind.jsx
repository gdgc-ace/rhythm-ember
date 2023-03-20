import Outlet from "@/components/Outlet";
import React from "react";
import Marquee from "react-fast-marquee";

const rewind = () => {
  return (
    <Outlet>
      <section className="rewind1 min-h-[90vh] flex flex-col justify-center items-center">
        <div className="flex items-center px-12 w-full  gap-8">
          <div className="h-3 md:h-5 bg-black w-full" />
          <div className="text-2xl lg:text-5xl font-black">REWIND</div>
          <div className="h-3 md:h-5 bg-black w-full" />
        </div>
      </section>
      <section className="rewind2 min-h-screen flex flex-col justify-center items-center">
      </section>
      <section className="py-12 px-16 space-y-16">
        <div className="text-2xl lg:text-5xl font-black text-center">
          CELEBS
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <div>
            <img className="max-w-[286px]" src="/assets/dino.png" alt="" />
            <div className="text-2xl font-extrabold text-center mt-6">
              DINO JAMES
            </div>
            <div className="text-lg font-semibold text-center">RAPPER</div>
          </div>
          <div>
            <img className="max-w-[286px]" src="/assets/ashia.png" alt="" />
            <div className="text-2xl font-extrabold text-center mt-6">
              ASHIA KHANNA
            </div>
            <div className="text-lg font-semibold text-center">RAPPER</div>
          </div>
        </div>
      </section>
      <div className="py-12 space-y-12">
        <div className="flex items-center px-12  gap-8">
          <div className="h-3 md:h-5 bg-black w-full" />
          <div className="text-2xl lg:text-5xl font-black">SPONSORS</div>
          <div className="h-3 md:h-5 bg-black w-full" />
        </div>
        <Marquee>
          {[...Array(8)]?.map((_, index) => (
            <div
              key={index}
              className="w-[437px] h-[124px] bg-[#D9D9D9] mx-6"
            />
          ))}
        </Marquee>
        <Marquee direction="right">
          {[...Array(8)]?.map((_, index) => (
            <div
              key={index}
              className="w-[437px] h-[124px] bg-[#D9D9D9] mx-6"
            />
          ))}
        </Marquee>
      </div>
    </Outlet>
  );
};

export default rewind;
