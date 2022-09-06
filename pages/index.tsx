import { motion } from 'framer-motion';
import HeroSvg from '../components/HeroSvg';

const Home = () => {
  const text1 = 'Hey there,';
  const text2 = "I'm Christopher Ang";
  const letters1 = Array.from(text1);
  const letters2 = Array.from(text2);

  const pContainer = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.3 },
    }),
  };

  const pChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const extraText = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 2, duration: 0.5 },
    },
  };

  return (
    <div className="isolate relative h-screen w-screen overflow-hidden pointer-events-none">
      <motion.div className="flex flex-col gap-4 lg:gap-0 mt-36 md:mt-48 lg:m-0 lg:justify-center items-center md:items-start md:pl-[100px] xl:pl-[180px] 4k:px-[20%] h-full w-full">
        <motion.p
          variants={pContainer}
          initial="hidden"
          animate="visible"
          className="text-[35px] md:text-[45px] 2xl:text-[65px] font-dancing"
        >
          {letters1.map((letter, index) => (
            <motion.span variants={pChild} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={pContainer}
          initial="hidden"
          animate="visible"
          className="text-[30px] md:text-[45px] 2xl:text-[80px] font-semibold font-cantataOne"
        >
          {letters2.map((letter, index) => (
            <motion.span variants={pChild} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[45px] lg:gap-[67px] items-center md:items-start text-[25px] md:text-[30px] 2xl:text-[50px]">
          <motion.p
            initial={{ opacity: 0, y: '100px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-cantataOne"
          >
            Innovating
          </motion.p>
          <motion.p
            variants={extraText}
            initial="hidden"
            animate="visible"
            className="font-cormorant"
          >
            the web &
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: '100px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-cantataOne"
          >
            Connecting
          </motion.p>
        </div>
        <motion.p
          variants={extraText}
          initial="hidden"
          animate="visible"
          className="text-[25px] md:text-[30px] 2xl:text-[50px] font-cormorant"
        >
          others through design.
        </motion.p>
        <motion.p
          variants={extraText}
          initial="hidden"
          animate="visible"
          className="absolute flex items-center justify-end bottom-0 right-0 md:left-0 h-36 w-[260px] md:w-full px-[5%] 4k:px-[15%] pb-4 text-[13px] md:text-[14px] 2xl:text-[16px] text-gray-700 font-merienda"
        >
          &quot;Doing what you love is freedom. Loving what you do is happiness.&quot;
        </motion.p>
        <HeroSvg />
      </motion.div>
    </div>
  );
};

export default Home;
