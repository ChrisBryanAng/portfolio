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
      className="fixed flex px-[5%] h-36 w-full items-center justify-between font-bodoni"
    >
      <div className="flex gap-[108px]">
        {menus.map((menu: { label: string; route: string }, idx: number) => (
          <div key={idx} className="relative uppercase tracking-widest">
            <Link href={`${menu.route}`}>{menu.label}</Link>
            {router.route === menu.route && (
              <motion.div layoutId="border" className="border-b-2 border-black" />
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-8">
        <p className="tracking-widest">Testimonials</p>
        <p className="tracking-widest">Download CV</p>
      </div>
    </motion.div>
  );
};

export default Navbar;
