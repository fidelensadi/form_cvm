import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}