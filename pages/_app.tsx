import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Navbar } from '@/components/Navbar/Navbar';
import rocket from '../public/rocket.png';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Griffin Michalak</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href={rocket.src} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
