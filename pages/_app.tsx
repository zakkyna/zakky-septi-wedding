import '../styles/globals.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-activity/dist/library.css';
import moment from 'moment';
import 'moment/locale/id';
import isMobile from 'is-mobile';

moment.locale('id');
React.useLayoutEffect = React.useEffect;

function MyApp({ Component, pageProps }: AppProps) {

  const coupleName = 'Zakky & Septi';
  const imgUrl = 'https://www.zakkysepti.com/img/web-thumb.jpg';
  const isMobileDevice = isMobile();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>The Wedding - {coupleName}</title>

        {/* Open Graph */}
        <meta
          property="og:url"
          content={'https://zakkysepti.com'}
          key="ogurl"
        />
        <meta property="og:image" content={imgUrl} key="ogimage" />
        <meta
          property="og:site_name"
          content={'Undangan Pernikahan Zakky & Septi'}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={'This is Our Wedding'}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={'Kami mengundang Anda untuk menghadiri acara pernikahan kami.'}
          key="ogdesc"
        />
        <link
          rel="preload"
          href="/img/welcome-bg.jpg"
          as="image"
        />
        <link
          rel="preload"
          href={isMobileDevice ? "/video/videobackground_mobile.webm" : "/video/videobackground_web.webm"}
          as="video"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;