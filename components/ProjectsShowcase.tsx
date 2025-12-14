"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectsShowcase() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(/about/service_pic1.jpg)` }}>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#00000080] backdrop-blur-sm" />

      {/* Left Progress */}
      <div className="absolute left-[5%] top-[15%] flex flex-col items-center">
        <div className="w-[2px] h-[150px] bg-gray-300"></div>

        <div className="w-14 h-14 bg-[#F4D96C] rounded-full flex items-center justify-center text-xl font-semibold shadow-xl my-3">
          03
        </div>

        <div className="w-[2px] h-[150px] bg-gray-300"></div>
      </div>

      <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white opacity-20 leading-tight">
            PROJECTS
          </h1>

          <h2 className="text-4xl md:text-5xl font-semibold text-white -mt-10">
            Discover Modern Living
          </h2>

          <h3 className="text-4xl md:text-5xl font-semibold text-white mt-3">
            At Realar Residence.
          </h3>

          <p className="text-white text-lg leading-relaxed mt-6 w-[80%]">
            Residence takes advantage of abundant sunlight by incorporating solar panels into its architecture.
          </p>

          <button className="w-max bg-[#F4D96C] text-black mt-10 px-6 py-3 rounded-xl font-medium flex items-center gap-2">
            Explore More <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-5"
        >
          {/* CARD -1*/}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl flex-1">
            <Image
              src="/about/service_pic1.jpg"
              alt="image-1"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CARD -2*/}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl flex-1">
            <Image
              src="/house2.jpg"
              alt="image-2"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>yellow-400
        </motion.div>
      </div>

      {/* BOTTOM SLIDER */}
      <div className="absolute bottom-[4%] flex gap-8 left-1/2 -translate-x-1/2">
        <div className="w-24 h-[3px] bg-white/60"></div>
        <div className="w-24 h-[3px] bg-[#F4D96C]"></div>
        <div className="w-24 h-[3px] bg-white/40"></div>
      </div>
    </section>
  );
}
