import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sia Luxury Properties — Outreach Engine',
  description: 'Sia Luxury Properties WhatsApp Outreach Platform',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
