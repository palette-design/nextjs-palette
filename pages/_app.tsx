import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { ConfigProvider, useFoucHandler } from "palette-design";
import { useEffect, useState } from "react";

const unstyled = ["/unstyled", "/antd"];

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import defaultTheme from "@/theme";
import theme2 from "../theme2";
import theme3 from "../theme3";

import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import { useAppThemeStore } from "@/store/apptheme";
export default function App({ Component, pageProps }: AppProps) {
  const [showStyle, setShowStyle] = useState(true);
  const pathname = usePathname();
  const selectedTheme = useAppThemeStore((state) => state.selectedTheme);

  useEffect(() => {
    if (unstyled.includes(pathname)) {
      setShowStyle(false);
    } else {
      setShowStyle(true);
    }
  }, [pathname]);

  useFoucHandler("doc-fouc");

  return (
    <ConfigProvider theme={selectedTheme}>
      <ThemeProvider theme={selectedTheme}>
        {showStyle && <GlobalStyle />}
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  );
}
