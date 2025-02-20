"use client";
import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string[];
  type?: string; // لتحديد نوع البطاقة
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  type = "feature",
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // حالة التحكم في توسيع النص
  const maxLines = 3; // عدد الأسطر المعروضة قبل النقر على "رؤية المزيد"

  // تحديد أنماط البطاقة بناءً على النوع
  const listStyle = type === "feature" ? "list-disc" : "list-decimal";
  const hoverColor =
    type === "feature" ? "hover:bg-blue-50" : "hover:bg-green-50";

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 ${hoverColor} hover:shadow-2xl transition-all duration-300 ease-out text-right min-h-[300px] flex flex-col`}
      style={{
        maxHeight: isExpanded ? "none" : "300px", // السماح بالتمدد عند التوسيع
        overflow: isExpanded ? "visible" : "hidden", // إظهار المحتوى عند الحاجة
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300">
        {title}
      </h3>
      <ul
        className={`text-gray-700 leading-relaxed ${listStyle} list-inside space-y-2 flex-grow`}
        style={{
          whiteSpace: "pre-line", // يحافظ على تباعد الأسطر
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "flex",
          flexDirection: "column", // يجعل العناصر تظهر تحت بعضها
          flexWrap: "wrap", // يمنع التداخل عند تمدد النص
        }}
      >
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {description.length > maxLines && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 mt-2 hover:underline focus:outline-none self-end"
          style={{ marginTop: "auto" }}
        >
          {isExpanded ? "رؤية أقل" : "رؤية المزيد"}
        </button>
      )}
    </div>
  );
};

export default FeatureCard;
