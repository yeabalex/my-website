"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "../ui/image-slider";
import { Oswald } from "next/font/google";
import { DM_Sans } from "next/font/google";
import Nav from "@/components/ui/nav";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const openSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const images = [
    //"https://images.unsplash.com/photo-1661163090483-8d6ceb77de18?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1597660641167-56545225e42d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
export function HomePage() {


  const titles = ["SOFTWARE ENGINEER", "BACKEND DEVELOPER", "CLOUD PRACTITIONER"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImagesSlider className="h-screen" images={images}>
      
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.h4 className={`${oswald.className} tracking-tight font-bold text-lg md:text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 px-4 mb-2`}>HEY THERE, I&apos;M YEABSIRA</motion.h4>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${oswald.className} tracking-tight font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 px-4 mb-4`}
          >
            {titles[currentTitleIndex]}
          </motion.p>
        </AnimatePresence>
        <motion.p
          className={`${openSans.className} max-w-xl tracking-tight text-sm md:text-base text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 px-4 mb-4`}
        >
         I build software that makes a difference.
        </motion.p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/yeabalex" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-300 transition-colors bg-black/30 rounded-full p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="mailto:yeabalex18@gmail.com" className="text-white hover:text-emerald-300 transition-colors bg-black/30 rounded-full p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yeabsira-alemu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-300 transition-colors bg-black/30 rounded-full p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        <button className={`${openSans.className} px-4 py-2 mb-6 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative`}>
          <span>Download Resume</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        <Nav />
      </motion.div>
    </ImagesSlider>
  );
}
