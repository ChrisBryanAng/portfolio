import { useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { pageVariants } from '../utils/variants';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <Head>
        <title>Christopher Ang Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <AnimatePresence mode="wait">
        <motion.main
          key={router.route}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
