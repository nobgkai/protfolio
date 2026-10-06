import Image from "next/image";
// import หน้าต่าง
import Card1 from "./componets/card1";
import Contact from "./componets/contact";
import Experience from "./componets/experience";
import Tools from "./componets/tools";
import Showproject from "./componets/showproject";
export default function Home() {
  return (
    // ใช้แท็กเปล่า <> หรือ div มาครอบ Component ทั้งหมดไว้
    <div className="flex flex-col min-h-screen">
      <Card1 />
      <Contact />
      <Experience />
      <Tools />
      <Showproject />
    </div>
  );
}