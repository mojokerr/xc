import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Chat2Site - أنشئ موقعك الإلكتروني في دقائق بالذكاء الاصطناعي",
  description: "منصة Chat2Site تستخدم الذكاء الاصطناعي لتحويل أفكارك إلى مواقع ويب احترافية من خلال محادثة بسيطة. بدون برمجة، بدون تعقيد. ابدأ مجاناً الآن!",
  generator: "Chat2Site",
  keywords: "إنشاء مواقع، ذكاء اصطناعي، بدون برمجة، مواقع احترافية، Chat2Site، AI website builder",
  authors: [{ name: "Chat2Site Team" }],
  creator: "Chat2Site",
  publisher: "Chat2Site",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://chat2site.com",
    title: "Chat2Site - أنشئ موقعك الإلكتروني في دقائق بالذكاء الاصطناعي",
    description: "منصة Chat2Site تستخدم الذكاء الاصطناعي لتحويل أفكارك إلى مواقع ويب احترافية من خلال محادثة بسيطة. بدون برمجة، بدون تعقيد.",
    siteName: "Chat2Site",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat2Site - أنشئ موقعك الإلكتروني في دقائق بالذكاء الاصطناعي",
    description: "منصة Chat2Site تستخدم الذكاء الاصطناعي لتحويل أفكارك إلى مواقع ويب احترافية من خلال محادثة بسيطة.",
    creator: "@chat2site",
  },
  alternates: {
    canonical: "https://chat2site.com",
    languages: {
      "ar-SA": "https://chat2site.com/ar",
      "en-US": "https://chat2site.com/en",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`font-sans ${inter.variable} ${cairo.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
