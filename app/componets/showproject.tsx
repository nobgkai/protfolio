'use client';
import React, { useState, useRef, useEffect } from 'react';

// ==========================================
// 1. Component สำหรับรูปภาพแบบ Lens Effect
// ==========================================
const LensImage = ({ src, alt }: { src: string; alt: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setPosition({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    });
  };

  return (
    <div 
      className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl cursor-crosshair group bg-gray-50 border-b border-gray-100"
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
    >
      <img 
        ref={imgRef} 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      
      {showLens && (
        <div 
          className="absolute pointer-events-none rounded-full border border-white/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-white/10 backdrop-blur-[1px] z-10"
          style={{
            width: '140px',
            height: '140px',
            left: `calc(${position.x}% - 70px)`,
            top: `calc(${position.y}% - 70px)`,
            backgroundImage: `url(${src})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundSize: '250%',
          }}
        />
      )}
    </div>
  );
};

// ==========================================
// 2. Component หน้าหลัก (Showproject)
// ==========================================
export default function Showproject() {
  // สร้าง State และ Ref สำหรับ Scroll Reveal
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // เลิกติดตามเมื่อแสดงผลแล้ว (เล่นครั้งเดียว)
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // ทำงานเมื่อเลื่อนมาเจอ 10% ของกล่อง
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'งานที่ 1',
      desc: 'รายละเอียดโปรเจกต์นี้เกี่ยวกับการพัฒนาระบบฐานข้อมูล...',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'งานที่ 2',
      desc: 'รายละเอียดการพัฒนาแอปพลิเคชันด้วย React และ Next.js...',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'งานที่ 3',
      desc: 'รายละเอียดโปรเจกต์ IoT และระบบเซ็นเซอร์อัจฉริยะ...',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const marqueeProjects = [...projects, ...projects];

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen w-full bg-[#fcfcfc] py-20 relative overflow-hidden font-sans flex flex-col items-center"
    >
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* Shiny Button Effect */
        @keyframes shine {
          0% { left: -100%; }
          50% { left: 200%; } 
          100% { left: 200%; }
        }
        .shiny-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right, 
            transparent 0%, 
            rgba(255, 255, 255, 0.3) 30%, 
            rgba(255, 255, 255, 0.9) 50%, 
            rgba(255, 255, 255, 0.3) 70%, 
            transparent 100%
          );
          transform: skewX(-35deg);
          animation: shine 4s infinite ease-in-out;
          pointer-events: none;
        }
        
        /* Card Floating Effect */
        @keyframes slideFloat {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-8px) translateX(4px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .animate-card-slide {
          animation: slideFloat 6s ease-in-out infinite;
        }

        /* MARQUEE EFFECT */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); } 
        }
        .marquee-content {
          animation: marquee 20s linear infinite;
        }
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
      `}} />

      {/* พื้นหลังลายจุด (Dot Pattern) */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-full opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>

      {/* 
        ====================================================
        ส่วน Header (เพิ่ม Animation ตอนลอยขึ้นมา)
        ====================================================
      */}
      <div 
        className={`max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center px-4 transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}
      >
        <div className="relative overflow-hidden rounded-full border border-gray-300 bg-gray-50 px-8 py-2 mb-6 shadow-sm shiny-btn cursor-default">
          <span className="text-gray-600 font-medium text-sm tracking-wide">ตัวอย่าง</span>
        </div>

        <div className="flex items-center w-full max-w-3xl mb-16">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mx-8 whitespace-nowrap">ผลงานของฉัน</h2>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
      </div>

      {/* 
        ====================================================
        ส่วน MARQUEE (เพิ่ม Animation + Delay ให้โผล่มาทีหลัง)
        ====================================================
      */}
      <div 
        className={`marquee-wrapper relative flex overflow-hidden w-full gap-8 py-10 w-screen transition-all duration-[1200ms] delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#fcfcfc] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#fcfcfc] to-transparent z-20 pointer-events-none"></div>

        <div className="marquee-content flex shrink-0 gap-8 min-w-full justify-around pl-4">
          {marqueeProjects.map((project, idx) => (
            <div 
              key={`set1-${idx}`}
              className="animate-card-slide w-[300px] md:w-[380px] shrink-0 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-300 flex flex-col border border-gray-100/50"
              style={{ animationDelay: `${idx * 1.5}s` }} /* <- แก้ไขการขึ้นบรรทัดใหม่ที่พิมพ์ผิดตรงนี้แล้ว */
            >
              <div className="p-3 pb-0">
                <LensImage src={project.img} alt={project.title} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <div className="flex justify-end border-t border-gray-100 pt-4 mt-auto">
                  <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors text-sm font-medium">
                    เพิ่มเติม &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="marquee-content flex shrink-0 gap-8 min-w-full justify-around pr-4" aria-hidden="true">
          {marqueeProjects.map((project, idx) => (
            <div 
              key={`set2-${idx}`}
              className="animate-card-slide w-[300px] md:w-[380px] shrink-0 bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-300 flex flex-col border border-gray-100/50"
              style={{ animationDelay: `${idx * 1.5}s` }} /* <- แก้ไขการขึ้นบรรทัดใหม่ที่พิมพ์ผิดตรงนี้แล้ว */
            >
              <div className="p-3 pb-0">
                <LensImage src={project.img} alt={project.title} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <div className="flex justify-end border-t border-gray-100 pt-4 mt-auto">
                  <a href="#" className="text-gray-400 hover:text-gray-800 transition-colors text-sm font-medium">
                    เพิ่มเติม &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}