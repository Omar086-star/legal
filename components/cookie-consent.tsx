"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5">
          <Cookie className="h-6 w-6 text-secondary" />
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground">
            نستخدم ملفات تعريف الارتباط (Cookies)
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك في الموقع وتحليل الاستخدام.
            باستخدامك للموقع فإنك توافق على استخدام الكوكيز وفق{" "}
            <Link
              href="/cookies"
              className="font-medium text-secondary hover:underline"
            >
              سياسة الكوكيز
            </Link>
            .
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={acceptCookies}
              className="rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/80"
            >
              موافق
            </button>

            <button
              onClick={declineCookies}
              className="rounded-lg border border-border px-5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
            >
              رفض
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
