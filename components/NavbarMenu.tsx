import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface IProps {
  menus: {
    label: string;
    route: string;
  }[];
  hovered: string;
  setHovered: Dispatch<SetStateAction<string>>;
}

const NavbarMenu = ({ menus, hovered, setHovered }: IProps) => {
  const router = useRouter();

  return (
    <>
      {menus.map((menu: { label: string; route: string }, idx: number) => (
        <div
          key={idx}
          onMouseEnter={() => setHovered(menu.route)}
          onMouseLeave={() => setHovered(router.route)}
          className="lg:px-4 xl:px-8 2xl:p-12"
        >
          <div className="relative tracking-widest py-1">
            <Link href={`${menu.route}`}>{menu.label}</Link>
            {(menu.route === hovered || menu.route === router.route) && (
              <motion.div
                layoutId="border"
                transition={{ duration: 0.4 }}
                className="absolute inset-0 border-b-2 border-black pointer-events-none"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavbarMenu;
