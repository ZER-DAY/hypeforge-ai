// app/about/page.tsx
import React from "react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen py-10 px-5 ">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* عنوان الصفحة */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          عن شركة أتون لايڤ
        </h1>

        {/* المحتوى الرئيسي */}
        <div className="space-y-8">
          {/* الفقرة الرئيسية */}
          <p className="text-lg leading-8 text-gray-700">
            نحن في شركة أتون لايڤ، نعتبر أنفسنا روادًا في مجال التسويق الرقمي،
            حيث نتميز بتقديم حلول مبتكرة ومتكاملة تلبي احتياجات عملائنا على
            مستوى العالم العربي وما بعده. تأسست شركتنا في قطاع غزة، فلسطين،
            وتحديدًا في مدينة غزة على شارع الوحدة بالقرب من برج الجوهرة. يمكنكم
            التواصل معنا عبر الرقم
            <div className="mt-8 flex justify-center items-center space-x-4 space-x-reverse">
              <a
                href="https://wa.me/+79964921960"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
              >
                <FaWhatsapp className="w-6 h-6 mr-2" />
                واتساب
              </a>
            </div>
          </p>

          {/* فرع إسطنبول */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              فرع روسيا{" "}
            </h2>
            <p className="text-lg leading-8 text-gray-700">
              في عام 2021، وسعت شركة أتون لايڤ لتنمية الموارد البشرية وتكنولوجيا
              المعلومات نشاطاتها إلى روسيا، حيث افتتحنا فرعنا في إسطنبول،
              بلكدوزو، لتكون نقطة انطلاق جديدة في رحلتنا نحو العالمية. يمكنكم
              الاتصال بفرعنا في إسطنبول عبر الرقم
              <div className="mt-8 flex justify-center items-center space-x-4 space-x-reverse">
                <a
                  href="https://wa.me/+79964921960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  واتساب
                </a>
              </div>
            </p>
          </div>

          {/* فرع الامارات */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">
              فرع الامارات
            </h2>
            <p className="text-lg leading-8 text-gray-700">
              وفي إطار سعينا الدائم للتوسع وتقديم خدماتنا لأكبر عدد من العملاء،
              حصلنا في عام 2024 على ترخيص للعمل في سلطنة الامارات، حيث يقع
              مكتبنا في مسقط، الخوير بالقرب من الامارات مول. للتواصل مع فرعنا في
              الامارات، يمكنكم الاتصال على الرقم
              <div className="mt-8 flex justify-center items-center space-x-4 space-x-reverse">
                <a
                  href="https://wa.me/+79964921960"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  واتساب
                </a>
              </div>
            </p>
          </div>

          {/* الرسالة */}
          <blockquote className="border-l-4 border-orange-600 pl-4 text-gray-600 italic text-xl">
            نلتزم في أتون لايڤ بتقديم خدمات تسويق رقمي تتميز بالجودة والابتكار،
            مع التركيز على بناء علاقات قوية ومستدامة مع عملائنا. نحن هنا
            لنساعدكم في تحقيق أهدافكم التسويقية وتطوير استراتيجياتكم الرقمية بما
            يتماشى مع أحدث التطورات التكنولوجية، مع الحفاظ على القيم والعادات
            أتون لايڤة للمجتمعات.
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
