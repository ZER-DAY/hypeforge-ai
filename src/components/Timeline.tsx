"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// تحميل مكون Chrono ديناميكيًا مع تعطيل SSR
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

const Timeline: React.FC = () => {
  const items = [
    {
      title: "الخطوة الأولى",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الأولى: المقابلة
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          الهدف: توفير بداية قوية ومنظمة لصانع المحتوى مع الشركة من خلال فهم
          شامل لاحتياجاته، قدراته، وكيفية دعمه لتحقيق النجاح المشترك.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
الجدولة:
- يتم تخصيص يومين أسبوعيًا لعقد مقابلات دورية مع صناع المحتوى الجدد ومتابعة مستمرة لتطوير الأقدم.

التنسيق:
- يتم تنظيم جدول المقابلات بالتنسيق بين قسم استكشاف واستقطاب صناع المحتوى وفريق التدريب والتعليم.

فهم الخلفية:
- فهم أهداف صانع المحتوى وأسباب رغبته في العمل مع الشركة.

تقييم المهارات:
- تقييم مهارات صانع المحتوى الأساسية مثل الإبداع، التواصل، التفاعل مع الجمهور، والقدرة على تنفيذ الأفكار.

تحديد المجالات المستهدفة:
- مناقشة المجالات التي ينوي صانع المحتوى التخصص بها (كوميديا، تعليم، ترفيه، صحة، إلخ).

تحديد الجمهور المستهدف:
- فهم الفئة العمرية والاهتمامات التي تساهم في تشكيل أسلوب المحتوى المقدم.

تقييم الخبرات:
- تحليل الخبرات الحالية مثل إنتاج الفيديوهات، التصميم، أو إدارة البث المباشر.
- تحديد المهارات التي يحتاج لتطويرها أو تعلمها لتحقيق أهدافه وأهداف الشركة.

وضع ملامح الاستراتيجية:
- بناء استراتيجية شاملة تشمل:
  - الأهداف: المهارات التي يجب اكتسابها والمحتوى المتوقع تقديمه.
  - الدعم المطلوب: توفير تدريبات أو توجيهات مخصصة.
  - الخط الزمني: وضع خطة عمل زمنية واضحة.

          `}
        </div>
      ),
    },
    {
      title: "الخطوة الثانية",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الثانية: التعاقد
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          الهدف: ضمان بداية سلسة لصانع المحتوى مع الوكالة من خلال تحديد التوقعات
          المتبادلة.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`التحقق من مطابقة الحساب وشروط التعاقد:
- مراجعة حساب تيك توك للتأكد من مطابقته لمعايير الوكالة من حيث جودة المحتوى، عدد المتابعين، ومستوى التفاعل.
- ضمان توافر الشروط اللازمة للتعاقد مثل الاستقلالية وعدم ارتباط صانع المحتوى بوكالة أخرى.

مناقشة بنود التعاقد:
- تقديم شرح واضح لبنود التعاقد بما يشمل الحقوق والواجبات.

توثيق الانضمام:
- إعداد رسالة تأكيد بانضمام صانع المحتوى إلى الوكالة، متضمنة التزامه بالشروط وإرشادات مجتمع تيك توك ووكالة هايبر فورج.
- التأكيد على عدم انضمام صانع المحتوى لأي وكالة أخرى مسبقًا أو مستقبلاً خلال فترة التعاقد.

توضيح الامتيازات:
- شرح الامتيازات التي سيحصل عليها صانع المحتوى، مثل:
  - الدعم التقني والإبداعي.
  - التدريبات المتخصصة.
  - فرص التسويق والإعلان.

توضيح الخطة العامة:
- رسم مسار العمل من خلال تقديم خطة توضح مراحل تطوير صانع المحتوى منذ البداية.
  - المرحلة الأولى: إنتاج محتوى أولي يعكس مهاراته الحالية.
  - التطوير التدريجي: إدراج مراحل تطوير المهارات والإبداع في المحتوى.
  - تخصيص مواعيد دورية لمتابعة الأداء وتقييم التقدم.
`}
        </div>
      ),
    },
    {
      title: "الخطوة الثالثة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الثالثة: التعليم المعزز
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تزويد صانع المحتوى بالمعرفة الأساسية وأدوات الدعم لفهم منصة تيك توك
          بشكل احترافي.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`وصف المرحلة:
- تزويد صانع المحتوى بالمعرفة الأساسية للانطلاق في صناعة المحتوى على منصة تيك توك بشكل احترافي.
- التركيز على فهم القوانين والسياسات وأدوات الدعم المتاحة.
- تعزيز استيعابه للبيئة التي يعمل بها وتطوير استراتيجيته بناءً على مهاراته وقدراته.

أهداف التعليم المعزز:
- التعرف على سياسات تيك توك لفهم قوانين الحظر والسياسات المتعلقة بالمحتوى، وضمان الالتزام بمعايير المنصة وتجنب المخالفات.
- تقديم معلومات حول الأدوات والمنصات المساعدة، مثل برامج تحرير الفيديو، أدوات تحليل الأداء، وبرامج التصميم.
- إطلاع صانع المحتوى على المراحل القادمة في خطته التدريبية وفريق العمل الذي سيتعاون معه لتحقيق أهدافه.
- إعداد استراتيجية مخصصة تناسب قدرات صانع المحتوى، مهاراته، والأهداف التي يسعى لتحقيقها على تيك توك.

طريقة التنفيذ:
- التعليم عبر الفيديوهات المسجلة، حيث يتم توفير مواد تعليمية تغطي النقاط الأساسية بشكل تفصيلي.
- عقد جلسة متابعة قصيرة لتقييم مدى استيعاب المحتوى التعليمي والإجابة على أي أسئلة أو استفسارات.
 `}
        </div>
      ),
    },
    {
      title: "الخطوة الرابعة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الرابعة: التدريب لصناعة الفيديو
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تمكين صناع المحتوى من إنتاج فيديوهات احترافية تجمع بين الإبداع
          والجاذبية.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`أهداف التدريب:
- تمكين صناع المحتوى من إنتاج فيديوهات احترافية تشمل:
  - تصوير الذات: تحسين جودة التصوير الشخصي.
  - استخدام الصوت الحقيقي: تقديم النصائح لتحسين جودة الصوت الطبيعي أثناء التصوير.
  - إضافة المؤثرات المرئية والصوتية: تعزيز جاذبية الفيديو باستخدام تأثيرات مبتكرة.
  - إضافة الموسيقى: اختيار الموسيقى المناسبة لتعزيز الرسالة والجو العام للفيديو.

- معرفة موسعة حول إنتاج فيديو احترافي يعتمد على:
  - "الهوك" (Hook): التركيز على أول 3 ثوانٍ لجذب انتباه المشاهد.
  - المحتوى المعزز: تحسين جودة السرد والعناصر المرئية لدعم الرسالة.
  - حث المشاهدين على التفاعل: تقديم استراتيجيات لزيادة الإعجابات، التعليقات، والمشاركة.

- الاستفادة من الفيديوهات الرائجة:
  - البحث عن الفيديوهات الرائجة حاليًا لتكون مرجعًا لصانع المحتوى بناءً على نمطه وجمهوره المستهدف.

- كتابة النصوص:
  - تقديم المشورة حول كتابة النصوص الملائمة لنمط المحتوى ولجمهور صانع المحتوى.

- إنتاج الفيديوهات القصيرة:
  - مساعدة صانع المحتوى على تصوير وتحرير فيديوهات قصيرة ذات جودة عالية.

مراحل التدريب:
- المرحلة الأولى: الحلقات المسجلة:
  - توفير مواد تدريبية مسجلة تتناول المهارات الأساسية والممارسات الاحترافية لصناعة الفيديو.

- المرحلة الثانية: الحلقات التدريبية المباشرة:
  - عقد جلسات تفاعلية مباشرة تقدم تدريبًا عمليًا مع استشارات فورية وتطبيقات حية.

          `}
        </div>
      ),
    },
    {
      title: "الخطوة الخامسة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الخامسة: التدريب لصناعة البث المباشر
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تمكين صانع المحتوى من تقديم بث مباشر احترافي يعزز التفاعل والجاذبية.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`ضبط معدات البث المباشر:
- التأكد من تجهيز معدات البث بجودة عالية لضمان تقديم محتوى احترافي، مع توفير أو التوجيه لشراء الأدوات التالية:
  - حامل الهاتف: لتثبيت الهاتف بثبات أثناء البث.
  - هاتف بجودة تصوير عالية: لضمان جودة الفيديو والصوت.
  - سماعات الرأس: لتحسين جودة الصوت وتقليل الضوضاء الخارجية.
  - ضوء الملء (Ring Light): لضبط الإضاءة بشكل مثالي.
- معدات أكثر تطوراً (اختياري):
  - بطاقة صوت: لتحسين جودة الصوت.
  - كاميرا DSLR: لتصوير بجودة احترافية.

تطوير المهارات المطلوبة للبث المباشر:
- تحسين محتوى البث:
  - استشارات نمط البث: تحديد نوع المحتوى الأنسب بناءً على مهارات صانع المحتوى وجمهوره.
  - تقديم اقتراحات عملية مثل:
    - محتوى تفاعلي (أسئلة وأجوبة).
    - عروض تعليمية أو استعراضية.
  - تحسين الإخراج:
    - الإضاءة: تحديد أماكن توزيع الإضاءة لتحسين الصورة.
    - الفلاتر: اختيار الفلاتر الأنسب لجعل البث جذاباً.
    - المظهر الشخصي: توجيه حول اختيار الملابس الملائمة.
    - مكان الجلوس: تحسين مظهر الكرسي والخلفية ليعكس احترافية.

- تحسين أساليب البث المباشر:
  - استشارات الأداء: تقديم نصائح حول تحسين التعبير عن الذات أثناء البث.
  - تدريب على أساليب التفاعل مع الجمهور لزيادة التفاعل المباشر.
  - أفكار لتحفيز التفاعل: اقتراح أفكار مثل إجراء مسابقات، استخدام استطلاعات الرأي، أو دعوة الضيوف.

استراتيجيات محتوى البث:
- تطوير استراتيجية المحتوى:
  - تحديد جدول بث منتظم لضمان التزام الجمهور.
  - تقديم خطط لتنويع المحتوى مثل:
    - محتوى تعليمي، ترفيهي، أو توجيهي.
    - تخصيص محتوى يتناسب مع الأحداث الموسمية أو الاتجاهات.
- تصميم المحتوى:
  - تقديم مشورة لتحسين سرد القصص أثناء البث.
  - إثراء المحتوى بأفكار إبداعية تزيد من جاذبية البث.
 `}
        </div>
      ),
    },
    {
      title: "الخطوة السادسة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة السادسة: التدريب لاستخدام أدوات الذكاء الاصطناعي
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تعزيز إبداع صناع المحتوى باستخدام الذكاء الاصطناعي لتحسين جودة المحتوى
          وزيادة التفاعل.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`تفاصيل التدريب:

توفير تدريب عملي شامل:
- جلسات تدريبية مباشرة:
  - عقد ورش عمل لتدريب المبدعين على استخدام أدوات الذكاء الاصطناعي بشكل عملي.
- تسجيلات مسبقة:
  - تقديم فيديوهات تدريبية توضح كيفية استخدام الأدوات خطوة بخطوة، ليتمكن المبدعون من الرجوع إليها في أي وقت.

الأدوات والتطبيقات المدروسة:
- إنتاج الصور:
  - استخدام أدوات الذكاء الاصطناعي لإنشاء تصاميم وصور احترافية تتناسب مع هوية المبدع.
- تحرير الفيديو:
  - تدريب على برامج تعتمد الذكاء الاصطناعي لتحرير الفيديو وإضافة المؤثرات بسهولة.
- إنتاج الصوت:
  - استخدام أدوات لتسجيل الصوت وتحسين جودته أو تحويل النصوص إلى صوت بجودة احترافية.

استخدام الذكاء الاصطناعي في المحتوى:
- كتابة المحتوى:
  - تقديم أدوات تعتمد على الذكاء الاصطناعي لمساعدة المبدع في كتابة نصوص جذابة وسيناريوهات قوية.
- تحويل الأفكار إلى خطوات عملية:
  - تدريب المبدعين على تحويل أفكارهم الإبداعية إلى خطوات مكتوبة واضحة تسهل تنفيذها.
- صناعة الصورة أو الفيديو:
  - تعلم كيفية استخدام أدوات لتحويل الأفكار إلى صور أو فيديوهات ذات جودة عالية بوقت قصير.
- صناعة الصوت:
  - تدريب على إنتاج تأثيرات صوتية أو تحويل النصوص إلى تسجيلات صوتية باستخدام الذكاء الاصطناعي.

تحسين الانتشار والاستهداف:
- استخدام أدوات الذكاء الاصطناعي لتحليل الأداء وتقديم استراتيجيات مخصصة لتحسين الوصول إلى الجمهور المستهدف.
 `}
        </div>
      ),
    },
  ];

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const toolbar = document.querySelector(".ToolbarWrapper-sc-exupb5-0");
      if (toolbar) {
        toolbar.remove();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div dir="rtl" style={styles.container}>
      <h1 style={styles.title}>خطوات مراحل تطور صانع المحتوى</h1>
      <div style={styles.chronoContainer}>
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={{
            primary: "#4F46E5",
            secondary: "#FFD700",
            cardBgColor: "rgba(31, 41, 55, 0.9)",
            cardForeColor: "#fff",
            titleColorActive: "#FFD700",
          }}
          cardHeight={300}
          scrollable
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to bottom right, #111827, #1F2937)",
    color: "#FFFFFF",
    padding: "40px 0",
    minHeight: "100vh",
    width: "100%",
  },
  title: {
    textAlign: "center" as const,
    fontSize: "2.5rem",
    fontWeight: "bold" as const,
    marginBottom: "20px",
  },
  chronoContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
  },
  subtitle: {
    textAlign: "right" as const,
    direction: "rtl" as const,
    color: "#FFD700",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  detailedText: {
    whiteSpace: "pre-line" as const,
    textAlign: "right" as const,
    direction: "rtl" as const,
    color: "#E5E7EB",
    fontSize: "1rem",
    lineHeight: "1.8",
  },
};

export default Timeline;
