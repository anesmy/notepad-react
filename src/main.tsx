import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Helmet>
          <meta charSet="UTF-8"></meta>
          <title>Notes</title>
          <meta name="keywords" content="Notepad, Notes, Note" />
          <meta name="author" content="Anastasiia Mudra"></meta>
        </Helmet>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
