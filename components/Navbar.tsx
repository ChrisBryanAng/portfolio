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
    <div className="fixed flex px-[5%] h-24 w-full items-center justify-between">
      <div className="flex gap-4">
        {menus.map((menu: { label: string; route: string }, idx: number) => (
          <p
            key={idx}
            className={`uppercase ${
              router.route === menu.route ? 'border-b-2 border-black' : ''
            }`}
          >
            <Link href={`${menu.route}`}>{menu.label}</Link>
          </p>
        ))}
      </div>
      <div>
        <p>Download CV</p>
      </div>
    </div>
  );
};

export default Navbar;
