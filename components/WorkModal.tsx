import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '../utils/client';
import { IWork } from '../types';
import { AiOutlineClose, AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

interface IProps {
  work: IWork;
  toggleModal: MouseEventHandler<HTMLDivElement>;
}

const WorkModal = ({ work, toggleModal }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={toggleModal}
      className="fixed z-10 inset-0 h-screen w-screen justify-center items-center bg-black/90 flex pointer-events-auto"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col xl:flex-row h-full md:mx-[5%] pt-[70px] xl:pt-0 rounded-lg overflow-y-auto scrollbar-hide"
      >
        <div
          className="absolute z-20 top-4 md:top-7 right-4 md:right-3 xl:right-7 h-7 w-7 rounded-full"
          onClick={toggleModal}
        >
          <AiOutlineClose className="h-7 w-7 cursor-pointer" color="#fff" />
        </div>
        <motion.div
          layoutId={`image-${work._id}`}
          className="inline-block relative min-h-[400px] xl:min-h-full w-full md:w-[700px]"
        >
          <Image src={urlFor(work.imgUrl).url()} layout="fill" objectFit="contain" />
        </motion.div>
        <div className="flex flex-col gap-24 px-16 py-[5%] 2xl:py-[12%] h-full md:w-[700px] text-white overflow-y-visible xl:overflow-y-auto scrollbar-hide">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <motion.p
              initial={{ y: '50px', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="rounded-lg md:px-8 w-max text-[30px] font-poppins font-semibold "
            >
              {work.title}
            </motion.p>
            <div className="flex w-max mt-8 md:mt-0 md:px-8 md:justify-center md:items-center gap-4">
              <motion.div
                whileHover={{ backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center rounded-full bg-white text-black w-9 h-9 cursor-pointer"
              >
                <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
                  <AiOutlineLink className="h-7 w-7" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
                className="flex p-1 items-center justify-center rounded-full bg-white text-black w-9 h-9 cursor-pointer"
              >
                <AiOutlineGithub className="h-7 w-7" />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col md:px-8 py-4 w-full rounded-lg text-[25px] font-poppins">
            <motion.p
              initial={{ y: '50px', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pb-2 font-semibold"
            >
              Technologies
            </motion.p>

            <div className="flex flex-col pt-2 pl-10 md:pl-14 text-[19px] font-poppins">
              {work.tags?.map((tag, idx) => (
                <motion.p
                  key={idx}
                  initial={{ y: '50px', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="w-max text-center"
                >
                  {tag}
                </motion.p>
              ))}
            </div>
          </div>
          <div className=" rounded-lg md:px-8 py-4 text-[25px] font-poppins">
            <motion.p
              initial={{ y: '50px', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="pb-2 font-semibold"
            >
              Description
            </motion.p>
            <motion.p
              initial={{ y: '50px', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="pl-10 md:pl-14 pt-2 text-[19px] w-[250px] md:w-full"
            >
              {work.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkModal;
