import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
