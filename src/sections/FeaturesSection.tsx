import React from "react";
import Link from "next/link";

const FeaturesSection = () => {
  const features = [
    {
      title: "خدمة الرد الآلي الذكي",
      description: [
        "نهدف من هذه الخدمة, توفير دعم فني وإتصال وتواصل فعال ومنظم.",
        "تعمل الحاسبات الذكية, بلا كلل على مدار الساعة، لتزويدك بالمعارف السليمة التي تدعم تطورك وتساعدك.",
        "تسهيل الوصول للموظفين البشريين, لحالات الأسئلة الهامة والعاجلة.",
        "تحسين تجربة الاستخدام وتحديد المحتوى الملائم الذي ينسجم مع رؤيتك، محققًا طموحاتك على الصعيدين الشخصي والتجاري.",
        "نحن نوظف الذكاء الإصطناعي بما يدعم مجال صناعة المحتوى ونوفر البيانات المعالجة الداعمة لتطور مستخدينا.",
      ],
    },
    {
      title: "دورات تدريبية مميزة",
      description: [
        "التعليم المعزز: يتم تزويد صانع المحتوى بالمعرفة الأساسية التي يحتاجها للانطلاق في صناعة المحتوى على منصة تيك توك بشكل احترافي.",
        "تبسيط الشرح الوارد من أكاديمية تيك توك، وتقديم التعليم اللازم حول أهم السياسات والإرشادات المعمول بها.",
        "التدريب لصناعة فيديو: تحسين جودة التصوير الشخصي، تقديم النصائح لتحسين جودة الصوت الطبيعي أثناء التصوير، إضافة المؤثرات المرئية والصوتية.",
        "التدريب لصناعة البث المباشر: تقديم نصائح عملية لتحسين نمط البث، تحديد نوع المحتوى الأنسب بناءً على مهارات صانع المحتوى وجمهوره.",
        "اقتراحات نوعية لتحسين الدخل المالي، وزيادة الهدايا من الداعمين، ترتيب خطة البث ما قبل وخلال وبعد.",
        "دورات تدريبية خاصة حول كيفية استخدام الذكاء الاصطناعي في إنشاء المحتوى.",
      ],
    },
    {
      title: "فرص التطور والتواصل",
      description: [
        "خطة استراتيجية خاصة تُعد وفق توجيهات الخبراء والمستشارين، تتماشى مع إمكانياتك وتوجهاتك.",
        "الانضمام إلى شبكات من المبدعين بمختلف الاهتمامات، مع اجتماعات دورية لتبادل الخبرات والمستجدات.",
        "الدعم خلال الجولات الإدارية الرسمية للوكالة في البث المباشر لأصحاب البثوث ذات الجودة العالية والمحتوى الهادف المفيد.",
        "منافسات وتحديات رسمية بجوائز مالية أو عينية للفائزين.",
        "حجز ترويجي لصناع المحتوى المبدعين والملتزمين.",
        "تقديم طلبات فك حظر الحساب، مما يمنح صناع المحتوى فرصة أخرى للاستمرار في ذات الحساب.",
        "فعاليات وأنشطة كثيرة، نهدف لجعل تجربتك مشوقة واجتماعية ومفيدة.",
      ],
    },
  ];

  const requirements = [
    "يتجاوز السن القانوني للعمل.",
    "يتواجد ضمن نطاق جغرافي داخل الشرق الأوسط وشمال أفريقيا.",
    "يمتلك حساب تيك توك، لم يسبق له التسجيل في وكالة أخرى.",
    "يفكر أو يقدم محتوى هادف, يؤثر إيجابياً على المجتمع",
  ];

  return (
    <section
      className="py-12 relative"
      style={{
        backgroundImage: "url('/back.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      dir="rtl"
    >
      {/* طبقة شبه شفافة فوق الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

      {/* المحتوى */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-cyan-400 text-2xl font-bold text-center  mb-4">
            مزايا الانضمام لوكالة هايب فورج
          </h2>
          <p className="text-center text-white mb-8">
            نهدف إلى تقديم فريق إبداعي ومحتوى هادف يساهم في التأثير الإيجابي على
            المجتمع، مع الالتزام بأخلاقياته وقيمه.
          </p>

          {/* بطاقة شروط الانضمام */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                شروط الانضمام
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* أزرار الإجراء */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              <Link href="/tiktokjoin" className="text-white no-underline">
                قدم طلب الانضمام{" "}
              </Link>
            </button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
              <Link href="/tiktokstep" className="text-white no-underline">
                تعرف على المراحل
              </Link>
            </button>
          </div>

          {/* بطاقات المزايا */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 py-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold text-blue-500 mb-4">
                  {feature.title}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {feature.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* أزرار الإجراء أسفل الصفحة */}
          <div className="flex items-center justify-center gap-6">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              <Link href="/tiktokjoin" className="text-white no-underline">
                قدم طلب الانضمام{" "}
              </Link>
            </button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
              <Link href="/tiktokstep" className="text-white no-underline">
                تعرف على المراحل
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
