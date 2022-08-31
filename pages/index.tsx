import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Christopher Ang Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex gap-4 items-center justify-center h-full w-full">
        <motion.p whileHover={{ scale: 1.1 }} className="text-2xl">
          My Portfolio with{' '}
          <span className="bg-gray-100 p-2 rounded-lg text-blue-500 font-semibold">
            Next.js --ts
          </span>{' '}
          , Tailwind, Sanity, Zustand and Framer -
          <motion.span
            initial={{ opacity: 0, x: '100px' }}
            animate={{
              opacity: 1,
              x: 10,
              y: 5,
              rotate: 50,
              originX: 0,
            }}
            transition={{
              duration: 0.5,
              rotate: { delay: 2, duration: 0.5 },
            }}
            className="inline-block"
          >
            motion.
          </motion.span>
        </motion.p>
      </main>
    </div>
  );
};

export default Home;
