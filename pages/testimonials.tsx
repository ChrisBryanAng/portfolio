import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { client, urlFor } from '../utils/client';
import { ITestimonial } from '../types';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import {
  testCardContainerVariant,
  testCardVariant,
  testContainerVariant,
  testTitleVariant,
} from '../utils/variants';
// import TestimonialForm from '../components/TestimonialForm';

interface IProps {
  testimonials: ITestimonial[];
}

const Testimonials = ({ testimonials }: IProps) => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative flex flex-col gap-8 justify-center items-center min-h-screen pt-16 w-screen">
      <motion.div
        className="fixed inset-0 z-20 h-screen w-screen bg-white mix-blend-difference pointer-events-none"
        style={{ scaleX, transformOrigin: 0 }}
      />
      <motion.div
        ref={ref}
        variants={testContainerVariant}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-evenly h-[95vh] lg:h-[80vh] w-full gap-4 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide md:scrollbar-default"
      >
        <motion.div variants={testTitleVariant} className="relative flex justify-center">
          <p className="absolute text-center text-2xl md:text-2xl 2xl:text-4xl font-poppins font-semibold">
            People I&apos;ve worked with <span className="relative z-30">🤗</span>
          </p>
        </motion.div>
        <motion.div variants={testCardContainerVariant} className="flex gap-8 px-8 ">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial._id}
              variants={testCardVariant}
              className="flex flex-col flex-shrink-0 justify-evenly p-8 gap-8 rounded-md h-auto w-full xl:w-[650px] 2xl:w-[900px] font-poppins shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-50/50"
            >
              <div className="flex items-center justify-center gap-8">
                <div className="relative z-30 h-20 w-20 md:h-28 md:w-28 rounded-full flex-shrink-0">
                  <Image
                    src={urlFor(testimonial.imageurl).url()}
                    priority
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col font-extrabold">
                  <p className="text-base 2xl:text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="relative p-6 font-medium h-auto">
                <div className="absolute top-0 left-0">
                  <ImQuotesLeft />
                </div>
                <div className="absolute bottom-0 right-0">
                  <ImQuotesRight />
                </div>
                <p className="text-base 2xl:text-lg h-[400px] md:h-[200px] overflow-y-auto scrollbar-hide">
                  {testimonial.message}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* <div className="flex justify-center items-center h-screen w-screen mt-[5%]">
        <TestimonialForm />
      </div> */}
    </div>
  );
};

export default Testimonials;

export const getServerSideProps = async () => {
  const query = `*[_type == 'testimonials'] | order(_createdAt desc) {
    _id,
    name,
    company,
    message,
    imageurl
  }`;

  const testimonials = await client.fetch(query);

  return {
    props: {
      testimonials,
    },
  };
};
