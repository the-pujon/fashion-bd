import { Inter, Roboto_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import StoreProvider from "./StoreProvider";


const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-backgroundImage`}>
      <StoreProvider>
      <Navbar/>
        {children}
        <Footer/>
      </StoreProvider>
        </body>
    </html>
  );
}
