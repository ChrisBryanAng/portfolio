import { motion } from 'framer-motion';

const HeroSvg = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <svg
        width="1644"
        height="657"
        viewBox="0 0 1644 657"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4 }}
          d="M0.5 656C240 632.167 723.5 516.5 890 415M890 415C1092.5 274 1240.95 275.447 1445 262.101M890 415C906 429.5 1031.5 319.5 1077 361C1122.5 402.5 1077 462 1031.5 459.5C986 457 987.667 432.167 990 415M1643 257C1590.37 255.96 1520.96 257.133 1445 262.101M1445 262.101C1549 74.5 1460 -12.5 1407.5 4.5C1365.5 18.1 1373 54.8333 1382 71.5"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default HeroSvg;
