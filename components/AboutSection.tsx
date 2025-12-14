"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function AboutSection() {
  // Create keyframes dynamically
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes spin-slow-reverse {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }
      @keyframes rotate-text-outer {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes rotate-text-inner {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    
    // Check if keyframes already exist
    if (!document.querySelector('style[data-rotate-animations]')) {
      const styleTag = document.createElement('style');
      styleTag.setAttribute('data-rotate-animations', 'true');
      styleTag.innerHTML = keyframes;
      document.head.appendChild(styleTag);
    }
  }, []);

  return (
    <section className="w-full bg-[#182A35] text-white py-20 px-6 md:px-16 lg:px-28">

      {/* Title */}
      <div className="relative">
        <h1 className="text-[100px] font-bold opacity-10 leading-none">
          ABOUT
        </h1>

        <div className="absolute top-12 left-2">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-2 max-w-xl text-sm text-gray-300">
            We are a real estate firm with over 20 years of expertise, and our
            main goal is to provide amazing locations to our partners.
          </p>
        </div>

        {/* Learn More Button */}
        <button
          className="
            absolute right-0 top-16
            md:absolute md:right-0 md:top-16
            block bg-[#e7cd6c] hover:bg-[#d4ba55] text-black px-6 py-2 rounded-lg 
            text-sm font-medium flex items-center gap-2
            mx-auto md:mx-0 mt-8 md:mt-0
          "
        >
          Learn More <ArrowRight size={16} />
        </button>

      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

        {/* Image 1 */}
        <div className="rounded-xl overflow-hidden bg-[#152b38] p-2 
          transition-all duration-500 hover:-translate-y-2
          rotate-[-2deg] hover:rotate-0">
          <div className="rounded-xl overflow-hidden h-[350px]">
            <Image
              src="/about/about_pic_1.jpg"
              alt="Home"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Image 2 */}
        <div className="rounded-xl overflow-hidden bg-[#152b38] p-2 
          transition-all duration-500 hover:-translate-y-2
          rotate-[2deg] hover:rotate-0">
          <div className="rounded-xl overflow-hidden h-[350px]">
            <Image
              src="/about/about_pic_2.jpeg"
              alt="Home"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

      </div>

      {/* Middle Text + Agent - REVERSED LAYOUT */}
      <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Text on LEFT side - 3 line format */}
        <div className="md:flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            All-inclusive real estate services
            <br className="hidden md:block" />
            to facilitate the easy and confident
            <br className="hidden md:block" />
            purchase, sale, and management of your properties.
          </h2>
          
          {/* Mobile view: show as paragraph */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug block md:hidden">
            All-inclusive real estate services to facilitate the easy and confident
            purchase, sale, and management of your properties.
          </h2>
        </div>

        {/* Circle Image on RIGHT side */}
        <div className="relative w-[280px] h-[280px] flex-shrink-0">
          {/* Circular Agent Image */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-10">
            <Image
              src="/about/man_pic.jpg"
              alt="Agent"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>

          {/* SECOND OUTER CIRCLE - Text OUTSIDE circle */}
          <div className="absolute inset-[-40px] z-0">
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  animation: "rotate-text-outer 25s linear infinite"
                }}
              >
                {/* SVG for circular text OUTSIDE (circle er baire) */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 360 360">
                    <defs>
                      <path
                        id="outer-text-circle"
                        d="M180,180 m-140,0 a140,140 0 1,1 280,0 a140,140 0 1,1 -280,0"
                        fill="transparent"
                      />
                    </defs>
                    <text className="text-[13px] font-medium fill-white/80 tracking-[3px] uppercase">
                      <textPath
                        href="#outer-text-circle"
                        startOffset="0%"
                        style={{ animation: "rotate-text-outer 25s linear infinite" }}
                      >
                        • Realar Agent • Realar Agent • Realar Agent • Realar Agent • Realar Agent • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              
              {/* Outer Circle Border Line */}
              <div 
                className="absolute inset-0 border-[1px] border-white/15 rounded-full"
              ></div>
            </div>
          </div>

          {/* Rotating Border Circles */}
          <div 
            className="absolute inset-[-10px] border-[1.5px] border-white/20 rounded-full z-15"
            style={{
              animation: "spin-slow 20s linear infinite"
            }}
          ></div>
          <div 
            className="absolute inset-[10px] border-[1.5px] border-white/20 rounded-full z-15"
            style={{
              animation: "spin-slow-reverse 15s linear infinite"
            }}
          ></div>
        </div>

      </div>

      {/* Services - Updated with bigger icons and thicker borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">

        {/* Service 1 */}
        <div className="group">
          <div className="w-20 h-20 border-2 border-white/30 rounded-xl flex items-center justify-center mb-4
            transition-all duration-500 group-hover:rotate-180 group-hover:border-[#e7cd6c] group-hover:scale-105
            bg-gradient-to-br from-white/5 to-transparent shadow-lg">
            <Image
              src="/about/service-icon1-1.png"
              alt="Icon"
              width={48}
              height={48}
              className="transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110"
            />
          </div>
          <h3 className="font-bold text-xl mb-3">Property Valuation</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            All-inclusive real estate services to facilitate easy and confident property transactions.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group">
          <div className="w-20 h-20 border-2 border-white/30 rounded-xl flex items-center justify-center mb-4
            transition-all duration-500 group-hover:rotate-180 group-hover:border-[#e7cd6c] group-hover:scale-105
            bg-gradient-to-br from-white/5 to-transparent shadow-lg">
            <Image
              src="/about/service-icon1-2.png"
              alt="Icon"
              width={48}
              height={48}
              className="transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110"
            />
          </div>
          <h3 className="font-bold text-xl mb-3">Property Management</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Expert services to help real estate businesses grow and improve performance.
          </p>
        </div>

        {/* Service 3 */}
        <div className="group">
          <div className="w-20 h-20 border-2 border-white/30 rounded-xl flex items-center justify-center mb-4
            transition-all duration-500 group-hover:rotate-180 group-hover:border-[#e7cd6c] group-hover:scale-105
            bg-gradient-to-br from-white/5 to-transparent shadow-lg">
            <Image
              src="/about/service-icon1-3.png"
              alt="Icon"
              width={48}
              height={48}
              className="transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110"
            />
          </div>
          <h3 className="font-bold text-xl mb-3">Investment Opportunities</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Helping you confidently purchase, sell, and manage properties with growth-focused advice.
          </p>
        </div>

      </div>

    </section>
  );
}