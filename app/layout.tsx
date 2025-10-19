import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "ITLegend - Master IT Skills with Expert-Led Online Courses",
  description:
    "Transform your career with ITLegend's comprehensive online courses. Learn programming, cybersecurity, cloud computing, and more from industry experts. Start your IT journey today!",
  keywords: [
    "online courses",
    "IT training",
    "programming courses",
    "cybersecurity training",
    "cloud computing",
    "web development",
    "data science",
    "machine learning",
    "IT certification",
    "tech skills",
    "coding bootcamp",
    "IT education",
    "professional development",
    "ITLegend",
  ],
  authors: [
    { name: "ITLegend Team", url: "https://it-legend-two.vercel.app/" },
  ],
  creator: "ITLegend",
  publisher: "ITLegend",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://it-legend-two.vercel.app/",
    title: "ITLegend - Master IT Skills with Expert-Led Online Courses",
    description:
      "Transform your career with ITLegend's comprehensive online courses. Learn programming, cybersecurity, cloud computing, and more from industry experts.",
    siteName: "ITLegend",
    images: [
      {
        url: "https://it-legend-two.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "ITLegend - Online IT Courses Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITLegend - Master IT Skills with Expert-Led Online Courses",
    description:
      "Transform your career with ITLegend's comprehensive online courses. Learn programming, cybersecurity, cloud computing, and more from industry experts.",
    images: ["https://it-legend-two.vercel.app/logo.png"],
    creator: "@ITLegend",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
  classification: "Online Learning Platform",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    // single string or array accepted
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32" }, // optional PNG fallback
      { url: "/favicon.ico" }, // older-browser fallback
    ],
    shortcut: "/favicon.ico", // rel="shortcut icon"
    apple: "/apple-touch-icon.png", // apple-touch-icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
