import Image from "next/image";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";
import Homepage from "./components/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
    </main>
  );
}
