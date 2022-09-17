import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useScroll, useVelocity } from 'framer-motion';
import { ISidebar } from '../types';

const menus = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Work', route: '/work' },
  { label: 'Contact Me', route: '/contact' },
];

const Navbar = ({ toggleSidebar }: ISidebar) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(router.route);
  const slideDistance = 100;
  const threshold = 1500;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // true if the page is not scrolled or fully scrolled back
  const [isInView, setIsInView] = useState(true);

  useEffect(
    () =>
      scrollVelocity.onChange((latest) => {
        if (latest > 0) {
          setIsScrollingBack(false);
          return;
        }
        if (latest < -threshold) {
          setIsScrollingBack(true);
          return;
        }
      }),
    [scrollVelocity]
  );

  useEffect(() => scrollY.onChange((latest) => setIsAtTop(latest <= 0)), [scrollY]);

  useEffect(() => setIsInView(isScrollingBack || isAtTop), [isScrollingBack, isAtTop]);

  const variants = {
    initialNotInRoute: {
      opacity: 0,
      y: '-100px',
    },
    initialInRoute: {
      opacity: 1,
      y: 0,
    },
    notInRoute: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
    inRoute: {
      opacity: 1,
      y: isInView ? 0 : -slideDistance,
      transition: {
        duration: 0.2,
        delay: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial={router.route === '/about' ? 'initialInRoute' : 'initialNotInRoute'}
      animate={router.route === '/about' ? 'inRoute' : 'notInRoute'}
      className="flex fixed z-10 px-[5%] 4k:px-[15%] h-20 md:h-24 lg:h-36 w-full items-center justify-end lg:justify-between font-poppins text-sm xl:text-base bg-transparent pointer-events-auto"
    >
      <div
        className={`hidden lg:flex ${
          (router.route === '/work' || router.route === '/contact') && 'font-semibold'
        }`}
      >
        {menus.map((menu: { label: string; route: string }, idx: number) => (
          <div
            key={idx}
            onMouseEnter={() => setHovered(menu.route)}
            onMouseLeave={() => setHovered(router.route)}
            className="px-8 xl:px-12"
          >
            <div className="relative uppercase tracking-widest py-1">
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
      </div>
      <div className={`hidden lg:flex gap-8 ${router.route === '/work' && 'font-semibold'}`}>
        <p className="tracking-widest">Testimonials</p>
        <p className="tracking-widest">Download CV</p>
      </div>
      <div className="inline-block lg:hidden cursor-pointer" onClick={toggleSidebar}>
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
