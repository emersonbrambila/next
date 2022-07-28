import React from "react";

import Head from "next/head";

import { ToastContainer } from "react-toastify";

import toastConfig from "../config/toastConfig";

import "react-toastify/dist/ReactToastify.min.css";

import "../assets/styles/global.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Teste Front-end</title>
        <meta name="description" content="Teste de avaliação front-end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer {...toastConfig} />
    </>
  );
}

export default App;
