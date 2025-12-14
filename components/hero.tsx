"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

type Property = {
  id: number;
  title: string;
  image: string;
  video: string;
};

type StatItem = {
  id: number;
  value: string;
  label: string;
};

export default function Hero() {
  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Villa",
      image: "/landing/landing_bg_pic_1.avif",
      video: "/landing/landing_bg_video_1.mp4",
    },
    {
      id: 2,
      title: "Luxury Home",
      image: "/landing/landing_bg_pic_2.jpg",
      video: "/landing/landing_bg_video_2.mp4",
    },
    {
      id: 3,
      title: "Contemporary House",
      image: "/landing/landing_bg_pic_3.jpg",
      video: "/landing/landing_bg_video_3.mp4",
    },
  ];

  const stats: StatItem[] = [
    { id: 1, value: "850+", label: "ELEGANT APARTMENTS" },
    { id: 2, value: "950+", label: "LUXURY HOUSES" },
    { id: 3, value: "18K+", label: "SATISFIED GUESTS" },
    { id: 4, value: "2K+", label: "HAPPY OWNERS" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [bgPlayingIndex, setBgPlayingIndex] = useState<number | null>(null);
  const [countedValues, setCountedValues] = useState<number[]>([0, 0, 0, 0]);
  
  const autoRef = useRef<number | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.5 });

  /* SMOOTH SCROLL ZOOM */
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const s = window.scrollY * 0.0004;
          setScale(Math.min(1 + s, 1.12));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* AUTO SLIDER */
  useEffect(() => {
    if (bgPlayingIndex !== null) return;

    autoRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000);

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [bgPlayingIndex]);

  /* BACKGROUND VIDEO PLAY */
  useEffect(() => {
    if (bgPlayingIndex !== null && bgVideoRef.current) {
      const v = bgVideoRef.current;
      v.currentTime = 0;
      v.muted = true;

      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {});
      }
    }
  }, [bgPlayingIndex]);

  /* STATS COUNTER ANIMATION */
  useEffect(() => {
    if (!isInView) return;

    const targetValues = [850, 950, 18000, 2000];
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newValues = targetValues.map(target => {
        return Math.floor(target * easeOutQuart);
      });
      
      setCountedValues(newValues);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        // Ensure final values are exact
        setCountedValues(targetValues);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [isInView]);

  function handleThumbnailClick(index: number) {
    setCurrentSlide(index);

    if (bgPlayingIndex === index) {
      if (bgVideoRef.current) {
        bgVideoRef.current.pause();
        bgVideoRef.current.currentTime = 0;
      }
      setBgPlayingIndex(null);
      return;
    }

    setBgPlayingIndex(index);

    if (autoRef.current) clearInterval(autoRef.current);
  }

  return (
    <>
      <section className="relative w-full bg-[#182A35] overflow-hidden pb-20">

        {/* SOCIAL LINKS */}
        <div className="hidden lg:flex flex-col items-center gap-10 absolute left-10 top-1/2 -translate-y-1/2 text-white/90 z-20">
          <a href="https://instagram.com" target="_blank" className="rotate-90 text-xs tracking-widest hover:text-[#F4D96C] transition">INSTAGRAM</a>
          <span className="w-2 h-2 rounded-full bg-[#F4D96C]" />
          <a href="https://twitter.com" target="_blank" className="rotate-90 text-xs tracking-widest hover:text-[#F4D96C] transition">TWITTER</a>
          <span className="w-2 h-2 rounded-full bg-[#F4D96C]" />
          <a href="https://facebook.com" target="_blank" className="rotate-90 text-xs tracking-widest hover:text-[#F4D96C] transition">FACEBOOK</a>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hidden lg:flex flex-col gap-3 items-center absolute right-10 top-1/2 -translate-y-1/2 text-white/80 z-20">
          <span className="rotate-90 text-xs">Scroll</span>
          <div className="w-[2px] h-24 bg-white/30"></div>
        </div>

        {/* MAIN CARD */}
        <div className="relative max-w-[92rem] mx-auto 
          rounded-[40px] 
          lg:rounded-t-[70px] lg:rounded-b-[40px]
          overflow-hidden shadow-2xl 
          h-[88vh] lg:h-[90vh]
          bg-[#182A35]
          mt-[80px] lg:mt-[100px]
        ">

          {/* BACKGROUND IMAGE */}
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-700 ease-out bg-center bg-cover"
            style={{
              transform: `scale(${scale})`,
              backgroundImage: `url(${properties[currentSlide].image})`,
            }}
          />

          {/* BACKGROUND VIDEO */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${bgPlayingIndex !== null ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            {bgPlayingIndex !== null && (
              <video
                ref={bgVideoRef}
                src={properties[bgPlayingIndex].video}
                className="w-full h-full object-cover"
                muted loop playsInline autoPlay
              />
            )}
          </div>

          <div className="absolute inset-0 bg-black/40" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-10">

            {/* LEFT TEXT */}
            <div className="max-w-xl translate-y-16 lg:translate-y-0 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
              <div className="mb-4 opacity-90 flex items-center gap-2">
                <span className="text-[#F4D96C] text-sm font-semibold">
                  PROJECT {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#182A35] animate-pulse" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2 text-white">
                Crafting Exceptional Homes, Turning Visions Into Reality
              </h1>

              <p className="text-white/90 text-lg max-w-md">
                We turn ideas into quality homes and buildings with trust and excellence
              </p>

              <Link
                href="/properties"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold git add . bg-[#F4D96C] transition-all duration-300 group mt-4"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Explore Properties
                </span>
                <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>

              {/* MOBILE LINE ANIMATION */}
              {/* <div className="lg:hidden w-full flex justify-center mt-4">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 20, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-[#F4D96C] w-[2px] rounded-full"
                />
              </div> */}
            </div>

            {/* DESKTOP THUMBNAILS */}
            <div className="hidden lg:flex flex-col items-center gap-10">
              {properties.map((p, i) => {
                const isActive = currentSlide === i;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleThumbnailClick(i)}
                    className={`relative w-32 h-32 rounded-full overflow-hidden shadow-xl transition-all ${
                      isActive ? "scale-110 ring-4 ring-white/40" : ""
                    }`}
                  >
                    <video src={p.video} className="w-full h-full object-cover" muted playsInline loop autoPlay />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <Play size={35} className="text-white" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MOBILE THUMBNAILS */}
          <div className="lg:hidden absolute bottom-4 left-0 right-0 px-6 flex flex-col items-center gap-4">
            <div className="flex gap-5 overflow-x-auto pb-3">
              {properties.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => handleThumbnailClick(i)}
                  className={`w-20 h-20 rounded-full overflow-hidden shadow-xl flex-none transition-all ${
                    currentSlide === i ? "scale-110 ring-4 ring-white/40" : ""
                  }`}
                >
                  <img src={p.image} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* SLIDER DOTS */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8">
            {properties.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentSlide(i);
                  setBgPlayingIndex(null);
                }}
                className={`h-[3px] rounded-full transition-all ${
                  currentSlide === i ? "w-12 bg-[#F4D96C] animate-pulse" : "w-12 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION - Exactly like in the image */}
      <section 
        ref={statsRef}
        className="relative w-full bg-[#182A35] py-16 md:py-20 -mt-20"
      >
        <div className="max-w-[92rem] mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.id}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  className="inline-block"
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                    {index === 2 ? (
                      // For 18K+ - format with comma
                      <>
                        {countedValues[index].toLocaleString()}
                        <span className="text-[#F4D96C]">+</span>
                      </>
                    ) : (
                      // For others
                      <>
                        {countedValues[index]}
                        <span className="text-[#F4D96C]">+</span>
                      </>
                    )}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut" 
                  }}
                >
                  <div className="text-[#F4D96C] text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </motion.div>
                
                {/* Animated underline on hover */}
                <div className="relative mt-4">
                  <div className="h-[2px] bg-white/20 w-16 mx-auto"></div>
                  <motion.div 
                    className="h-[2px] bg-[#F4D96C] w-16 mx-auto absolute top-0 left-1/2 -translate-x-1/2"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "4rem" } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.5,
                      ease: "easeOut" 
                    }}
                    whileHover={{ width: "6rem", transition: { duration: 0.3 } }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Decorative bottom border */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-[#F4D96C] to-transparent mt-12 mx-auto max-w-4xl"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "100%", opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        />
      </section>
    </>
  );
}