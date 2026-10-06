'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="w-full relative bg-[#fcfcfc] overflow-hidden font-sans flex flex-col mt-10">
      
      {/* =========================================
          ส่วนที่ 1: Giant "MIND" Text Section 
      ========================================= */}
      <div 
        className={`relative w-full flex justify-center overflow-hidden h-[24vw] min-h-[120px] select-none pointer-events-none transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <div 
          className="absolute left-0 top-0 w-16 h-full opacity-30"
          style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '30px 30px' }}
        ></div>

        {/* 
          - เปลี่ยนจาก -bottom-[2.5vw] เป็น -bottom-[7vw] เพื่อดึงตัวหนังสือให้จมลงไปโดน Footer ทับ
          - ปรับความสูงกล่องเป็น h-[24vw] ให้พอดี ไม่เหลือที่ว่างด้านบนเยอะไป
        */}
        <h1 
          className="absolute -bottom-[3vw] w-full text-center text-[31vw] font-black tracking-tighter leading-[0.8] text-transparent bg-clip-text whitespace-nowrap pt-4"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #262626 5%, #a3a3a3 50%, #e5e7eb 95%)',
          }}
        >
          MIND
        </h1>
      </div>

      {/* =========================================
          ส่วนที่ 2: Content Section (กล่องขาวด้านล่าง)
      ========================================= */}
      <div 
        className={`relative z-10 bg-white w-full pt-10 pb-6 px-6 sm:px-10 lg:px-20 shadow-[0_-10px_30px_rgba(0,0,0,0.02)] transition-all duration-[1000ms] delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Nobgkai</h2>
              <p className="text-gray-500 text-sm md:text-base mb-4">
                ขอบพระคุณที่รับชมเว็บไซต์ของผม
              </p>
              <a href="#" className="text-gray-400 text-xs hover:text-black transition-colors w-fit relative group">
                ติดตามผลงาน
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <nav className="flex flex-wrap items-center gap-5 md:gap-7 text-sm text-gray-400">
              <a href="#" className="text-black font-bold hover:scale-105 transition-transform">Home</a>
              <a href="#" className="hover:text-black hover:scale-105 transition-all">Project</a>
              <a href="#" className="hover:text-black hover:scale-105 transition-all">Aboutme</a>
              <a href="#" className="hover:text-black hover:scale-105 transition-all">Drafts</a>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-5 border-t border-gray-100 text-[11px] sm:text-xs text-gray-400 gap-2">
            <p>© 2026 Nobgkai · Kaivit · ongat</p>
            <p>Credit By Kaivit Ongat</p>
          </div>

        </div>
      </div>
    </footer>
  );
}