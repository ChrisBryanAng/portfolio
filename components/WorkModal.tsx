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
      className="absolute z-10 inset-0 h-screen w-screen justify-center items-center bg-black/90 flex pointer-events-auto"
    >
      <div className="absolute top-8 left-8 h-7 w-7 rounded-full">
        <AiOutlineClose className="h-7 w-7 cursor-pointer" color="#fff" />
      </div>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col lg:flex-row lg:gap-8 h-[700px] rounded-lg overflow-clip"
      >
        <motion.div layoutId={`image-${work._id}`} className="relative h-[700px] w-[700px]">
          <Image src={urlFor(work.imgUrl).url()} layout="fill" objectFit="contain" />
        </motion.div>
        <motion.div className="flex flex-col gap-24 px-16 py-4 h-full w-[700px] overflow-y-auto text-white scrollbar-hide">
          <div className="flex w-full justify-between">
            <p className=" rounded-lg px-8 py-4 w-max text-[30px] font-bodoni font-semibold">
              {work.title}
            </p>
            <div className="flex px-8 justify-center items-center gap-4">
              <motion.div
                whileHover={{ backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
                className="flex p-1 items-center justify-center rounded-full bg-white text-black w-9 h-9 cursor-pointer"
              >
                <AiOutlineLink className="h-8 w-8" />
              </motion.div>
              <motion.div
                whileHover={{ backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
                className="flex p-1 items-center justify-center rounded-full bg-white text-black w-9 h-9 cursor-pointer"
              >
                <AiOutlineGithub className="h-8 w-8" />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col px-8 py-4 w-full rounded-lg text-[25px] font-bodoni">
            <p className="pb-2 font-semibold">Built with</p>
            <div className="flex flex-col pt-2 pl-14 text-[18px] font-cantataOne">
              <p className="w-max text-center">React</p>
              <p className="w-max text-center">Tailwind</p>
              <p className="w-max text-center">Redux</p>
              <p className="w-max text-center">MongoDb</p>
            </div>
          </div>
          <div className=" rounded-lg px-8 py-4 text-[25px] font-bodoni">
            <p className="pb-2 font-semibold">Description:</p>
            <p className="pl-14 text-[18px] font-cantataOne">{work.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkModal;
