import Image from "next/image";
import { Inter } from "next/font/google";
import EmergeTextEffect from "@/EmergeTextEffect/EmergeTextEffect";
import Logo from "@/EmergeTextEffect/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <EmergeTextEffect>Test</EmergeTextEffect> */}

      <Logo />
    </main>
  );
}
