"use client"
import React from "react";
import Image from "next/image";
import "./header.css";

function Header() {
 
     return (
    <div className=" fixed top-0 z-10 w-screen bg-white  border-b-2 border-mintGray px-2 md:px-0">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex">
            {/*header image */}
            <Image
              src={"/images/akuko_logo.jpeg"}
              alt="header image"
              width={60}
              height={60}
              className=" rounded-full ml-[-20px]"
            />
            {/*header name */}
            <h1 className=" text-shadow flex items-center justify-center text-center font-bold text-3xl md:text-4xl text-amber-700">
              Àkúkó
            </h1>

            {/* hamburger menu for smaller screens */}
          </div>

          {/* get started button */}
          <button className="p-2 lg:p-3 bg-black text-mintWite rounded-full lg:hidden text-base md:text-xl">
            Get started
          </button>
          <div
            className="{header-items hidden lg:flex flex-col lg:flex-row items-center justify-center gap-4 text-xl}">
            <a
              href="/about"
              className="border-b-2 border-transparent hover:border-mintGreen cursor-pointer transition-all duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="/membership"
              className="border-b-2 border-transparent hover:border-mintGreen cursor-pointer transition-all duration-300 ease-in-out"
            >
              Membership
            </a>
            <a
              href="/write"
              className="border-b-2 border-transparent hover:border-mintGreen cursor-pointer transition-all duration-300 ease-in-out"
            >
              Write
            </a>
            <a
              href="/signIn"
              className="border-b-2 border-transparent hover:border-mintGreen cursor-pointer transition-all duration-300 ease-in-out"
            >
              Sign in
            </a>
            <button className="p-2 xl:p-3 bg-amber-600 text-mintWite rounded-full hidden lg:block text-base">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
