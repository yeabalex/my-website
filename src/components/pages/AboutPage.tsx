'use client'

import React from "react";
import { oswald, openSans } from "./HomePage";
import { ImagesSlider } from "../ui/image-slider";
import { images } from "./HomePage"; // Importing images from HomePage
import Nav from "@/components/ui/nav";

export default function AboutPage() {
  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="min-h-screen  p-4 md:p-6 flex flex-col justify-center items-start z-50">
        <div className="max-w-2xl">
          <h1 className={`${oswald.className} text-4xl md:text-5xl font-bold mb-4 text-left`}>
            ABOUT ME
          </h1>
          <p className={`${openSans.className} text-sm md:text-base text-gray-300 text-left mb-4`}>
            I&apos;m a passionate software engineer with a love for crafting elegant solutions to complex problems. 
            My journey in the digital realm spans from robust backend systems to intuitive user interfaces. 
            Always eager to learn and grow, I&apos;m constantly exploring new technologies and pushing the boundaries of what&apos;s possible in code.
          </p>
          <p className={`${openSans.className} text-sm md:text-base text-gray-300 text-left mb-4`}>
            I&apos;m a passionate software engineer with a love for crafting elegant solutions to complex problems. 
            My journey in the digital realm spans from robust backend systems to intuitive user interfaces. 
            Always eager to learn and grow, I&apos;m constantly exploring new technologies and pushing the boundaries of what&apos;s possible in code.
          </p>
        </div>
        <iframe style={{borderRadius:"12px",}} src="https://open.spotify.com/embed/track/1YtLTcpQotwJj11ZFgdPYf?utm_source=generator&theme=0" width="100%" height="220" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <Nav />
      </div>
      
    </ImagesSlider>
  );
}