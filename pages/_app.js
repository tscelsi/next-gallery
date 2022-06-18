import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/utils/createEmotionCache';
import NavBar from '../src/components/NavBar';
import MainContainer from '../src/components/MainContainer';
import Theme from "../src/components/Theme";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Theme>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </CacheProvider>
    </Theme>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
