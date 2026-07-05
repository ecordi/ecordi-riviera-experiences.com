import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Riviera Experiences — Authentic tours & private experiences in Riviera Nayarit, Puerto Vallarta & Riviera Maya",
  description:
    "Discover the Riviera beyond the ordinary. Boutique tours, water adventures, private yachts and personalized itineraries in Riviera Nayarit, Puerto Vallarta and Riviera Maya — with warm local support in English and Spanish.",
  openGraph: {
    type: "website",
    title: "Riviera Experiences — Authentic Mexican Pacific & Caribbean adventures",
    description:
      "Personalized tours, water adventures and private experiences in Riviera Nayarit, Puerto Vallarta and Riviera Maya.",
  },
  twitter: {
    card: "summary_large_image",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative">{children}</body>
    </html>
  );
}
