/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { client, urlFor } from '../utils/client';
import { IWork } from '../types';
import WorkModal from '../components/WorkModal';

interface IProps {
  works: IWork[];
}

const Work = ({ works }: IProps) => {
  const ref = useRef<any>();
  const [selected, setSelected] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <motion.div
      exit={{ x: '100vw' }}
      transition={{ duration: 1.5 }}
      className="relative flex min-h-screen items-center justify-center pointer-events-none overflow-hidden"
    >
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-white mix-blend-difference"
      />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isModalOpen && <WorkModal work={selected} toggleModal={toggleModal} />}
      </AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="relative flex flex-[1_1_44%] flex-wrap h-[520px] w-full mx-[5%] px-[11px] gap-8 overflow-y-auto overflow-x-hidden pointer-events-auto"
      >
        {works?.map((work) => (
          <div key={work._id} className="flex flex-shrink-0 flex-col h-max w-[400px]">
            <motion.div
              layoutId={`image-${work._id}`}
              className="relative bg-gray-400 cursor-pointer"
              onClick={() => {
                setSelected(work);
                toggleModal();
              }}
            >
              <Image
                src={urlFor(work.imgUrl).url()}
                layout="responsive"
                priority
                width={550}
                height={600}
                objectFit="cover"
              />
            </motion.div>
            <p className="text-white text-[30px] font-cormorant uppercase p-4 text-center">
              {work.title}
            </p>
          </div>
        ))}
        <div className="flex flex-shrink-0 flex-col h-max w-[400px]">
          <div className="relative bg-gray-400" onClick={() => console.log(selected)}>
            <Image
              src="/images/helping.jpg"
              layout="responsive"
              priority
              width={550}
              height={600}
              objectFit="cover"
            />
          </div>
          <p className="text-white text-[30px] font-cormorant uppercase p-4 text-center">TBD</p>
        </div>
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
    githubLink
  }`;

  const works = await client.fetch(query);

  return {
    props: {
      works,
    },
  };
};

export default Work;
