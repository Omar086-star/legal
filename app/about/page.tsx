import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "من نحن | الفريق القانوني",
  description:
    "تعرف على فريقنا من المحامين المختصين وخبراتهم القانونية في تقديم الخدمات والاستشارات.",
}

const values = [
  {
    icon: Target,
    title: "رسالتنا",
    description:
      "تقديم خدمات قانونية مهنية وإنسانية تساهم في حماية الحقوق وتسهيل الوصول إلى العدالة، خاصة للفئات الأكثر حاجة للدعم القانوني.",
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    description:
      "أن نكون جهة قانونية موثوقة تقدم الدعم والاستشارة بكفاءة عالية وتحقق الأثر الإيجابي في المجتمع.",
  },
  {
    icon: Heart,
    title: "قيمنا",
    description:
      "النزاهة، السرية، الالتزام، والعمل بروح المسؤولية المهنية والإنسانية في جميع القضايا.",
  },
]

const team = [
  {
    name: "الأستاذة آيات شريف البلال",
    role: "محامية",
    image: "/aya.png",
    bio: "محامية فرع دير الزور، خريجة كلية الحقوق عام 2012، مواليد 1991، تتمتع بخبرة قانونية في متابعة القضايا والإجراءات القانونية المختلفة، وجاهزة للعمل وتقديم الدعم القانوني.",
  },
  {
    name: "الأستاذة رحمة الصالح",
    role: "محامية",
    image: "/rah.png",
    bio: "    خريجة كلية الحقوق – جامعة الفرات عام 2013 ومحامية مزاولة بخبرة خمس سنوات في المجال القانوني.    أؤمن بأهمية العمل التطوعي وخدمة المجتمع، وأسعى لتسخير خبرتي القانونية في دعم الآخرين، مع التحلي بروح التعاون والمسؤولية والالتزام بالقيم الإنسانية والمهنية.",
  },
  {
    name: "الأستاذ علي الدرفيل",
    role: "محامي أستاذ",
    image: "/ali.png",
    bio: "محامي أستاذ منذ عام 2008، حاصل على درجة الماجستير في القانون من جامعة عين شمس في مصر، مواليد 1979 – الميادين، يمتلك خبرة واسعة في المجال القانوني ومتابعة القضايا.",
  },
  {
    name: "الأستاذة آلاء عبد الله",
    role: "محامية مزاولة",
    image: "/ala.png",
    bio: "محامية مزاولة، خريجة كلية الحقوق – جامعة دمشق عام 2019، تمتلك خبرة عملية تمتد لخمس سنوات، تشمل سنتين تدريب وثلاث سنوات مزاولة المهنة، مع مهارات تواصل وتنظيم عالية والتزام كامل بأخلاقيات المهنة.",
  },
  {
    name: "الأستاذ فراس محمود",
    role: "محامي",
    image: "/fir.png",
    bio: "محامٍ مختص في متابعة القضايا والإجراءات القانونية، يمتلك خبرة في العمل القانوني وتقديم الاستشارات.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              من نحن
            </p>
            <h1 className="mt-2 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              فريقنا القانوني
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              فريق من المحامين المختصين نسعى لتقديم الدعم القانوني بكفاءة
              ومهنية عالية
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-12 md:flex-row md:items-center">
              <div className="flex-1">
                <h2 className="text-balance text-3xl font-bold text-foreground">
                  من نحن
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  نحن فريق من المحامين المختصين نقدم خدمات واستشارات قانونية
                  تهدف إلى دعم الأفراد ومساعدتهم في إنجاز معاملاتهم القانونية
                  وفق الأصول والقوانين المعمول بها.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  نؤمن بأهمية العدالة وسهولة الوصول إلى الخدمات القانونية،
                  ونعمل بروح الفريق الواحد لتحقيق أفضل النتائج المهنية
                  والإنسانية.
                </p>
              </div>
              <div className="relative aspect-[4/3] flex-1 overflow-hidden rounded-2xl">
                <Image
                  src="/equip.png"
                  alt="الفريق القانوني"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                فريق العمل
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold text-foreground md:text-4xl">
                فريق المحامين المختصين
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                نخبة من المحامين ذوي الخبرة والكفاءة المهنية
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-card-foreground">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-secondary">
                    {member.role}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
              هل تحتاج استشارة قانونية؟
            </h2>
            <p className="mt-3 text-primary-foreground/70">
              تواصل معنا وسنقدم لك الدعم القانوني المناسب
            </p>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              احجز موعد استشارة
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
