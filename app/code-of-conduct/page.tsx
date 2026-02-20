import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BadgeCheck, Scale, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "مدونة السلوك | المستشار القانوني",
  description:
    "مبادئنا المهنية: النزاهة، السرية، احترام القانون، وتقديم الخدمة دون تمييز.",
}

const principles = [
  {
    icon: BadgeCheck,
    title: "النزاهة والشفافية",
    text: "نلتزم بالوضوح في الإجراءات، وتقديم معلومات دقيقة بقدر الإمكان ضمن حدود النظام والقانون.",
  },
  {
    icon: Scale,
    title: "احترام القانون والسرية",
    text: "نحافظ على سرية معلومات العملاء والوثائق، ونلتزم بأخلاقيات المهنة والأنظمة النافذة.",
  },
  {
    icon: Handshake,
    title: "احترام الجميع وعدم التمييز",
    text: "نقدّم خدماتنا باحترام ومن دون تمييز، ونتوقع من الجميع الالتزام بالاحترام المتبادل.",
  },
]

export default function CodeOfConductPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              مبادئ العمل
            </p>
            <h1 className="mt-2 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              مدونة السلوك
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              نعمل وفق مبادئ واضحة تضمن المهنية والاحترام وحماية الحقوق
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                    <p.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-card-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                في حال وجود ملاحظة أو شكوى تتعلق بالسلوك المهني، يرجى التواصل عبر
                قنوات الاتصال الرسمية الموجودة في الموقع.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
