import type { Metadata } from 'next';
import { Playfair_Display, Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NU Utsav — Northeastern's South Asian Cultural Organization",
  description:
    "Utsav is Northeastern University's undergraduate South Asian cultural organization, celebrating the cultures of India, Pakistan, Bangladesh, Bhutan, Sri Lanka, and Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${barlow.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
