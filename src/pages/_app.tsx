import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MousePosContextProvider} from "@/hooks/useMousePosition";
import { WindowDimensionContextProvider } from '@/hooks/useWindowDimension';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <WindowDimensionContextProvider>
      <MousePosContextProvider>
        <Component {...pageProps} />
      </MousePosContextProvider>
    </WindowDimensionContextProvider>
  );
}
