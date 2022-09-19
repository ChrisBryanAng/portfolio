import React from 'react';
import Image from 'next/image';
import { motion, MotionValue } from 'framer-motion';
import { hobbiesImageVariants } from '../utils/variants';

interface IProps {
  className: string;
  style: MotionValue<number>;
  imgSrc: string;
}

const HobbyMotionImage = ({ className, style, imgSrc }: IProps) => {
  return (
    <>
      <motion.div variants={hobbiesImageVariants} className={className} style={{ y: style }}>
        <Image src={imgSrc} layout="fill" />
      </motion.div>
    </>
  );
};

export default HobbyMotionImage;
