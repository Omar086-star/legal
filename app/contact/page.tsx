"use client"

import React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, ArrowLeft } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "+966 50 000 0000",
    href: "tel:+966500000000",
    dir: "ltr" as const,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@legal-services.com",
    href: "mailto:info@legal-services.com",
    dir: "ltr" as const,
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "الرياض، المملكة العربية السعودية",
    href: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
    dir: "rtl" as const,
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "الأحد - الخميس: 9 صباحًا - 5 مساءً",
    href: undefined,
    dir: "rtl" as const,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mailtoLink = `mailto:info@legal-services.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `الاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالبريد: ${formData.email}\n\n${formData.message}`
    )}`
    window.open(mailtoLink)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
              تواصل معنا
            </p>
            <h1 className="mt-2 text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              نحن هنا لمساعدتك
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
              لا تتردد في التواصل معنا عبر أي من القنوات التالية أو ملء نموذج
              التواصل
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <info.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-card-foreground">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-secondary"
                      dir={info.dir}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground" dir={info.dir}>
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Form + WhatsApp + Map */}
            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="text-2xl font-bold text-card-foreground">
                  أرسل لنا رسالة
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  املأ النموذج التالي وسنتواصل معك في أقرب وقت
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        الاسم الكامل
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        رقم الهاتف
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                        placeholder="05xxxxxxxx"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      الموضوع
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      <option value="استشارة قانونية">استشارة قانونية</option>
                      <option value="قضايا أحوال مدنية">قضايا أحوال مدنية</option>
                      <option value="قضايا أسرة">قضايا أسرة</option>
                      <option value="ملكيات وعقارات">ملكيات وعقارات</option>
                      <option value="صياغة عقود">صياغة عقود</option>
                      <option value="متابعة قانونية">متابعة قانونية</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-card-foreground"
                    >
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    إرسال الرسالة
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Map + WhatsApp */}
              <div className="flex flex-col gap-6">
                {/* WhatsApp CTA */}
                <div className="rounded-xl border border-border bg-primary p-8">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    تواصل سريع عبر واتساب
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">
                    للاستفسارات السريعة، تواصل معنا مباشرة عبر واتساب
                  </p>
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
                  >
                    افتح واتساب
                    <ArrowLeft className="h-4 w-4" />
                  </a>
                </div>

                {/* Google Maps Embed */}
                <div className="flex-1 overflow-hidden rounded-xl border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.0143812785!2d46.54263715!3d24.7253981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sar!2s!4v1700000000000!5m2!1sar!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 300 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع المكتب على الخريطة"
                  />
                </div>

                {/* Book Appointment */}
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <h3 className="text-lg font-bold text-card-foreground">
                    احجز موعدك
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    اختر الوقت المناسب لك عبر تقويم جوجل
                  </p>
                  <a
                    href="https://calendar.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    احجز موعد الآن
                    <ArrowLeft className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
