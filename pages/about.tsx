import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform, MotionValue, motion } from 'framer-motion';
import AboutSvg from '../components/AboutSvg';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const About = () => {
  const { scrollYProgress } = useScroll();
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [-1000, 500]);
  const yDog = useParallax(scrollYProgress, 300);
  const yLabel = useParallax(scrollYProgress, 400);
  const yLabel2 = useParallax(scrollYProgress, 200);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 1500]);

  return (
    <div className="isolate relative flex flex-col w-screen pointer-events-none">
      <section className="flex h-screen w-full">
        <motion.div
          initial={{ perspective: 1000 }}
          className="flex flex-col justify-center items-center w-1/2"
        >
          <motion.p
            initial={{ opacity: 0, rotateX: '90deg', originY: 1 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-[90px] font-cormorant"
            style={{ x: x1, y: y1 }}
          >
            Front-End
          </motion.p>
          <motion.p
            initial={{ opacity: 0, rotateX: '90deg', originY: 1 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-[90px] font-cormorant ml-44 -mt-12"
            style={{ x: x2, y: y2 }}
          >
            Developer
          </motion.p>
        </motion.div>
        <div className="relative w-1/2">
          <AboutSvg />
        </div>
      </section>
      <section className="flex h-[180vh] w-full">
        <motion.div
          className="flex flex-col justify-center items-center w-1/2 pt-[5%]"
          style={{ y: yDog }}
        >
          <Image src="/images/dog.jpg" width={600} height={400} />
        </motion.div>
        <div className="relative flex flex-col gap-8 w-1/2 items-center justify-center text-[18px] font-cormorant font-semibold uppercase">
          <p className="w-2/3">
            From a very young age, I&apos;ve come to realize love and passion for technology. There
            puzzles, design and how they work all intrigued and inspired me to get into the
            industry.
          </p>
          <p className="w-2/3">
            Now, with my unrivaled passion for coding and design, I aspire to be one that innovates
            and connect people through my design. Inspire them like how I was inspired.
          </p>
          <motion.p
            style={{ y: yLabel }}
            className="absolute right-[5%] mt-[45%] 4k:mt-[35%] text-black/10 text-[100px] font-extrabold"
          >
            About Me
          </motion.p>
        </div>
      </section>
      <section className="flex h-[120vh] w-full overflow-hidden">
        <div className="relative flex flex-col gap-8 w-1/2 items-center justify-center pt-[10%] text-[18px] font-cormorant font-semibold uppercase">
          <p className="w-2/3">
            chasing your goals and working hard for it is important, getting hobbies and taking a
            break once in a while isnt a bad thing either.
          </p>
          <p className="w-2/3">
            When I&apos;m free, I mostly spend my time helping my mom with errands, play video
            games. and when i get the chance, i go swimming or hang out with friends.
          </p>
          <p className="w-2/3">
            all of these help to calm me down, relieve a bit of that stress, and focus on what to
            work on next. taking breaks isn&apos;t a bad thing when it doesn&apos;t pull you away
            from what is important to you.
          </p>
          <motion.p
            style={{ y: yLabel2 }}
            className="absolute right-[5%] text-black/10 text-[100px] font-extrabold"
          >
            My Hobbies
          </motion.p>
        </div>
        <div className="relative w-1/2">
          <motion.div className="absolute top-0 left-0" style={{ y: yImage1 }}>
            <Image src="/images/helping.jpg" width={300} height={400} />
          </motion.div>
          <motion.div
            className="absolute z-10 top-0 left-0 mt-[5%] ml-[25%]"
            style={{ y: yImage2 }}
          >
            <Image src="/images/game.jpg" width={300} height={400} />
          </motion.div>
          <motion.div className="absolute top-0 left-0 mt-[20%] ml-[50%]" style={{ y: yImage3 }}>
            <Image src="/images/swimming.jpg" width={300} height={400} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
