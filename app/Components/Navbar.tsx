"use client";

import { useState, useEffect } from "react";
import { Oswald } from "next/font/google";
import { Minus, MoveUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    }
  }, [isOpen]);

  const closeMenu = () => {
    setAnimate(false);
    setTimeout(() => setIsOpen(false), 450);
  };

  return (
    <>
      <nav className="w-full h-20 absolute z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center justify-between">

          <div className="flex flex-col justify-center">
            <div className={`${oswald.className} text-[32px] font-bold`}>
              RUPAM <span className="text-gray-400">MONDAL</span>
            </div>

            <div className={`${oswald.className} flex items-center text-[18px] font-bold`}>
              <Minus size={16} strokeWidth={2.5} className="text-gray-400 mr-2" />
              SOFTWARE <span className="text-gray-400 ml-1">DEVELOPER</span>
            </div>
          </div>

          <div className={`hidden md:flex h-full items-center gap-10 text-[25px] font-normal ${oswald.className}`}>
            <Link href="/" className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-300">
              Home
            </Link>

            <Link href="/about" className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-300">
              About
            </Link>

            <Link href="/Projects" className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-300">
              Projects
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              className={`group px-6 py-2 bg-black text-white rounded-full text-[20px] font-normal flex items-center gap-2 ${oswald.className} cursor-pointer transition duration-300 hover:bg-gray-800`}
            >
              let's talk
              <MoveUpRight size={16} strokeWidth={3} />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="cursor-pointer">
              <Menu size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40">

          <div
            onClick={closeMenu}
            className={`absolute inset-0 backdrop-blur-md bg-black/30 transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"
              }`}
          />

          <div
            className={`absolute bottom-0 left-0 w-full bg-white rounded-t-3xl p-10 
            transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${animate
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-full opacity-0 scale-95"
              }`}
          >
            <div className="flex justify-end mb-8">
              <button onClick={closeMenu} className="cursor-pointer">
                <X size={28} />
              </button>
            </div>

            <div className={`flex flex-col gap-8 text-2xl ${oswald.className}`}>
              <div className="cursor-pointer">Home</div>
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">Projects</div>

              <button className="mt-6 cursor-pointer px-6 py-3 bg-black text-white rounded-full flex items-center justify-center gap-2">
                let's talk
                <MoveUpRight size={16} strokeWidth={3} />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}