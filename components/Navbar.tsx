import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const menus = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Work', route: '/work' },
  { label: 'Contact Me', route: '/contact' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: '-100px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="flex fixed px-[5%] 4k:px-[15%] h-20 md:h-24 lg:h-36 w-full items-center justify-end lg:justify-between font-bodoni"
    >
      <div className="hidden lg:flex gap-12 xl:gap-[108px]">
        {menus.map((menu: { label: string; route: string }, idx: number) => (
          <div key={idx} className="relative uppercase tracking-widest">
            <Link href={`${menu.route}`}>{menu.label}</Link>
            {router.route === menu.route && (
              <motion.div layoutId="border" className="border-b-2 border-black" />
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-8">
        <p className="tracking-widest">Testimonials</p>
        <p className="tracking-widest">Download CV</p>
      </div>
      <div className="inline-block lg:hidden">
        <svg
          width="36"
          height="23"
          viewBox="0 0 36 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="-4.37114e-08" y1="0.5" x2="35" y2="0.499997" stroke="black" />
          <line x1="11" y1="11.5" x2="35" y2="11.5" stroke="black" />
          <line x1="17" y1="22.5" x2="36" y2="22.5" stroke="black" />
        </svg>
      </div>
    </motion.div>
  );
};

export default Navbar;
