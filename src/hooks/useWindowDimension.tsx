import React, { useLayoutEffect } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const WindowDimensionContext = createContext({ width: 0, height: 0 });

type Props = { children: React.ReactNode };

export const WindowDimensionContextProvider = ({ children }: Props) => {
  const [dim, setDim] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateDim = () => {
      setDim({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDim();
    window.addEventListener("resize", updateDim);
    return () => window.removeEventListener("resize", updateDim);
  }, []);

  return (
    <WindowDimensionContext.Provider value={dim}>
      {children}
    </WindowDimensionContext.Provider>
  );
};

export const useWindowDimension = () => useContext(WindowDimensionContext);