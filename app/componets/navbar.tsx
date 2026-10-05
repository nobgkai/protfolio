"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // ใช้ left-1/2 และ -translate-x-1/2 เพื่อจัดให้อยู่กึ่งกลางเสมอเมื่อความกว้างเปลี่ยน
    <header
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out font-sans flex items-center ${
        isScrolled
          ? "top-4 w-[95%] max-w-5xl bg-gray-800/80 backdrop-blur-md py-3 px-6 md:px-8 rounded-full shadow-2xl border border-white/10" // สไตล์ตอนลอยตัว (Floating)
          : "top-0 w-full max-w-7xl bg-transparent py-6 px-6 md:px-12 rounded-none" // สไตล์ตอนอยู่บนสุด
      }`}
    >
      <nav className="flex justify-between items-center w-full">
        
        {/* ด้านซ้าย: โลโก้ และ ชื่อ */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image 
            src="/logo/logo.png" 
            alt="Nobgkai Logo" 
            width={isScrolled ? 38 : 45} // ย่อโลโก้ลงนิดหน่อยตอนเลื่อน
            height={isScrolled ? 38 : 45} 
            className="object-contain transition-all duration-300"
            priority
          />
          <span className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${isScrolled ? "text-white" : "text-black"}`}>
            Nobgkai
          </span>
        </div>

        {/* ตรงกลาง: ลิงก์เมนูต่างๆ */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-lg transition-colors duration-300 ${isScrolled ? "text-gray-200" : "text-gray-500"}`}>
          
          <Link href="/" className={`relative group transition-colors ${isScrolled ? "hover:text-white" : "text-black"}`}>
            Home
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-white" : "bg-black"}`}></span>
          </Link>

          <Link href="/project" className={`relative group transition-colors ${isScrolled ? "hover:text-white" : "hover:text-black"}`}>
            Project
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-white" : "bg-black"}`}></span>
          </Link>

          <Link href="/aboutme" className={`relative group transition-colors ${isScrolled ? "hover:text-white" : "hover:text-black"}`}>
            Aboutme
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-white" : "bg-black"}`}></span>
          </Link>

          <Link href="/drafts" className={`relative group transition-colors ${isScrolled ? "hover:text-white" : "hover:text-black"}`}>
            Drafts
            <span className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-white" : "bg-black"}`}></span>
          </Link>
        </div>

        {/* ด้านขวา: ปุ่ม Contact */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className={`px-7 py-2.5 rounded-full font-medium shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
              isScrolled 
                ? "bg-white text-black hover:bg-gray-200 hover:shadow-lg" // ปุ่มเปลี่ยนเป็นสีขาวตอน Navbar มืด
                : "bg-[#2D1B69] text-white hover:bg-[#1d1047] hover:shadow-lg"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* ปุ่ม Hamburger Menu สำหรับจอมือถือ */}
        <div className="md:hidden flex items-center">
          <button className={`focus:outline-none transition-colors duration-300 ${isScrolled ? "text-white" : "text-black"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
      </nav>
    </header>
  );
}