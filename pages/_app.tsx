import Head from 'next/head';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { pageVariants } from '../utils/variants';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <Head>
        <title>Christopher Ang Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
