import "./globals.css";
import { Montserrat } from "next/font/google";
import TopHeader from "@/components/TopHeader";
import MiddleHeader from "@/components/MiddleHeader";
import Navbar from "@/components/Navbar";
import TopFortter from "@/components/TopFortter";
import BottomFotter from "@/components/BottomFotter";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Le Reve | Leading Fasion And Lifestyle  Brand In Bangladesh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div>
          <TopHeader />
          <MiddleHeader />
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
