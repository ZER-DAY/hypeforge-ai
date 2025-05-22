"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "حاجي تاراسوف",
      position: "مدير تنفيذي في  رابطة الدول المستقلة ",
      image: "/a2.jpg",
    },
    {
      name: "تامر عبد المطلب ابوطبل ",
      position: "مدير تنفيذي في الشرق الأوسط",
      image: "/a.jpg",
    },
    {
      name: "بهاء الهبيل",
      position: "مدير تنفيذي CEO",
      image: "/as2.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">
            <span className="italic">أتون لايڤ</span> - حلول المستقبل الذكية
          </h1>
        </div>

        {/* الوصف الموسع */}
        <div className="bg-white p-6 rounded shadow text-center mb-10">
          <p className="text-gray-600 text-lg">
            تقدم <span className="font-bold text-blue-600">أتون لايڤ</span>{" "}
            خدمات متكاملة في البرمجة، التسويق الرقمي، وتطوير الحلول الذكية. نحن
            نساعد الشركات على تحقيق النمو عبر التحول الرقمي المبتكر، ونوفر أحدث
            التقنيات لضمان نجاح المشاريع الرقمية. رؤيتنا هي بناء عالم رقمي أكثر
            كفاءة وذكاء، حيث يمكن للأعمال أن تزدهر وتحقق أهدافها. نحن متخصصون في
            تحليل البيانات، تطوير البرمجيات، وإدارة حملات التسويق الرقمي
            باحترافية، لنكون شريكك المثالي في النجاح.
          </p>
        </div>

        {/* فريق العمل */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow text-center"
            >
              <div className="relative w-[250px] h-[250px] mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h4 className="text-lg font-bold mt-4">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>

        {/* السلايدر */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className="text-center p-6 bg-white rounded shadow">
                <h3 className="text-xl font-medium text-blue-600">
                  تحليل البيانات الذكي
                </h3>
                <p className="text-gray-600">
                  نعمل على تطوير حلول تعتمد على الذكاء الاصطناعي لتحليل البيانات
                  وتحسين الأداء، مما يساعد الشركات على اتخاذ قرارات مستنيرة
                  ومستندة إلى البيانات.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center p-6 bg-white rounded shadow">
                <h3 className="text-xl font-medium text-blue-600">
                  تسويق رقمي متقدم
                </h3>
                <p className="text-gray-600">
                  نقدم استراتيجيات تسويقية متميزة لزيادة الوعي وتعزيز العلامة
                  التجارية، باستخدام أدوات تحليل متقدمة وتقنيات الذكاء الاصطناعي
                  لضمان أفضل النتائج.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center p-6 bg-white rounded shadow">
                <h3 className="text-xl font-medium text-blue-600">
                  تطوير التطبيقات
                </h3>
                <p className="text-gray-600">
                  نقوم بتصميم وبرمجة تطبيقات ذكية تلبي احتياجات العملاء، مع
                  التركيز على تجربة المستخدم وسهولة الاستخدام لضمان رضا العملاء
                  وتحقيق الأهداف.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
