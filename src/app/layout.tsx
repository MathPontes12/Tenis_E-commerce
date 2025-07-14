import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import SaleProvider from "@/components/sale/contextSale/saleProvider";

const Bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Page de vendas de tenis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Bebas.variable} antialiased`}
      >
        <SaleProvider>
          {children}
        </SaleProvider>
      </body>
    </html>
  );
}
