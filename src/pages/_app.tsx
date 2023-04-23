import type { AppType } from "next/app";
import '~/styles/globals.css';

import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { api } from '~/utils/api';

import { ClerkProvider } from '@clerk/nextjs';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Wiff Or Be Wiffed</title>
        <meta name="description" content="Wiff Or Be Wiffed" />
        <meta
          property="image"
          content="assets/ball-art/white-ball-transparent-bg.png"
        />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
