import Outlet from "@/components/Outlet";
import React from "react";

const about = () => {
  return (
    <Outlet>
      <div className="py-12 px-12">
        <div className="flex items-center  gap-8">
          <div className="h-3 md:h-5 bg-black w-full" />
          <div className="text-2xl lg:text-5xl font-black">ABOUT</div>
          <div className="h-3 md:h-5 bg-black w-full" />
        </div>
        <div className="flex flex-col lg:flex-row gap-16 px-6 py-16 items-center max-w-6xl mx-auto">
          <div className="w-full">
            <h1 className="font-black text-3xl">RHYTHM_EMBER</h1>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="w-full h-[521px] bg-[#D9D9D9] rounded-tl-[56px] rounded-br-[56px]"></div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-16 px-6  items-center max-w-6xl mx-auto">
          <div className="w-full h-[521px] bg-[#D9D9D9] rounded-tl-[56px] rounded-br-[56px]"></div>
          <div className="w-full">
            <h1 className="font-black text-3xl">DASHAK</h1>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </Outlet>
  );
};

export default about;
