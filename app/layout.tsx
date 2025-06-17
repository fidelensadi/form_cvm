import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';

// Chargement de la police Nunito via Next.js font system (optimisé)
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800'],
});

// Keep Inter as fallback
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bulletin de Pilotage - CVM',
  description: 'Système de gestion des bulletins de pilotage - Congolaise des Voies Maritimes',
  icons: {
    icon: 'https://cvm-sa.com/wp-content/uploads/2023/11/cropped-cvm-removebg-preview-1.png',
    shortcut: 'https://cvm-sa.com/wp-content/uploads/2023/11/cropped-cvm-removebg-preview-1.png',
    apple: 'https://cvm-sa.com/wp-content/uploads/2023/11/cropped-cvm-removebg-preview-1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={nunito.variable}>
      <head>
        {/* Alternative: Chargement de Nunito via CDN pour plus de variantes */}
        <link href="https://fonts.cdnfonts.com/css/nunito" rel="stylesheet" />
      </head>
      <body className={`${nunito.className} font-nunito`}>{children}</body>
    </html>
  );
}