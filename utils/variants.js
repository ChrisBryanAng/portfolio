/*Page transitions*/
export const pageVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/*Home Variants*/
export const pContainer = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.3 },
  }),
};

export const pChild = {
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

export const extraText = {
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

/*Work Variants*/
export const workVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    x: '100vw',
    transition: {
      duration: 1,
    },
  },
};
