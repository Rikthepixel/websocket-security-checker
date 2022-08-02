import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import type { AppProps } from "next/app";
import Head from 'next/head';

const getPageName = (pathName: string): string => {
    const endpoint = pathName.split("/").pop() ?? "";
    const pageNameParts = endpoint.split("_");

    const firstWord = pageNameParts[0];
    pageNameParts[0] = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

    return pageNameParts.join(" ");
};

const App = ({ Component, router, pageProps }: AppProps) => {

    const pageName = getPageName(router.pathname);
    const title = `${pageName ? `${pageName} · ` : ""}WS Sec-Check`;

    return <>
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
        </Head>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    </>;
};

export default App;