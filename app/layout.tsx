import React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
 

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "منصة الخدمات القانونية | استشارات وحلول قانونية احترافية",
  description: "نقدم خدمات قانونية شاملة تشمل الاستشارات القانونية، قضايا الأحوال المدنية، قضايا الأسرة، الملكيات والعقارات، صياغة العقود والمتابعة القانونية. احجز موعدك الآن.",
  icons: {
    icon: [
      { url: "/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/logo.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/logo.png",
  },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>{children}  <CookieConsent /> </body>
    </html>
  )
}
