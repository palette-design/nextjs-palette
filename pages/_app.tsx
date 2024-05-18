import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { ConfigProvider, useFoucHandler } from "palette-design";
import { useEffect, useState } from "react";

const unstyled = ["/unstyled", "/antd"];

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import defaultTheme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [showStyle, setShowStyle] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (unstyled.includes(pathname)) {
      setShowStyle(false);
    } else {
      setShowStyle(true);
    }
  }, [pathname]);

  useFoucHandler("doc-fouc");

  return (
    <ConfigProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        {showStyle && <GlobalStyle />}
        <Component {...pageProps} />;
      </ThemeProvider>
    </ConfigProvider>
  );
}
