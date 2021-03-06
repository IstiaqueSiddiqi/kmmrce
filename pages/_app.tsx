import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import appTheme from '../styles/theme';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>KMMRCE</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/footer.svg" />
      </Head>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Header />
        <main><Component {...pageProps} /></main>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp
