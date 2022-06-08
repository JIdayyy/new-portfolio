import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import Layout from "@components/Layout";
import "../src/styles/typewritter.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    return (
        <ChakraProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </ChakraProvider>
    );
}

export default MyApp;
