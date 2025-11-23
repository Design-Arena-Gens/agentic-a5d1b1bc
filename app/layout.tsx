import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expomer 2ème Édition | Concept stratégique ECOGiC",
  description:
    "Concept global pour la deuxième édition d'Expomer, salon de l'innovation écologique orchestré par ECOGiC.",
  metadataBase: new URL("https://agentic-a5d1b1bc.vercel.app"),
  openGraph: {
    title: "Expomer 2ème Édition",
    description:
      "Stratégie, programmation et expériences immersives pour la nouvelle édition d'Expomer.",
    url: "https://agentic-a5d1b1bc.vercel.app",
    siteName: "Expomer 2ème Édition",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
