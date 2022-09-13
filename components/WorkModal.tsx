import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '../utils/client';
import { IWork } from '../types';

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
      className="absolute z-10 inset-0 h-screen w-screen justify-center items-center bg-black/80 flex pointer-events-auto"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[600px] bg-orange-100/10"
      >
        <motion.div
          layoutId={`image-${work._id}`}
          className="flex items-center justify-center h-[600px] w-[600px] bg-slate-100/20"
        >
          <Image src={urlFor(work.imgUrl).url()} width={600} height={600} objectFit="contain" />
        </motion.div>
        <motion.div className="flex flex-col bg-white w-[400px]">
          <p>{work.title}</p>
          <div className="w-full bg-red-200">
            <div className="w-max p-2 text-center rounded-lg bg-[#f1fafb] text-[#4993fa]">
              React
            </div>
          </div>
          <div>
            <p>Project Link</p>
            <p>{work.projectLink}</p>
          </div>
          <div>
            <p>Github:</p>
            <p>{work.githubLink}</p>
          </div>
          <div>
            <p>Description:</p>
            <p>{work.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkModal;
