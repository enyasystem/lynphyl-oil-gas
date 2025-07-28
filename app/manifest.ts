import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lynphyl Oil & Gas Limited - Powering Nigeria",
    short_name: "Lynphyl O&G",
    description:
      "Indigenous Nigerian oil and gas company specializing in petroleum marketing, logistics, and technical services across all 36 states.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D2C54",
    theme_color: "#0D2C54",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-NG",
    categories: ["business", "energy", "logistics"],
    icons: [
      {
        src: "/images/lynphyl-logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any maskable",
      },
      {
        src: "/images/lynphyl-logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Get Fuel Quote",
        short_name: "Quote",
        description: "Calculate fuel costs instantly",
        url: "/#calculator",
        icons: [{ src: "/images/lynphyl-logo.jpg", sizes: "96x96" }],
      },
      {
        name: "Emergency Hotline",
        short_name: "Emergency",
        description: "24/7 emergency fuel supply",
        url: "tel:+2348012345678",
        icons: [{ src: "/images/lynphyl-logo.jpg", sizes: "96x96" }],
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        description: "Get in touch with our team",
        url: "/#contact",
        icons: [{ src: "/images/lynphyl-logo.jpg", sizes: "96x96" }],
      },
    ],
    screenshots: [
      {
        src: "/images/lynphyl-logo.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
        label: "Lynphyl Oil & Gas - Homepage",
      },
    ],
  }
}
