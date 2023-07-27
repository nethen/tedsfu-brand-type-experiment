import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MousePosContextProvider} from "@/contexts/useMousePosition";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <MousePosContextProvider>
    <Component {...pageProps} />
  </MousePosContextProvider>);
}
