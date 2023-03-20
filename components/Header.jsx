import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#E2CEA2]  z-50 h-28 gap-10 flex justify-center items-center px-16">
      <Link className="hidden lg:inline-block text-xl" href={"/"}>
        Home
      </Link>
      <Link className="hidden lg:inline-block text-xl" href={"/about"}>
        About
      </Link>
      <Link className="hidden lg:inline-block text-xl" href={"/sponsors"}>
        Sponsors
      </Link>
      <Link href={"/"}>
        <img
          className="max-w-[280px] sm:max-w-sm mx-6"
          src="/assets/Logo.png"
          alt=""
        />
      </Link>
      <Link className="hidden lg:inline-block text-xl" href={"/events"}>
        Events
      </Link>
      <Link className="hidden lg:inline-block text-xl" href={"/rewind"}>
        Rewind
      </Link>
      <Link className="hidden lg:inline-block text-xl" href={"/team"}>
        Team
      </Link>
    </div>
  );
};

export default Header;
