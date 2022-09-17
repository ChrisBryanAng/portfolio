import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const menus = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Work', route: '/work' },
  { label: 'Contact', route: '/contact' },
];

interface IProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({ toggleSidebar, isSidebarOpen }: IProps) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(router.route);

  return (
    <AnimatePresence initial={false}>
      {isSidebarOpen && (
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
          transition={{ duration: 0.6 }}
          className="flex lg:hidden absolute z-50 justify-center items-center h-screen w-screen bg-white"
        >
          <div className="absolute right-7 top-7 cursor-pointer" onClick={toggleSidebar}>
            <AiOutlineClose className="h-7 w-7" />
          </div>
          <div className="flex flex-col items-center">
            {menus.map((menu: { label: string; route: string }, idx: number) => (
              <div
                key={idx}
                className="relative uppercase tracking-widest py-4 w-max font-poppins text-4xl cursor-pointer"
                onMouseEnter={() => setHovered(menu.route)}
                onMouseLeave={() => setHovered(router.route)}
                onClick={toggleSidebar}
              >
                <Link href={`${menu.route}`}>{menu.label}</Link>
                {(menu.route === hovered || menu.route === router.route) && (
                  <motion.div
                    layoutId="border"
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 border-b-2 border-black pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
