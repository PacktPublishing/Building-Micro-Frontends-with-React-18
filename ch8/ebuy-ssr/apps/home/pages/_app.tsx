import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to e-buy</title>
      </Head>

      <main>
        <Header />
        <Container style={{ marginTop: "5rem" }}>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}

export default CustomApp;
