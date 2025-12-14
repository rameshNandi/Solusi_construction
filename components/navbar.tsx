"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Properties",
      href: "/properties",
      submenu: [
        { label: "Properties", href: "/properties" },
        { label: "Properties Single", href: "/properties/1" },
        { label: "Registration", href: "/register" },
        { label: "Add Listing", href: "/add-listing" },
      ],
    },
    {
      label: "Agencies",
      href: "/agencies",
      submenu: [
        { label: "Agencies", href: "/agencies" },
        { label: "Agencies Single", href: "/agencies/1" },
        { label: "Customer Registration", href: "/register" },
      ],
    },
    { label: "Pages", href: "/pages" },
    { label: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#182A35] animate-navbar-fade">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={45} height={45} alt="logo" />
            <div className="text-left leading-tight">
              <h1 className="text-xl font-semibold text-white">Solusi</h1>
              <p className="text-[10px] tracking-wider text-white/70">Construction</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`text-sm flex items-center gap-1 px-3 py-2 rounded-md transition-all
                    ${isActive(item.href)
                      ? "bg-[#F4D96C]/30 text-white font-semibold shadow-md"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {item.label}
                  {"submenu" in item && <ChevronDown size={14} />}
                </Link>

                {"submenu" in item && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg transition-all 
                      ${openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={`block px-4 py-2 text-sm rounded-md transition-all
                          ${isActive(sub.href)
                            ? "bg-[#F4D96C]/30 font-semibold"
                            : "hover:bg-gray-200"
                          }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Contact Button Desktop */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-black 
              bg-[#F4D96C] transition-all duration-300 group hover:brightness-95"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Contact Us
              </span>
              <ChevronRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

            {/* Drawer Toggle */}
            <button
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  setIsContactPanelOpen(true);
                } else {
                  setIsMobileMenuOpen(true);
                }
              }}
              className="text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-overlay-fade"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-80 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Black/Gray Section */}
            <div className="bg-[#182A35] text-white p-6 flex items-center gap-3">
              <Image src="/logo.png" width={45} height={45} alt="logo" />
              <div>
                <h1 className="text-xl font-bold">SOLUSI</h1>
                <p className="text-[10px] tracking-wider">CONSTRUCTION</p>
              </div>
              <button
                className="ml-auto text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* White Menu Section */}
            <div className="bg-white flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <button
                    className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-all
                      ${isActive(item.href)
                        ? "bg-[#F4D96C]/30 font-semibold"
                        : "text-black hover:bg-gray-100"
                      }`}
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    {"submenu" in item && <ChevronDown size={16} />}
                  </button>

                  {"submenu" in item && openMobileDropdown === item.label && (
                    <div className="flex flex-col ml-4 mt-1 gap-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`px-3 py-2 text-sm rounded-md transition-all
                            ${isActive(sub.href)
                              ? "bg-[#F4D96C]/30 font-semibold"
                              : "text-black hover:bg-gray-200"
                            }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="mt-auto mx-3 py-3 px-4 rounded-xl font-semibold text-black bg-[#F4D96C] text-center hover:brightness-95 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT PANEL */}
      {isContactPanelOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-overlay-fade"
          onClick={() => setIsContactPanelOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-80 bg-white text-black p-8 overflow-y-auto animate-slide-right shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-black"
              onClick={() => setIsContactPanelOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Logo & Content */}
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" width={45} height={45} alt="logo" />
              <div>
                <h1 className="text-xl font-bold">SOLUSI</h1>
                <p className="text-[10px] tracking-wider text-[#4A4A4A]">
                  CONSTRUCTION
                </p>
              </div>
            </div>

            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
              Solusi Construction delivers reliable and high-quality construction services, turning ideas into well-crafted residential, commercial, and industrial projects.
            </p>

            <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-black" size={20} />
                <p className="text-sm text-[#6B6B6B] leading-tight">
                  P S ABACUS | New Town |
                  <br />
                  West Bengal | India | 700161
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-black" size={20} />
                <p className="text-sm text-[#6B6B6B] leading-tight">
                  +91 98300 06263
                  <br />
                  +91 98300 06263
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-black" size={20} />
                <p className="text-sm text-[#6B6B6B] leading-tight">
                  info@solusidesigns.com
                  <br />
                  info@solusidesigns.com
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-[#F2F2F2] my-6" />

            <h2 className="text-lg font-semibold mb-3">Subscribe Now</h2>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-md outline-none"
              />
              <button className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500">
                <Send size={18} />
              </button>
            </div>
            <button className="w-full py-2 rounded-md font-semibold text-white bg-[#e1ba1b]">
              Subscribe
            </button>

            <div className="flex items-center gap-5 mt-6 text-black">
              <a href="#" className="hover:text-[#1877F2] transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-[#1DA1F2] transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-[#C13584] transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-[#FF0000] transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes navbar-fade {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-navbar-fade {
          animation: navbar-fade .6s ease forwards;
        }

        @keyframes overlay-fade {
          0% { opacity: 0 }
          100% { opacity: 1 }
        }
        .animate-overlay-fade {
          animation: overlay-fade .5s ease;
        }

        @keyframes slide-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slide-right .55s cubic-bezier(.25,.46,.45,.94);
        }
      `}</style>
    </>
  );
}
