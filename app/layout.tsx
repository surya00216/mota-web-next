import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "./providers/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mota Admin",
  description: "Mota Admin Panel"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthProvider> */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              {children} 
            <Toaster/> 
          </ThemeProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}

