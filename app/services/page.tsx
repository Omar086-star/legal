import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Users,
  FileText,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "خدمات قانونية مجانية للعائدين",
  description:
    "نقدم خدمات قانونية مجانية مخصصة للعائدين تشمل تسجيل الولادات والوفيات والزواج، مع المتابعة الكاملة للمعاملات لدى الجهات المختصة.",
}

const services = [
  {
    icon: Users,
    title: "تسجيل الأحوال المدنية للعائدين",
    description:
      "نقدم خدمات قانونية مجانية مخصصة للعائدين لمساعدتهم في استعادة وتثبيت أوضاعهم القانونية بعد العودة، خاصة فيما يتعلق بتسجيل الوقائع المدنية الرسمية.",
    audience: "للعائدين فقط — الخدمة مجانية",
    features: [
      "تسجيل الولادات",
      "تسجيل الوفيات",
      "تسجيل الزواج",
      "المتابعة القانونية لدى الجهات المختصة",
    ],
  },
  {
    icon: FileText,
    title: "متابعة المعاملات القانونية",
    description:
      "نقوم بمتابعة جميع الإجراءات القانونية اللازمة لضمان تسجيل الوقائع المدنية بشكل صحيح وفق القوانين المعمول بها، مع تقديم الدعم والإرشاد خلال جميع المراحل.",
    audience: "للعائدين فقط — الخدمة مجانية",
    features: [
      "تجهيز الأوراق المطلوبة",
      "تقديم الطلبات للجهات الرسمية",
      "متابعة المعاملة حتى الإنجاز",
      "تقديم الاستشارات القانونية المرتبطة",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              خدمات العائدين
            </p>
            <h1 className="mt-2 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              خدمات قانونية مجانية للعائدين
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              نقدم خدمات قانونية مجانية مخصصة للعائدين تشمل تسجيل الولادات
              والوفيات والزواج، مع المتابعة الكاملة للمعاملات لدى الجهات المختصة
              لضمان تثبيت الحقوق القانونية بشكل صحيح.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-start md:p-12 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Service Info */}
                  <div className="flex-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5">
                      <service.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-card-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-secondary">
                      {service.audience}
                    </p>
                    <a
                      href="https://calendar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                    >
                      احجز موعد
                      <ArrowLeft className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="rounded-xl bg-muted p-6">
                      <h3 className="mb-4 text-sm font-semibold text-foreground">
                        ما يشمله هذا الدعم
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              هل أنت من العائدين وتحتاج مساعدة قانونية؟
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              تواصل معنا للحصول على المساعدة القانونية المجانية المتعلقة بتسجيل
              الوقائع المدنية.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                احجز استشارة مجانية
                <ArrowLeft className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
