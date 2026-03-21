import { Lora, Oswald } from "next/font/google";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./globals.css";
import Footer from "./Components/Footer";
import AboutComponent from "./Components/AboutComponent";

const oswald = Oswald({
  subsets: ["latin"],        
  weight: ["200","300","400","500","600","700"], 
  style: ["normal"],         
  display: "swap",           
  variable: "--font-oswald", 
  preload: true,             
  adjustFontFallback: true,  
});

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full relative select-none">
        <Navbar/>
        <Hero/>
        <AboutComponent/>
        {/* <Footer/> */}
      </main>
    </>
  );
}
