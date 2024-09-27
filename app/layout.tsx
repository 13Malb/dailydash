import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/loading";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Dash",
  description: "Daily Dash is an online meat and vegetable store, providing affordable and healthy options to low-income households in Johannesburg South. We're committed to ensuring everyone has access to quality, fresh produce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
      
        {children}
        <Toaster className="bg-black"/>
         
       
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  );
}
