import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "Ark Team gives your business the AI expertise of a full team. ARKai starts where our experts left off, so you get the expertise without the cost of building it.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ark-team.com"),
  title: {
    default: "Ark Team",
    template: "%s | Ark Team",
  },
  description,
  openGraph: {
    title: "Ark Team",
    description,
    url: "https://ark-team.com",
    siteName: "Ark Team",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${plexMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg font-serif text-text antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
