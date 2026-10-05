import Link from "next/link";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "ทำงานใน สถานประกอบการ",
      description:
        "มีประสบการณ์ ทำงานแบบแบ่งงานและการทำงานร่วมกับผู้อื่น และแบ่งหน้าที่อย่างชัดเจน โดยประเภทงานเป็นงาน กราฟฟิก และงานตัด CNC โดยการรับงาน และจัดการงานกราฟฟิก และนำไปตัด CNC และได้มีการเรียนรู้ข้อผิดพลาด และสิ่งที่ควรปรับปรุง โดยมีการฝึกฝนความชำนาญอย่างเต็มที่ตลอดระยะเวลาการทำงาน",
      linkText: "อ่านเพิ่มเติม และ รับชมผลงาน >",
      linkUrl: "#",
    },
    {
      id: 2,
      title: "ในชั้นเรียน",
      description:
        "ภายในชั้นเรียน ผมได้มีการนำความรู้มาประยุกต์ใช้อย่างเต็มที่อีกทั้งยังมีการค้นคว้าและศึกษาความรู้เพิ่มเติมจากภายนอกห้องเรียน ทั้งทาง Internet Ai และบุคคลจริง โดยภายในชั้นเรียน มีการประดิษฐ์ ผลงานมากมาย ไม่ว่าจะเป็น WebApp IoT หรืองานฝีมือ จิตกรรม และมีการนำความรู้และเทคนิคจากครูผู้สอนมาใช้งานอย่างเต็มที่และทดลองจริง",
      linkText: "อ่านเพิ่มเติม และ รับชมผลงาน >",
      linkUrl: "#",
    },
  ];

  // สุ่มจุดเกิด (top, left) และระยะเวลาการตก (duration) เพื่อให้ดูเป็นธรรมชาติ (หน่วงเวลา 7-12 วินาทีให้ค่อยๆ ตก)
  const meteors = [
    { top: "-10%", left: "80%", delay: "0s", duration: "8s" },
    { top: "10%", left: "40%", delay: "2s", duration: "10s" },
    { top: "0%", left: "100%", delay: "4s", duration: "9s" },
    { top: "-5%", left: "60%", delay: "6s", duration: "11s" },
    { top: "15%", left: "20%", delay: "1s", duration: "7.5s" },
    { top: "-20%", left: "90%", delay: "3s", duration: "9.5s" },
    { top: "20%", left: "50%", delay: "5s", duration: "8.2s" },
    { top: "5%", left: "10%", delay: "7s", duration: "10.5s" },
    { top: "-15%", left: "70%", delay: "1.5s", duration: "8.8s" },
    { top: "25%", left: "85%", delay: "4.5s", duration: "7.8s" },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-16 font-sans relative overflow-hidden flex justify-center">
      
      {/* 1. สไตล์สำหรับเอฟเฟกต์ Meteors (ดาวตกแบบมีหัวและหางจาง) */}
      <style>{`
        .meteor-element {
          position: absolute;
          width: 150px; /* ความยาวของหางดาวตก */
          height: 1.5px; /* ความหนาของเส้น */
          /* ไล่สีจากขวา (หัว) เป็นสีเทา ไปซ้าย (หาง) ให้โปร่งใส */
          background: linear-gradient(270deg, rgba(156, 163, 175, 0.8) 0%, rgba(156, 163, 175, 0) 100%);
          transform: rotate(115deg); /* มุมองศาการตก (เฉียงลงซ้าย) */
          opacity: 0;
          animation: meteor-animation linear infinite;
        }
        
        /* หัวดาวตก (จุดกลมๆ ด้านหน้า) */
        .meteor-element::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0; /* ให้อยู่ด้านหน้าสุดของเส้น */
          transform: translateY(-50%);
          width: 3.5px;
          height: 3.5px;
          border-radius: 50%;
          background-color: #6b7280; /* สีเทาเข้ม */
          box-shadow: 0 0 8px 1px rgba(107, 114, 128, 0.4); /* เงาเรืองแสงรอบๆ หัว */
        }
        
        /* แอนิเมชันการเคลื่อนที่จากบนลงล่างแบบยาวๆ */
        @keyframes meteor-animation {
          0% {
            transform: rotate(115deg) translateX(-300px); /* เริ่มต้นจากนอกจอ */
            opacity: 0;
          }
          10% { opacity: 1; }
          70% { opacity: 1; }
          100% {
            transform: rotate(115deg) translateX(2000px); /* ทะลุลงไปสุดจอ */
            opacity: 0;
          }
        }
      `}</style>

      {/* 2. Container ตัวปล่อยดาวตก */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {meteors.map((meteor, idx) => (
          <div 
            key={idx} 
            className="meteor-element"
            style={{ 
              top: meteor.top, 
              left: meteor.left, 
              animationDelay: meteor.delay, 
              animationDuration: meteor.duration 
            }}
          ></div>
        ))}
      </div>

      {/* 3. รูปทรงสีเทาโค้งๆ ด้านหลังฝั่งขวา */}
      <div className="absolute right-[-10%] top-[20%] w-[400px] h-[500px] bg-[#8A8A8A] rounded-[100px] rotate-[-15deg] z-0 hidden md:block"></div>

      {/* 4. พื้นที่คอนเทนต์หลัก */}
      <div className="w-full max-w-4xl px-6 md:px-8 relative z-10">
        
        {/* หัวข้อและเส้นขีด */}
        <div className="flex flex-row items-center gap-4 md:gap-6 mb-12">
          
          {/* ปรับให้ "ประสบการณ์" ใหญ่ และ "& การทำงาน" เล็กลง */}
          <h2 className="flex flex-col gap-0 leading-tight">
            <span className="text-4xl md:text-[46px] font-extrabold text-black tracking-tight drop-shadow-sm">ประสบการณ์</span>
            <span className="text-xl md:text-2xl font-bold text-gray-600">& การทำงาน</span>
          </h2>
          
          <div className="hidden md:block flex-1 h-[2px] bg-gray-300 mt-[-20px]"></div>
        </div>

        {/* Grid สำหรับการ์ด 2 ใบ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {experiences.map((item) => (
            <div 
              key={item.id} 
              /* ปรับพื้นหลังให้โปร่งแสงนิดๆ (backdrop-blur) เพื่อให้เห็นดาวตกวิ่งผ่านหลังกล่อง */
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl md:text-[22px] font-bold text-black mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-8 flex-1">
                {item.description}
              </p>
              
              <div className="text-right mt-auto">
                <Link 
                  href={item.linkUrl}
                  className="inline-block text-gray-500 hover:text-black font-medium text-[14px] transition-colors"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}