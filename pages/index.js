import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Outlet from "@/components/Outlet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Outlet>
      <section className="bg-[#E2CEA2] min-h-[90vh] section1 flex justify-center items-center px-16">
        <img
          className="max-w-4xl w-full -mt-16"
          src="/assets/Dashak.png"
          alt=""
        />
      </section>
      <section className="bg-[#E2CEA2] space-y-6 min-h-screen flex flex-col items-center py-20 px-6">
        <h1 className="text-2xl md:text-5xl ">COUNTDOWN</h1>
        <div className="text-6xl md:text-9xl font-black">00:00:00</div>
        <div className="space-y-2  w-full flex flex-col items-center">
          <div className="flex w-full">
            <div className="w-full lg:w-1/2 ml-auto flex justify-end">
              <div className="flex flex-col px-6 py-8 items-end max-w-md w-full bg-[#D9D9D9]">
                <h1 className="text-xl lg:text-4xl font-bold">MARATHON</h1>
                <div className="text-sm md:text-base text-right">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </div>
              </div>
            </div>
            <div className="bg-black text-white px-6 text-center flex flex-col justify-center text-2xl md:text-5xl">
              02
              <br />
              <span className="font-bold">APR</span>
            </div>
            <div className=" md:w-1/2"></div>
          </div>
          <div className="flex w-full">
            <div className="md:w-1/2"></div>
            <div className="bg-[#EF983E] text-black px-6 text-center flex flex-col justify-center text-2xl md:text-5xl">
              03
              <br />
              <span className="font-bold">APR</span>
            </div>
            <div className="w-full lg:w-1/2 ml-auto flex justify-start">
              <div className="flex flex-col px-6 py-8 items-end max-w-md w-full bg-[#D9D9D9]">
                <h1 className="text-xl lg:text-4xl font-bold text-left w-full">LIVE NIGHT</h1>
                <div className="text-sm md:text-base text-left">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full lg:w-1/2 ml-auto flex justify-end">
              <div className="flex flex-col px-6 py-8 items-end max-w-md w-full bg-[#D9D9D9]">
                <h1 className="text-xl lg:text-4xl font-bold">PROM NIGHT</h1>
                <div className="text-sm md:text-base text-right">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </div>
              </div>
            </div>
            <div className="bg-black text-white px-6 text-center flex flex-col justify-center text-2xl md:text-5xl">
              04
              <br />
              <span className="font-bold">APR</span>
            </div>
            <div className="md:w-1/2"></div>
          </div>
          <div className="flex w-full">
            <div className="md:w-1/2"></div>
            <div className="bg-[#EF983E] text-black px-6 text-center flex flex-col justify-center text-2xl md:text-5xl">
              05
              <br />
              <span className="font-bold">APR</span>
            </div>
            <div className="w-full lg:w-1/2 ml-auto flex justify-start">
              <div className="flex flex-col px-6 py-8 items-end max-w-md w-full bg-[#D9D9D9]">
                <h1 className="text-xl lg:text-4xl font-bold text-left w-full">DJ NIGHT</h1>
                <div className="text-sm md:text-base text-left">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full lg:w-1/2 ml-auto flex justify-end">
              <div className="flex flex-col px-6 py-8 items-end max-w-md w-full bg-[#D9D9D9]">
                <h1 className="text-xl lg:text-4xl font-bold">RETRO NIGHT</h1>
                <div className="text-sm md:text-base text-right">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </div>
              </div>
            </div>
            <div className="bg-black text-white px-6 text-center flex flex-col justify-center text-2xl md:text-5xl">
              06
              <br />
              <span className="font-bold">APR</span>
            </div>
            <div className="md:w-1/2"></div>
          </div>
          
        </div>
      </section>
    </Outlet>
  );
}
