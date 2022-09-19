import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform, MotionValue, motion } from 'framer-motion';
import AboutSvg from '../components/AboutSvg';
import { aboutHeroChildVariant, aboutHeroVariant, aboutHobbiesVariants } from '../utils/variants';
import HobbyMotionImage from '../components/HobbyMotionImage';

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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 1200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 1200]);

  const hobbyImageProps = {
    className:
      'absolute top-0 left-0 w-[180px] h-[250px] lg:w-[200px] lg:h-[300px] 2xl:w-[300px] 2xl:h-[400px]',
  };

  return (
    <div className="isolate relative flex flex-col w-screen">
      <section className="relative flex h-screen w-full">
        <motion.div
          variants={aboutHeroVariant}
          initial="initial"
          animate="animate"
          className="flex flex-col mt-[30%] md:mt-0 md:justify-center items-center w-full md:w-1/2 text-[60px] xl:text-[90px]"
        >
          <motion.p
            variants={aboutHeroChildVariant}
            className="font-cormorant w-max"
            style={{ x: x1, y: y1 }}
          >
            Front-End
          </motion.p>
          <motion.p
            variants={aboutHeroChildVariant}
            className="text-[50px] xl:text-[90px] font-cormorant ml-0 md:ml-44 -mt-6 md:-mt-10"
            style={{ x: x2, y: y2 }}
          >
            Developer
          </motion.p>
        </motion.div>
        <AboutSvg />
      </section>
      <section className="relative flex justify-center items-center h-[180vh] w-full">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="hidden md:flex relative w-[400px] lg:w-[450px] h-[260px] lg:h-[300px] pt-[5%]"
          style={{ y: yDog }}
        >
          <Image src="/images/dog.jpg" layout="fill" priority />
        </motion.div>
        <div className="relative flex flex-col gap-8 w-full md:w-1/2 px-8 md:px-0 items-center justify-center text-[18px] font-cormorant font-semibold uppercase">
          <p className="w-full md:w-2/3">
            From a very young age, I&apos;ve come to realize love and passion for technology. There
            puzzles, design and how they work all intrigued and inspired me to get into the
            industry.
          </p>
          <p className="w-full md:w-2/3">
            Now, with my unrivaled passion for coding and design, I aspire to be one that innovates
            and connect people through my design. Inspire them like how I was inspired.
          </p>
          <motion.p
            style={{ y: yLabel }}
            className="absolute text-end right-[5%] mt-[45%] 4k:mt-[35%] text-black/10 text-[100px] font-extrabold"
          >
            About Me
          </motion.p>
        </div>
      </section>
      <section className="flex h-[120vh] w-full overflow-hidden">
        <div className="relative flex flex-col gap-8 w-full md:w-1/2 px-8 md:px-0 items-center justify-center pt-[10%] text-[18px] font-cormorant font-semibold uppercase">
          <p className="w-full md:w-2/3">
            chasing your goals and working hard for it is important, getting hobbies and taking a
            break once in a while isnt a bad thing either.
          </p>
          <p className="w-full md:w-2/3">
            When I&apos;m free, I mostly spend my time helping my mom with errands, play video
            games. and when i get the chance, i go swimming or hang out with friends.
          </p>
          <p className="w-full md:w-2/3">
            all of these help to calm me down, relieve a bit of that stress, and focus on what to
            work on next. taking breaks isn&apos;t a bad thing when it doesn&apos;t pull you away
            from what is important to you.
          </p>
          <motion.p
            style={{ y: yLabel2 }}
            className="absolute text-end right-[5%] text-black/10 text-[100px] font-extrabold"
          >
            My Hobbies
          </motion.p>
        </div>
        <motion.div
          variants={aboutHobbiesVariants}
          initial="initial"
          animate="animate"
          whileInView="inView"
          className="hidden md:flex relative w-1/2"
        >
          <HobbyMotionImage
            className={hobbyImageProps.className}
            style={yImage1}
            imgSrc="/images/helping.jpg"
          />
          <HobbyMotionImage
            className={`${hobbyImageProps.className} z-10 2xl:mt-[5%] ml-[25%]`}
            style={yImage2}
            imgSrc="/images/game.jpg"
          />
          <HobbyMotionImage
            className={`${hobbyImageProps.className} 2xl:mt-[20%] ml-[50%]`}
            style={yImage3}
            imgSrc="/images/swimming.jpg"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
