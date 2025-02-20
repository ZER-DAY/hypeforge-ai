"use client";
import React, { useState } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    tiktokId: "",
    name: "",
    whatsapp: "",
    email: "",
    age: "",
    streamType: "",
    fillLight: "",
    headset: "",
    phoneHolder: "",
    modernPhone: "",
    content: "",
    streamingDays: [] as string[],
    streamingHours: "",
    educationLevel: "",
    hasLaptop: "",
  });

  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDaySelection = (day: string) => {
    const updatedDays = formData.streamingDays.includes(day)
      ? formData.streamingDays.filter((d) => d !== day)
      : [...formData.streamingDays, day];

    setFormData({ ...formData, streamingDays: updatedDays });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(formData.age) < 18) {
      alert("❌ يجب أن يكون عمرك أكثر من 18 سنة.");
      return;
    }
    try {
      const response = await fetch("/api/johentotiko", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000); // إخفاء المودال بعد 3 ثوانٍ
        setTimeout(() => window.location.reload(), 3500); // إعادة تحميل الصفحة بعد 3.5 ثوانٍ لمسح البيانات
      } else {
        alert("❌ خطأ أثناء الإرسال.");
      }
    } catch (error) {
      console.error("❌ حدث خطأ أثناء إرسال البيانات:", error);
      alert("❌ حدث خطأ أثناء إرسال البيانات.");
    }
  };

  const fields = [
    { label: "معرف تيك توك", name: "tiktokId", type: "text" },
    { label: "الاسم الثلاثي", name: "name", type: "text" },
    { label: "رقم الواتساب", name: "whatsapp", type: "text" },
    { label: "الإيميل", name: "email", type: "email" },
    { label: "العمر", name: "age", type: "number" },
    {
      label: "نوع البث",
      name: "streamType",
      type: "select",
      options: ["", "ألعاب", "دردشة", "تعليمي"],
    },
    { label: "المحتوى", name: "content", type: "text" },
    {
      label: "ضوء الملء",
      name: "fillLight",
      type: "select",
      options: ["", "نعم", "لا"],
    },
    {
      label: "السماعات",
      name: "headset",
      type: "select",
      options: ["", "نعم", "لا"],
    },
    {
      label: "مثبت الهاتف",
      name: "phoneHolder",
      type: "select",
      options: ["", "نعم", "لا"],
    },
    {
      label: "جوال حديث",
      name: "modernPhone",
      type: "select",
      options: ["", "نعم", "لا"],
    },
    {
      label: "المستوى التعليمي",
      name: "educationLevel",
      type: "select",
      options: ["", "ثانوي", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه"],
    },
    {
      label: "يمتلك لابتوب",
      name: "hasLaptop",
      type: "select",
      options: ["", "نعم", "لا"],
    },
  ];

  const fieldsPerPage = 4;
  const totalPages = Math.ceil(fields.length / fieldsPerPage);
  const startIndex = page * fieldsPerPage;
  const endIndex = startIndex + fieldsPerPage;
  const currentFields = fields.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-black via-blue-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl space-y-6 border border-gray-300"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          تسجيل بيانات صناع المحتوى
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {currentFields.map((field) => (
            <div key={field.name}>
              <label className="form-label">{field.label}:</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  {field.options!.map((option) => (
                    <option key={option} value={option}>
                      {option || "اختر"}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              )}
            </div>
          ))}
        </div>

        {/* اختيار أيام البث */}
        {page === totalPages && (
          <div>
            <label className="form-label">📆 أيام البث:</label>
            <div className="flex flex-wrap gap-3">
              {[
                "الأحد",
                "الإثنين",
                "الثلاثاء",
                "الأربعاء",
                "الخميس",
                "الجمعة",
                "السبت",
              ].map((day) => (
                <button
                  type="button"
                  key={day}
                  onClick={() => handleDaySelection(day)}
                  className={`px-4 py-2 rounded-full border transition ${
                    formData.streamingDays.includes(day)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* اختيار ساعات البث */}
        {page === totalPages && (
          <div>
            <label className="form-label">ساعات البث:</label>
            <select
              name="streamingHours"
              value={formData.streamingHours}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">اختر ساعات البث</option>
              <option value="ساعتين">ساعتين</option>
              <option value="4 ساعات">4 ساعات</option>
              <option value="6 ساعات">6 ساعات</option>
              <option value="أكثر من 6 ساعات">أكثر من 6 ساعات</option>
            </select>
          </div>
        )}

        <div className="flex justify-between">
          {page > 0 && (
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="px-6 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
            >
              السابق
            </button>
          )}

          {page < totalPages ? (
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
            >
              التالي
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600"
            >
              إرسال
            </button>
          )}

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fadeIn">
                <h3 className="text-xl font-bold text-green-600">
                  ✅ تم الإرسال بنجاح!
                </h3>
                <p className="text-gray-600">
                  شكراً لتسجيلك. سيتم مراجعة بياناتك قريبًا.
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
