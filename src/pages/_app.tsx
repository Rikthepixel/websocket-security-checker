import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import type { AppProps } from "next/app";
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>WS Checker</title>
            <meta property="og:title" content="WS Checker" key="title" />
        </Head>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    </>
);

export default App;