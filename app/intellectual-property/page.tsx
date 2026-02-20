import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Copyright, ShieldCheck, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "الملكية الفكرية | المستشار القانوني",
  description:
    "سياسة الملكية الفكرية الخاصة بالمحتوى المنشور على الموقع وحقوق الاستخدام والنشر.",
}

const sections = [
  {
    icon: Copyright,
    title: "حقوق المحتوى",
    text: "جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والتصاميم والشعارات والصور والمواد، هي ملك للموقع أو للجهات المرخصة له، وتخضع لقوانين حماية الملكية الفكرية.",
  },
  {
    icon: FileText,
    title: "الاستخدام المسموح",
    text: "يُسمح بالاطلاع والاستخدام الشخصي غير التجاري للمحتوى. أي نسخ أو إعادة نشر أو توزيع أو تعديل لأي جزء من المحتوى يتطلب موافقة كتابية مسبقة.",
  },
  {
    icon: ShieldCheck,
    title: "حالات الانتهاك",
    text: "أي استخدام غير مصرح به للمحتوى قد يعرّض صاحبه للمساءلة القانونية وفق القوانين والأنظمة النافذة.",
  },
]

export default function IntellectualPropertyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              سياسات الموقع
            </p>
            <h1 className="mt-2 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              الملكية الفكرية
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              توضيح حقوق النشر والاستخدام للمحتوى المنشور على الموقع
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {sections.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                    <s.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-card-foreground">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                إذا رغبت بالحصول على إذن لاستخدام محتوى معين، تواصل معنا عبر
                قنوات الاتصال المتاحة على الموقع.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
