import { FC, useState, useEffect } from 'react';
import { Container, Box, Link } from '@components/ui';
import { Menu } from '@components/common';
import { MenuButton } from '..';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Logo } from '../Logo/Logo';
import { AnimatePresence } from 'framer-motion';

interface Props {
  variant?: 'main' | 'blog';
  className?: string;
}

export const Nav: FC<Props> = ({ className = '', variant = 'main' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const onOpen = () => setIsMenuOpen(true);
  const onClose = () => setIsMenuOpen(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    handleResize(); // Initial call to handleResize

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {variant === 'main' && (
        <nav
          className={`right-0 top-0 left-0 z-10 md:left-[81px] 2xl:left-20  ${className}`}
        >
          <Container className='flex items-center justify-between'>
            <Logo className='md:hidden' />
            {isMobile && <MenuButton className='md:hidden ' onOpen={onOpen} />}
          </Container>
        </nav>
      )}
      {variant === 'blog' && (
        <Box className='sticky top-0 z-10 border-b bg-white backdrop-blur backdrop-filter  md:bg-opacity-80 md:dark:bg-opacity-90'>
          <Container className='flex items-center justify-between py-3'>
            <Logo className='md:hidden' />
            <Link
              href='/blog'
              className='font-heading relative -left-1 hidden items-center text-xs uppercase hover:text-green-500 md:flex'
            >
              <MdOutlineKeyboardArrowLeft className='mr-1 h-4 w-auto' /> back to
              blog
            </Link>
            {isMobile && <MenuButton onOpen={onOpen} />}
          </Container>
        </Box>
      )}
      <AnimatePresence>
        {isMenuOpen && <Menu onClose={onClose} />}
      </AnimatePresence>
    </>
  );
};
