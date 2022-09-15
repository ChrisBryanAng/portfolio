import { motion } from 'framer-motion';

const HeroSvg = () => {
  return (
    <div className="absolute bottom-16 md:bottom-28 lg:bottom-0 4k:-bottom-32 left-0">
      <div className="inline-block relative overflow-hidden">
        <svg
          className="hidden md:inline-block h-[657px] md:w-[700px] lg:w-[900px] xl:w-[1300px] 2xl:w-[1644px] 4k:w-[1844px]"
          preserveAspectRatio="xMidYMax meet"
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

        <svg
          className="inline-block md:hidden w-[390px] h-[264px]"
          preserveAspectRatio="xMidYMax meet"
          viewBox="0 0 390 264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4 }}
            d="M-0.144306 262.495C58.2371 246.967 173.22 193.465 210.19 154.818M210.19 154.818C254.406 102.058 291.282 97.7518 341.32 86.8037M210.19 154.818C214.776 159.058 241.216 118.943 254.267 131.087C267.318 143.231 258.568 164.208 247.177 164.854C235.787 165.499 235.143 157.302 234.99 151.597M390.207 78.7545C377.112 80.1083 359.946 82.7284 341.32 86.8037M341.32 86.8037C359.123 21.9343 333.346 -3.72946 321.05 3.53612C311.213 9.34858 314.638 21.153 317.579 26.3287"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSvg;
