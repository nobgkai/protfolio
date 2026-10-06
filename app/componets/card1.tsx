"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Card1() {
  const fullText = "ไกรวิชญ์ อ้นเกษ";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="w-full relative overflow-hidden bg-gray-50 pt-20 font-sans">
      
      <style>{`
        /* แอนิเมชันปุ่มเด้งดึ๋ง */
        @keyframes bouncy-squish {
          0%, 100% { transform: translateY(0) scale(1, 1); }
          15% { transform: translateY(0) scale(1.1, 0.9); }
          35% { transform: translateY(-25px) scale(0.85, 1.15); }
          55% { transform: translateY(0) scale(1.05, 0.95); }
          70% { transform: translateY(-7px) scale(0.98, 1.02); }
          85% { transform: translateY(0) scale(1, 1); }
        }
        .animate-bouncy-squish {
          animation: bouncy-squish 2s infinite;
          transform-origin: bottom center; 
        }

        /* 1. แอนิเมชันเลื่อนขึ้นจากด้านล่าง */
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fade-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 2. แอนิเมชันเลื่อนมาจากทางซ้าย */
        @keyframes fade-slide-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-left {
          opacity: 0;
          animation: fade-slide-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 3. แอนิเมชันเลื่อนมาจากทางขวา */
        @keyframes fade-slide-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-right {
          opacity: 0;
          animation: fade-slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* หน่วงเวลา (Delay) */
        .delay-100 { animation-delay: 100ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-img { animation-delay: 400ms; }
      `}</style>

      <div className="absolute right-[-10%] top-[0%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#89A3C2] rounded-full z-0 hidden md:block animate-float-circle"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-stretch relative z-10">
        
        {/* เนื้อหาด้านซ้าย */}
        <div className="flex-1 w-full flex flex-col justify-start pt-32 md:pt-32 pb-10">
          
          {/* ชื่อ: เลื่อนมาจากซ้าย */}
          <h1 className="animate-fade-left delay-100 text-5xl md:text-7xl font-medium text-[#2D1B69] mb-4 tracking-tight min-h-[80px]">
            {displayedText}
            <span className="font-thin text-[#2D1B69] animate-blink ml-1">|</span>
          </h1>
          
          {/* ชื่อเล่น: เลื่อนมาจากซ้าย */}
          <p className="animate-fade-left delay-300 text-xl md:text-2xl text-gray-500 mb-10 font-medium">
            Kaivit Ongat • Nickname • Nobgkai
          </p>

          {/* สถานะ: เลื่อนขึ้นจากข้างล่าง */}
          <div className="animate-fade-up delay-500 flex items-center gap-4 mb-10">
            <span className="inline-block px-6 py-2 bg-[#98F59F] text-green-900 rounded-full text-sm md:text-base font-semibold shadow-sm cursor-pointer hover:bg-[#82e58a] transition-colors duration-300 animate-bouncy-squish">
              กำลังศึกษา
            </span>
            
            <span className="text-gray-600 text-lg md:text-xl font-medium">
              วิทยาลัยเทคนิคเชียงใหม่
            </span>
          </div>

          {/* ปุ่ม: เลื่อนขึ้นจากข้างล่าง */}
          <button className="animate-fade-up delay-700 bg-[#85A3B8] text-white px-8 py-4 rounded-xl w-fit font-semibold text-lg shadow-lg shadow-[#85A3B8]/40 hover:bg-[#7292a8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-12">
            ดูผลงานของ Nobgkai
          </button>

          {/* ข้อมูลล่างสุด: เลื่อนขึ้นจากข้างล่าง */}
          <div className="animate-fade-up delay-900 flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Chiang Mai Native, Thailand
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              เวลา
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
              สภาพอากาศ
            </div>
          </div>
        </div>

        {/* รูปภาพ: เปลี่ยนเป็นเลื่อนมาจากทางขวา (animate-fade-right) */}
        <div className="animate-fade-right delay-img relative w-full md:w-[45%] flex items-end justify-center md:justify-end z-10 pt-10 md:pt-0">
          <Image 
            src="/person/person1.png" 
            alt="Profile image" 
            width={500} 
            height={700} 
            className="object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)] transition-all duration-500"
            priority
          />
        </div>
        
      </div>
    </section>
  );
}