import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LiveChatWidget } from "@/components/live-chat-widget"

export const metadata: Metadata = {
  title: "Lynphyl Oil & Gas Limited | Powering Nigeria",
  description:
    "Indigenous Nigerian oil and gas company specializing in petroleum marketing (AGO, PMS, DPK), logistics, depot lifting, and technical services nationwide.",
  keywords:
    "fuel supply Lagos, diesel Nigeria, petroleum marketing Nigeria, AGO supplier, PMS supplier, DPK supplier, depot lifting, oil and gas logistics Nigeria, Lynphyl Oil Gas",
  authors: [{ name: "Lynphyl Oil & Gas Limited" }],
  creator: "Lynphyl Oil & Gas Limited",
  publisher: "Lynphyl Oil & Gas Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lynphyloilandgas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lynphyl Oil & Gas Limited | Powering Nigeria",
    description:
      "Indigenous Nigerian oil and gas company specializing in petroleum marketing, logistics, and technical services across all 36 states.",
    url: "https://lynphyloilandgas.com",
    siteName: "Lynphyl Oil & Gas Limited",
    images: [
      {
        url: "/images/lynphyl-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lynphyl Oil & Gas Limited - Powering Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynphyl Oil & Gas Limited | Powering Nigeria",
    description:
      "Indigenous Nigerian oil and gas company specializing in petroleum marketing, logistics, and technical services across all 36 states.",
    images: ["/images/lynphyl-logo.jpg"],
    creator: "@lynphyloilgas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/lynphyl-logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/lynphyl-logo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/lynphyl-logo.jpg", sizes: "180x180", type: "image/jpeg" }],
    other: [
      {
        rel: "mask-icon",
        url: "/images/lynphyl-logo.jpg",
        color: "#0D2C54",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#0D2C54",
    "msapplication-TileImage": "/images/lynphyl-logo.jpg",
    "theme-color": "#0D2C54",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0D2C54" />
        <meta name="msapplication-navbutton-color" content="#0D2C54" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/images/lynphyl-logo.jpg" />
        <link rel="shortcut icon" href="/images/lynphyl-logo.jpg" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <LiveChatWidget />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
