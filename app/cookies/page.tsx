import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Cookie, Settings2, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "سياسة الكوكيز | المستشار القانوني",
  description:
    "تعرف على كيفية استخدام ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم.",
}

const items = [
  {
    icon: Cookie,
    title: "ما هي الكوكيز؟",
    text: "ملفات صغيرة تُخزن على جهازك لتحسين تجربة التصفح وتذكر بعض الإعدادات.",
  },
  {
    icon: BarChart3,
    title: "لماذا نستخدمها؟",
    text: "لمساعدتنا على فهم استخدام الموقع وتحسين الأداء وتجربة المستخدم.",
  },
  {
    icon: Settings2,
    title: "التحكم بالكوكيز",
    text: "يمكنك تعطيل أو حذف الكوكيز من إعدادات المتصفح، وقد يؤثر ذلك على بعض وظائف الموقع.",
  },
]

export default function CookiesPage() {
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
              سياسة الكوكيز
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              شرح مبسط لكيفية استخدام ملفات تعريف الارتباط
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {items.map((i) => (
                <div
                  key={i.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                    <i.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-card-foreground">
                    {i.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {i.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                باستخدامك للموقع، فأنت توافق على استخدام الكوكيز وفق هذه السياسة.
                يمكنك تعديل إعدادات المتصفح في أي وقت.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
