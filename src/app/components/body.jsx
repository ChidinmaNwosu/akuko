import React from 'react';
import Image from 'next/image';

function Body() {
  return (
    <div className="border-b-2 border-b-white">
        <div className="container mx-auto mt-20 ">
            <div className="flex flex-col lg:flex-row  gap-4 justify-between items-center lg:h-screen  p-2">
                <div className="flex flex-col gap-6 p-4 lg:p-0 mt-20">
                <h1 className="text-6xl md:text-7xl  text-amber-600 font-bold ">Where voices unite!</h1>
                <p className=" text-lg sm:text-2xl md:text-3xl lg:text-4xl">Share ideas, ignite discussions, and inspire change!</p>
                <q className="text-base sm:text-lg md:text-xl ">What is written down is not easily forgotten.</q>
                <blockquote className="text-base sm:text-lg md:text-xl">-Igbo proverb</blockquote>
                <button className="p-3 bg-amber-700 text-mintWite rounded-full w-fit">Start Reading</button>
                </div>
                <div className="hidden lg:flex lg:flex-col p-2 ">
                    <Image src="/images/scribble-bg.jpg" alt="body image" width={1000} height={2000} className="w-auto h-auto outline-none" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body;