import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10  rounded-lg ">
                <Image
                  src="/logol.png"
                  alt="شعار المستشار القانوني"
                  fill
                  className="object-contain "
                  priority
                />
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                المستشار القانوني
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              نقدم خدمات قانونية متكاملة بأعلى معايير الجودة والاحترافية. نسعى
              لتحقيق العدالة وحماية حقوق عملائنا.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-primary-foreground">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-primary-foreground">
              السياسات والمعلومات
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  href="/intellectual-property"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  الملكية الفكرية
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  سياسة الكوكيز
                </Link>
              </li>
              <li>
                <Link
                  href="/data-collection"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  سياسة جمع البيانات
                </Link>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  مدونة السلوك
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-primary-foreground">
              تواصل معنا
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:+963985230608"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                  dir="ltr"
                >
                  +963985230608
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:info@nakhla-found.com"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  info@nakhla-found.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  ديرالزور الجمهورية العربية السورية
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} المستشار القانوني
          </p>
        </div>
      </div>
    </footer>
  )
}
