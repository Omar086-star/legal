import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabase-server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body.name ?? "").trim()
    const phone = String(body.phone ?? "").trim()
    const email = String(body.email ?? "").trim()
    const subject = String(body.subject ?? "").trim()
    const message = String(body.message ?? "").trim()

    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "الحقول المطلوبة ناقصة." },
        { status: 400 }
      )
    }

    const { error } = await supabaseServer.from("contact_messages").insert([
      { name, phone, email: email || null, subject, message },
    ])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "خطأ غير متوقع." }, { status: 500 })
  }
}
