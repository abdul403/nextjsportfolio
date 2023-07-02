import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@component/components/navbar/Navbar";
import Footer from "@component/components/footer/Footer";
import { ThemeProvider } from "@component/context/ThemeContext";
import AuthProvider from "@component/components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
