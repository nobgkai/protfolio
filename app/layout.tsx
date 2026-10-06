import type { Metadata } from "next";
import { Prompt, Itim } from "next/font/google";
///ส่วนimport หน้าต่างๆ
import Navbar from "./componets/navbar"; 
import Footer from "./componets/footer";

/////
import "./globals.css";

// 2. ตั้งค่าฟอนต์ Kanit
const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const itimFont = Itim({
  variable: "--font-itim-next",
  subsets: ["latin", "thai"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio of Nobgkai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${promptFont.variable} `}>
      
      {/* 3. เรียกใช้ตัวแปรฟอนต์ Kanit */}
      <body className="font-[family-name:var(--font-prompt)] antialiased bg-white min-h-screen flex flex-col">
        
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}