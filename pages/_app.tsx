import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { pageVariants } from '../utils/variants';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="relative">
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
