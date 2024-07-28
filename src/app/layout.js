import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my professional portfolio. Here you can find my projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <div className="px-5 md:px-10 mx-auto">
        {children}
        </div>
      <Footer/>
      </body>
    </html>
  );
}
