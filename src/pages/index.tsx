import Image from "next/image";
import { Inter } from "next/font/google";
import EmergeTextEffect from "@/EmergeTextEffect/EmergeTextEffect";
import Logo from "@/EmergeTextEffect/Logo";
import { useMousePosition } from "@/contexts/useMousePosition";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pos = useMousePosition();
  
  return (
      <main>
        {/* <EmergeTextEffect>Test</EmergeTextEffect> */}
        <Logo />
        <p>x: {pos.x}, y: {pos.y}</p>
      </main>
  );
}
