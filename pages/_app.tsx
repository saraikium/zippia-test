import * as React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;