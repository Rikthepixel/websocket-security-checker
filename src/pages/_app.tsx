import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@chakra-ui/theme';
import getPageName from "utils/getPageName";
import Head from 'next/head';

import type { AppProps } from "next/app";

const App = ({ Component, router, pageProps }: AppProps) => {

    const pageName = getPageName(router.pathname);
    const title = `${pageName ? `${pageName} · ` : ""}WS Sec-Check`;

    return <>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
        </Head>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </>;
};

export default App;