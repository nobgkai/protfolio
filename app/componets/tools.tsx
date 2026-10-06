'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Tools() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // ตั้งค่า Observer สำหรับดักจับการเลื่อนหน้าจอ
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // ให้แอนิเมชันเล่นแค่ครั้งเดียวตอนเลื่อนมาเจอ
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } // เลื่อนมาเจอ 10% ของกล่อง ก็ให้เริ่มเล่นแอนิเมชันเลย
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ข้อมูลหมวดหมู่และเครื่องมือ
  const skillCategories = [
    {
      title: "ภาษา",
      skills: [
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS3", icon: "/tool/css.png" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "พาวเวอร์เชลล์", icon: "/tool/pwd.png" },
        { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }, 
      ],
    },
    {
      title: "เครื่องมือ",
      skills: [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/black" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Tailwind.css", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "เฟรมเมอร์ โมชั่น", icon: "/tool/Fm.png" },
      ],
    },
    {
      title: "ฐานข้อมูลและโครงสร้างพื้นฐาน",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Debian linux", icon: "https://cdn.simpleicons.org/debian/A81D33" },
        { name: "Mongo DB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      ],
    },
    {
      title: "เครื่องมืออื่นๆ และการจัดการ",
      skills: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
        { name: "GitHub Action", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/black" },
        { name: "Vs Code", icon: "/tool/vs.png" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
        { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
        { name: "Antigravity", icon: "https://cdn.simpleicons.org/python/3776AB" }, 
      ],
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-[#FAFAFA] py-16 font-sans flex justify-center relative overflow-hidden"
    >
      
      {/* แสงฟุ้งๆ ด้านหลัง */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none z-0"></div>

      <div className="w-full max-w-5xl px-6 md:px-8 relative z-10">
        
        {/* ส่วนหัว (Header) */}
        <div 
          className={`flex items-center gap-6 mb-12 transition-all duration-[1000ms] ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-24 h-24 relative flex-shrink-0">
             <Image 
               src="/logo/logo.png" 
               alt="Hamster Mascot" 
               fill 
               className="object-contain drop-shadow-sm" 
             />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
              ภาษา
              <br />
              <span className="text-3xl md:text-4xl font-bold text-gray-800">
                และ เครื่องมือที่ใช้
              </span>
            </h2>
          </div>
        </div>

        {/* วนลูปแสดงหมวดหมู่ต่างๆ */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              
              {/* เส้นแบ่งและชื่อหมวดหมู่ (ใช้ Delay ตาม index หมวดหมู่) */}
              <div 
                className={`flex items-center gap-4 mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${200 + (idx * 150)}ms` }}
              >
                <h3 className="text-gray-500 font-medium text-lg whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>

              {/* Grid แสดงกล่องเครื่องมือ */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {category.skills.map((skill, index) => (
                  /* หุ้มกล่องด้วย div อีกชั้นสำหรับจัดการ Reveal Animation แยกออกจาก Hover */
                  <div
                    key={index}
                    className={`transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                    }`}
                    // หน่วงเวลาแอนิเมชัน: หมวดหมู่ถัดไปจะรอนานขึ้น + ไอเทมลำดับถัดไปจะรอนานขึ้นทีละนิด (Cascade effect)
                    style={{ transitionDelay: `${300 + (idx * 150) + (index * 75)}ms` }}
                  >
                    <div 
                      className="flex items-center gap-4 bg-white/80 backdrop-blur-md border border-white rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative h-full"
                    >
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 pointer-events-none"></div>

                      <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain flex-shrink-0 relative z-10" />
                      <span className="text-gray-700 font-medium text-[15px] truncate relative z-10">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 