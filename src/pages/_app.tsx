import type { AppType } from "next/app";
import '~/styles/globals.css';

import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { api } from '~/utils/api';

import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Wiff Or Be Wiffed</title>
        <meta name="og:title" content="Wiff Or Be Wiffed" />
        <meta name="og:description" content="Wiff Or Be Wiffed" />
        <meta
          property="og:image"
          content="assets/ball-art/white-ball-transparent-bg.png"
        />
        <meta property="og:image:alt" content="Wiff Or Be Wiffed Logo" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="376" />
        <meta property="og:image:height" content="376" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Analytics />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
