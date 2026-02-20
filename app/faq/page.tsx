import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HelpCircle, ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | المستشار القانوني",
  description:
    "إجابات على أكثر الأسئلة شيوعًا حول خدماتنا القانونية وآلية التواصل والسرية.",
}

const faqs = [
  {
    q: "ما هي الخدمات التي تقدمونها؟",
    a: "نقدم خدمات قانونية تشمل الاستشارات القانونية، متابعة المعاملات، وتسجيل الوقائع المدنية مثل الولادات والوفيات والزواج وفق الأنظمة المعمول بها.",
  },
  {
    q: "هل الخدمات مجانية؟",
    a: "قد تُقدم بعض الخدمات مجانًا وفق معايير وشروط محددة، بينما قد تكون خدمات أخرى مدفوعة حسب طبيعة الملف والإجراءات المطلوبة.",
  },
  {
    q: "كيف يمكنني حجز موعد؟",
    a: "يمكنك حجز موعد عبر الرابط المخصص للحجز أو التواصل معنا عبر وسائل الاتصال المتاحة مثل واتساب.",
  },
  {
    q: "هل المعلومات والوثائق التي أقدمها سرية؟",
    a: "نعم. نلتزم بالسرية التامة لجميع المعلومات والوثائق المقدمة، وبما يتوافق مع أخلاقيات المهنة.",
  },
  {
    q: "كم تستغرق مدة إنجاز المعاملة؟",
    a: "تعتمد المدة على نوع المعاملة واستجابة الجهات المختصة. سنقدم لك تقديرًا أوليًا بعد مراجعة ملفك.",
  },
]

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              الدعم والمساعدة
            </p>
            <h1 className="mt-2 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              الأسئلة الشائعة
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              هنا تجد إجابات واضحة على الأسئلة الأكثر تكرارًا
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5">
                  <HelpCircle className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">
                  الأسئلة الأكثر شيوعًا
                </h2>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-border bg-muted p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-semibold text-foreground">
                        {item.q}
                      </span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
