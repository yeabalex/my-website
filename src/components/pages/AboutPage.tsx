'use client'

import React from "react";
import { oswald, openSans } from "./HomePage";
import { ImagesSlider } from "../ui/image-slider";
import { images } from "./HomePage"; // Importing images from HomePage
import Nav from "@/components/ui/nav";


export default function AboutPage() {
  return (
    <ImagesSlider className="h-full" images={images}>
      <div className="min-h-screen  p-4 md:p-6 flex flex-col justify-center items-start z-50 backdrop-blur-sm">
        <div className="max-w-2xl">
          <h1 className={`${oswald.className} text-4xl md:text-5xl font-bold mb-4 text-left`}>
            ABOUT ME
          </h1>
          <p className={`${openSans.className} text-sm md:text-base text-gray-300 text-left mb-4`}>
            Hello there! My name is Yeabsira. I am an aspiring software engineer based in Addis Ababa, Ethiopia with an interest in backend systems and cloud computing. My coding journey began when I joined Addis Ababa Science and Technology University, where I discovered my love for programming. Currently, I am a second-year Software Engineering student at HiLCoE School of Computer Science and Technology. My favorite programming language is Java.
          </p>
          <p className={`${openSans.className} text-sm md:text-base text-gray-300 text-left mb-6`}>
          Outside of programming, I am passionate about music, particularly house music and jazz. I enjoy playing drum machines and experimenting with different sounds. In my free time, I also love cycling and playing football.
          </p>
        </div>
        
        <Nav />
      </div>
      
    </ImagesSlider>
  );
}