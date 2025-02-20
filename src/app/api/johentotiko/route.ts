import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ✅ التحقق من البيانات المدخلة
    if (!data.name || !data.email) {
      return NextResponse.json(
        { message: "❌ الاسم والبريد الإلكتروني مطلوبان!" },
        { status: 400 }
      );
    }

    // ✅ الاتصال بقاعدة البيانات MongoDB
    const client = await clientPromise;
    const db = client.db("tiktok_streamers"); // اسم قاعدة البيانات
    const collection = db.collection("users"); // اسم المجموعة (Table)

    // ✅ إدراج البيانات في قاعدة البيانات
    const result = await collection.insertOne(data);

    // ✅ إرسال الاستجابة عند نجاح الحفظ
    return NextResponse.json(
      { message: "✅ تم حفظ البيانات بنجاح!", id: result.insertedId },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("❌ خطأ أثناء الحفظ:", error);

    // ✅ التأكد من أن `error` هو كائن خطأ
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "❌ خطأ أثناء حفظ البيانات", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "❌ حدث خطأ غير متوقع" },
      { status: 500 }
    );
  }
}
