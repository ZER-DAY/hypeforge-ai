"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import ArrowRight from "@/assets/arrow-right.svg";
import logoAlasel from "@/assets/asq.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react"; // استيراد useState
import { FaWhatsapp } from "react-icons/fa";
export const Header = () => {
  const arrowControls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لإدارة فتح وإغلاق القائمة

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // تغيير حالة القائمة عند النقر على الأيقونة
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // إغلاق القائمة عند النقر على رابط
  };

  return (
    <header dir="rtl" className="sticky top-0 backdrop-blur-sm z-20">
      {/* الجزء العلوي من الهيدر */}
      <div className="flex justify-center items-center py-2 bg-[#1A1A1A] text-white text-sm gap-2">
        <p className="text-white/80 hidden md:block">
          إنطلق نحو مستقبل مشرق مع وكالة أتون لايڤ، حيث نبني معًا خطواتك الأولى
          نحو النجاح والتطور
        </p>
        <Link href="join-our-agency">
          <motion.div
            className="inline-flex gap-1 items-center cursor-pointer"
            onHoverStart={() => arrowControls.start({ x: 5 })}
            onHoverEnd={() => arrowControls.start({ x: 0 })}
          >
            <p>أنطلق الان</p>
            <motion.div animate={arrowControls} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </motion.div>
          </motion.div>
        </Link>
      </div>

      {/* الجزء الرئيسي من الهيدر */}
      <div className="py-5 bg-[#1A1A1A]">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* الشعار */}
            <div className="inline-flex relative before:content-[''] before:opacity-40 before:h-full before:w-full before:bg-[linear-gradient(to_right,#FF00FF,#FF00FF,#FFFFFF,#00FFFF,#00FFFF,#FFFFFF,#00FFFF,#00FFFF,#00FFFF,#FFFFFF,#FFD700,#FFFFFF)] before:absolute before:blur-md">
              <Image
                src={logoAlasel}
                alt="Footer Logo"
                height={70}
                className="relative"
              />
            </div>

            {/* أيقونة القائمة (للأجهزة المحمولة) */}
            <MenuIcon
              className="h-5 w-5 md:hidden text-white cursor-pointer"
              onClick={toggleMenu} // عند النقر على الأيقونة، يتم تغيير حالة القائمة
            />

            {/* قائمة التنقل (للأجهزة الكبيرة) */}
            <nav className="hidden md:flex gap-6 text-white/60 items-center">
              <Link href="/">الرئيسية</Link>
              <Link href="/tiktok">تيك توك</Link>
              <Link href="/about-us">من نحن</Link>
              <Link href="/contact">اتصل بنا</Link>
              <div className="mt-3 flex justify-center items-center space-x-4 space-x-reverse">
                {/* زر واتساب */}
                <a
                  href="https://wa.me/+79964921960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  تواصل معنا
                </a>
              </div>
            </nav>

            {/* قائمة التنقل (للأجهزة المحمولة) */}
            {isMenuOpen && (
              <nav className="md:hidden absolute top-24 right-0 bg-[#1A1A1A] w-full text-white/60 p-4">
                <Link href="/" className="block py-2" onClick={closeMenu}>
                  الرئيسية
                </Link>
                <Link href="/tiktok" className="block py-2" onClick={closeMenu}>
                  تيك توك
                </Link>
                <Link
                  href="/aboutus"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  من نحن
                </Link>

                <Link
                  href="/contact"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  اتصل بنا
                </Link>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight mt-2">
                  انطلق معنا
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
