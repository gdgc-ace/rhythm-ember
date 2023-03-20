import Outlet from "@/components/Outlet";
import React from "react";

const events = () => {
  return (
    <Outlet>
      <div className="py-12 px-12 space-y-12">
        <div className="flex items-center  gap-8">
          <div className="h-3e md:h-5 bg-black w-full" />
          <div className="text-2xl lg:text-5xl font-black">EVENTS</div>
          <div className="h-3e md:h-5 bg-black w-full" />
        </div>
        <div className="space-y-12 max-w-6xl mx-auto">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-extrabold">NIGHT EVENTS</h2>
                <div className="scroll-hide flex gap-x-8 overflow-x-scroll">
                    {
                        [...Array(8)]?.map((_, index) => (
                            <div className="scroll-hide min-w-[232px] min-h-[275px] bg-[#D9D9D9]"></div>
                        ))
                    }
                </div>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-extrabold">PRE EVENTS</h2>
                <div className="scroll-hide flex gap-x-8 overflow-x-scroll">
                    {
                        [...Array(8)]?.map((_, index) => (
                            <div className="scroll-hide min-w-[232px] min-h-[275px] bg-[#D9D9D9]"></div>
                        ))
                    }
                </div>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-extrabold">CULTURAL EVENTS</h2>
                <div className="scroll-hide flex gap-x-8 overflow-x-scroll">
                    {
                        [...Array(8)]?.map((_, index) => (
                            <div className="scroll-hide min-w-[232px] min-h-[275px] bg-[#D9D9D9]"></div>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>
    </Outlet>
  );
};

export default events;
