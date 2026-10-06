"use client";

import { useEffect, useState, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const leftColumn = [
    {
      id: 1,
      name: "คนธรรมดาหมี",
      icon: (
        <div className="w-10 h-10 bg-[#1877F2] rounded-[10px] flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
          </svg>
        </div>
      ),
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      name: "kaivitongat",
      icon: (
        <div className="w-10 h-10 bg-[#00C300] rounded-[10px] flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
             <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.961 8.877 9.539 9.614.945.201 2.235.613 2.56.963.29.317.185.939.141 1.401l-.226 1.341c-.067.433-.312 1.545 1.353.844 1.666-.7 8.977-5.274 10.633-14.163z"/>
          </svg>
        </div>
      ),
      link: "https://line.me/ti/p/",
    },
    {
      id: 3,
      name: "kaivitongat",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] rounded-[10px] flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </div>
      ),
      link: "https://www.instagram.com/kaivitongat",
    },
    {
      id: 4,
      name: "Okaiivit@gmail.com",
      icon: (
        <div className="w-10 h-10 bg-[#EA4335] rounded-[10px] flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>
      ),
      link: "mailto:0kaivit@gmail.com",
    },
  ];

  const rightColumn = [
    {
      id: 5,
      name: "092-374-4137",
      icon: (
        <div className="w-10 h-10 bg-[#50C878] rounded-[10px] flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      ),
      link: "tel:0923744137",
    },
    {
      id: 6,
      name: "092-374-4137",
      icon: (
        <div className="w-10 h-10 bg-[#5865F2] rounded-[10px] flex items-center justify-center text-white flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
             <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
          </svg>
        </div>
      ),
      link: "https://discord.com/",
    },
    {
      id: 7,
      name: "Nobgkai",
      icon: (
        <div className="w-10 h-10 border-[2.5px] border-black rounded-[10px] flex items-center justify-center text-black rotate-45 flex-shrink-0 bg-white">
          <svg className="w-5 h-5 -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
            <line x1="6" y1="9" x2="6" y2="21"></line>
          </svg>
        </div>
      ),
      link: "https://github.com/Nobgkai",
    },
  ];

  return (
    <section className="w-full pt-16 pb-20 font-sans relative flex justify-center">
      
      <style>{`
        .bg-dot-pattern-faded {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-color: #FAFAFA;
          background-image: radial-gradient(#cbd5e1 1.5px, transparent 1.5px);
          background-size: 24px 24px;
          mask-image: radial-gradient(ellipse at center, black 15%, transparent 60%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 15%, transparent 60%);
        }
        
        .text-gradient-aura {
          background: linear-gradient(to right, #EC4899, #8B5CF6, #3B82F6);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 3s linear infinite;
        }
        
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>

      <div className="bg-dot-pattern-faded"></div>

      <div ref={sectionRef} className="w-full max-w-5xl px-6 md:px-8 relative z-10">
        
        <h2 
          className={`flex items-baseline gap-3 mb-12 transform transition-all duration-[1200ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95"
          }`}
        >
          <span className="text-5xl md:text-6xl font-bold text-[#2D1B69]">MY</span>
          <span className="text-5xl md:text-6xl font-bold text-gradient-aura">contact</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          
          {/* ----- คอลัมน์ซ้าย ----- */}
          {/* สังเกตการเพิ่ม h-fit เพื่อไม่ให้มันยืดความสูงเกินจริง */}
          <div className="relative flex flex-col gap-6 h-fit">
            
            {/* เส้นแกนสีดำ ปรับเป็น top-7 และ bottom-7 เพื่อให้ชนจุดกลางพอดีเป๊ะ */}
            <div 
              className={`absolute left-[7px] top-7 bottom-7 w-[2px] bg-black z-0 origin-top transform transition-transform duration-1000 ease-out delay-300 ${
                isVisible ? "scale-y-100" : "scale-y-0"
              }`}
            ></div>
            
            {leftColumn.map((contact, index) => (
              <div 
                key={contact.id} 
                className={`flex items-center gap-4 relative z-10 transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: `${400 + (index * 150)}ms` }}
              >
                <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 relative z-20"></div>
                
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-4 bg-white/90 backdrop-blur-sm p-2 pr-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
                >
                  {contact.icon}
                  <span className="text-gray-700 font-medium text-[16px] truncate">
                    {contact.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* ----- คอลัมน์ขวา ----- */}
          {/* เพิ่ม h-fit เหมือนกัน */}
          <div className="relative flex flex-col gap-6 h-fit">
            
            {/* เส้นแกนสีดำของฝั่งขวา */}
            <div 
              className={`absolute left-[7px] top-7 bottom-7 w-[2px] bg-black z-0 origin-top transform transition-transform duration-1000 ease-out delay-300 ${
                isVisible ? "scale-y-100" : "scale-y-0"
              }`}
            ></div>
            
            {rightColumn.map((contact, index) => (
              <div 
                key={contact.id} 
                className={`flex items-center gap-4 relative z-10 transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${400 + (index * 150)}ms` }}
              >
                <div className="w-4 h-4 bg-black rounded-full flex-shrink-0 relative z-20"></div>
                
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-4 bg-white/90 backdrop-blur-sm p-2 pr-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
                >
                  {contact.icon}
                  <span className="text-gray-700 font-medium text-[16px] truncate">
                    {contact.name}
                  </span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}