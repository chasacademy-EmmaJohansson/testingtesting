import Image from "next/image";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";
import Homepage from "./components/homepage";
import About from "./about";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Homepage />
    </main>
  );
}
