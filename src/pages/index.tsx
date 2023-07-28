import Link from "next/link"
import Logo from "@/EmergeTextEffect/Logo";
import { useMousePosition } from "@/hooks/useMousePosition";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pos = useMousePosition();
  
  return (
      <main className="min-h-screen flex flex-col justify-center px-4">
        <section className="flex flex-col items-center my-16 gap-8">
          <p className={`uppercase text-center ${inter.className}`}>November 11 2023</p>
          <Logo />
          <Link className={`uppercase text-center ${inter.className}`} href="https://goo.gl/maps/yx7ytZ2okDUuF33q7" target="_blank">The Centre for<br/>Performing Arts</Link>
        </section>
      </main>
  );
}
