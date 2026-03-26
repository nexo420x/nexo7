import type { Metadata } from 'next'
import { Inter, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const vt323 = VT323({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-vt323'
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nexo7.site"),

  title: {
    default: "nexo — systems, projects, execution",
    template: "%s | nexo",
  },

  description:
    "nexo builds real systems. projects, AI and execution. no noise. just results.",

  applicationName: "nexo",

  keywords: [
    "nexo",
    "nexo systems",
    "nexo projects",
    "developer portfolio",
    "AI projects",
    "next.js developer",
    "modern web apps",
    "software builder",
    "web systems",
  ],

  authors: [{ name: "nexo" }],

  openGraph: {
    title: "nexo — systems, execution",
    description: "no noise. just execution.",
    url: "https://nexo7.site",
    siteName: "nexo",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${vt323.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}