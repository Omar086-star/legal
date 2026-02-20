import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Database, Lock, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "سياسة جمع البيانات | المستشار القانوني",
  description:
    "كيف نقوم بجمع البيانات ولماذا، وكيف نحافظ على خصوصيتك وحقوقك.",
}

const blocks = [
  {
    icon: Database,
    title: "ما البيانات التي نجمعها؟",
    text: "قد نجمع بيانات مثل الاسم، رقم الهاتف، البريد الإلكتروني، ومعلومات تتعلق بالطلب أو الاستشارة القانونية.",
  },
  {
    icon: UserCheck,
    title: "لماذا نجمعها؟",
    text: "لتقديم الخدمة، التواصل معك، تحسين الجودة، وتنظيم المواعيد والمتابعة.",
  },
  {
    icon: Lock,
    title: "حماية البيانات وحقوقك",
    text: "نلتزم بحماية بياناتك وعدم مشاركتها مع طرف ثالث إلا بموافقتك أو عند الضرورة القانونية. يمكنك طلب تعديل أو حذف بياناتك عبر التواصل معنا.",
  },
]

export default function DataCollectionPage() {
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
              سياسة جمع البيانات
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              نوضح لك ما نجمعه من بيانات وكيف نستخدمه ونحميه
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {blocks.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                    <b.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-card-foreground">
                    {b.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                للتواصل بخصوص بياناتك (تعديل/حذف/استفسار)، استخدم وسائل الاتصال
                المتاحة في صفحة التواصل.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
