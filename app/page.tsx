import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Scale,
  Users,
  FileText,
  Building2,
  Gavel,
  ShieldCheck,
  ArrowLeft,
  Phone,
  Star,
} from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "الاستشارات القانونية",
    description:
      "استشارات قانونية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة وحماية حقوقك.",
  },
  {
    icon: Users,
    title: "قضايا الأسرة",
    description:
      "نتولى جميع قضايا الأسرة بما في ذلك الطلاق، الحضانة، والنفقة بسرية تامة.",
  },
  {
    icon: FileText,
    title: "صياغة العقود",
    description:
      "صياغة ومراجعة العقود التجارية والمدنية بدقة عالية لحماية مصالحك.",
  },
  {
    icon: Building2,
    title: "الملكيات والعقارات",
    description:
      "خدمات قانونية شاملة في مجال العقارات والملكيات ونقل الملكية.",
  },
  {
    icon: Gavel,
    title: "قضايا الأحوال المدنية",
    description:
      "تمثيل قانوني متميز في جميع قضايا الأحوال المدنية والشخصية.",
  },
  {
    icon: ShieldCheck,
    title: "المتابعة القانونية",
    description:
      "متابعة مستمرة لقضاياك القانونية مع تحديثات دورية على سير الإجراءات.",
  },
]

const testimonials = [
  {
    name: "أحمد العلي",
    role: "صاحب شركة",
    content:
      "تعاملت مع المكتب في عدة قضايا تجارية وكانت النتائج ممتازة. فريق محترف ومتعاون.",
    rating: 5,
  },
  {
    name: "سارة المحمد",
    role: "موظفة",
    content:
      "ساعدوني في حل قضية أسرية معقدة بكل احترافية وسرية. أنصح بالتعامل معهم.",
    rating: 5,
  },
  {
    name: "خالد الراشد",
    role: "مستثمر عقاري",
    content:
      "خبرة واسعة في مجال العقارات. ساعدوني في إتمام عدة صفقات عقارية بنجاح.",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-legal.jpg"
              alt="مكتب قانوني احترافي"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                منصة الخدمات القانونية
              </p>
              <h1 className="text-balance text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                حلول قانونية احترافية تحمي حقوقك
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                فريق من المحامين المتخصصين يقدم لك أفضل الحلول القانونية
                بأعلى معايير الجودة والسرية التامة.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                >
                  احجز موعدك الآن
                  <ArrowLeft className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  تعرف على خدماتنا
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-background">
            <h1 className="text-center py-10 text-xl font-bold  text-primary-foreground md:text-1xl lg:text-2xl">
                أرقام نسعى لإثباتها لكم        
              </h1>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
            {[
              { value: "+10", label: "سنة خبرة" },
              { value: "+100", label: "قضية ناجحة" },
              { value: "+100", label: "عميل راضٍ" },
              { value: "7/7", label: "دعم متواصل" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-secondary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                ما نقدمه
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
                خدماتنا القانونية
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع
                احتياجاتك
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-secondary/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
              >
                عرض جميع الخدمات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              هل تحتاج استشارة قانونية؟
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              لا تتردد في التواصل معنا. فريقنا جاهز لمساعدتك في أي وقت.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                احجز موعدك الآن
                <ArrowLeft className="h-4 w-4" />
              </a>
              <a
                href="tel:+963985230608"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" />
                اتصل بنا
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                آراء العملاء
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
                ماذا يقول عملاؤنا
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={`star-${testimonial.name}-${i}`}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {`"${testimonial.content}"`}
                  </p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="border-t border-border bg-muted py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                تواصل معنا عبر الواتساب
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                نحن متاحون للإجابة على جميع استفساراتك
              </p>
            </div>
            <a
              href="https://wa.me/963985230608"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
