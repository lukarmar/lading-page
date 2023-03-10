/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

import "@fontsource/lexend/latin.css";

import defaultSEOConfig from "../../next-seo.config";
// import Layout from "components/layout";
import MainProvider from "hooks";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";

const Layout = dynamic(() => import("components/layout"));

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      TagManager.initialize({ gtmId: "GTM-MJSWNP4" });
    }
  }, []);

  return (
    <MainProvider>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={customTheme}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CacheProvider>
    </MainProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
