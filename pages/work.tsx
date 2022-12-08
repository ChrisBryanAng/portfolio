/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { client, urlFor } from '../utils/client';
import { IWork } from '../types';
import WorkModal from '../components/WorkModal';
import { workVariants } from '../utils/variants';

interface IProps {
  works: IWork[];
}

const Work = ({ works }: IProps) => {
  const [selected, setSelected] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <motion.div
      variants={workVariants}
      className="relative flex min-h-screen items-center justify-center pointer-events-none overflow-hidden"
    >
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-10 bg-white mix-blend-difference"
      />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isModalOpen && <WorkModal work={selected} toggleModal={toggleModal} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className={`relative z-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 h-[500px] w-full justify-center md:mx-[5%] md:px-[11px] gap-8 ${
          isModalOpen ? 'overflow-hidden' : 'overflow-y-auto'
        }  overflow-x-hidden pointer-events-auto scrollbar-hide lg:scrollbar-default`}
      >
        {works?.map((work) => (
          <div key={work._id} className="flex flex-shrink-0 flex-col items-center h-max w-full">
            <motion.div
              layoutId={`image-${work._id}`}
              className="relative h-[400px] w-[300px] cursor-pointer"
              onClick={() => {
                setSelected(work);
                toggleModal();
              }}
            >
              <Image src={urlFor(work.imgUrl).url()} layout="fill" priority objectFit="cover" />
            </motion.div>
            <p className="text-white text-[25px] font-poppins uppercase p-4 text-center">
              {work.title}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == 'works'] {
    _id,
    title,
    description,
    imgUrl,
    projectLink,
    githubLink,
    tags
  }`;

  const works = await client.fetch(query);

  return {
    props: {
      works,
    },
  };
};

export default Work;
