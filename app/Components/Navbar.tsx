

import { Oswald } from "next/font/google";
import { Minus, MoveUpRight } from "lucide-react";


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function Navbar() {
  return (
    <>
  
      <nav className="w-full h-20">

      
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center justify-between">

          {/*  (NAME SECTION) */}
          <div className="flex flex-col justify-center">
            
           
            <div className={`${oswald.className} text-[32px] font-normal`}>
              RUPAM <span className="text-gray-400">MONDAL</span>
            </div>

           
            <div className={`${oswald.className} flex items-center text-[18px] font-normal`}>
              
           
              <Minus 
                size={16} 
                strokeWidth={2.5} 
                className="text-gray-400 mr-2"
              />

              SOFTWARE <span className="text-gray-400 ml-1">DEVELOPER</span>
            </div>
          </div>


          {/* (NAV LINKS)*/}
          <div className={`h-full flex items-center gap-10 text-[25px] font-normal ${oswald.className}`}>

            <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-300">
              Home
            </div>

            <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-300">
              About
            </div>

            <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100 transition duration-300">
              Projects
            </div>

          </div>


          {/*  RIGHT SIDE (CTA BUTTON)*/}
          <div>
            <button
              className={`group px-6 py-2 bg-black text-white rounded-full text-[20px] font-normal flex items-center gap-2 ${oswald.className} cursor-pointer transition duration-300 hover:bg-gray-800`}
            >
              let's talk
              <MoveUpRight
                size={16}
                strokeWidth={3}
              />
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}