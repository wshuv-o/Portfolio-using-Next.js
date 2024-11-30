import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';

import { Text, Box, Container, Link, Button } from '@components/ui';

export const Hero = () => {
  return (
    <Box className='mb-10 grid md:mb-40 md:h-screen md:grid-cols-2' id='top'>
      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative mt-[64px] h-[70vh] md:hidden'
      >
        <Image
          src='/images/akash.png'
          layout='fill'
          objectFit='cover'
          objectPosition='center left'
          priority
          quality={100}
          blurDataURL='/images/jose-placeholder.png'
          placeholder='blur'
          alt='Mohammed Akash'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.8 }}
        transition={{ duration: 0.6 }}
        animate={{ opacity: 1 }}
        className='relative left-4 order-1 mt-0 hidden h-full max-w-2xl justify-end pt-3 md:flex'
      >
        <Image
          src='/images/akash.png'
          layout='fill'
          objectFit='contain'
          priority
          quality={100}
          blurDataURL='/images/jose-placeholder.png'
          placeholder='blur'
          alt='Mohammed Akash'
        />
      </motion.div>

      <Container className='md:order-0 order-1 flex w-full flex-col justify-between pb-12 pt-5'>
        <Box className='md:mb-10' />
        <Box className='order-1 mt-5 max-w-xl md:order-2 md:mt-10'>
          <Text as='h5' className='mb-5' fontSize='3xl'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Hi there! this is.. <br /> 
            </motion.span>
          </Text>

          <Text as='h1' className='mb-5' fontSize='6xl'>
            <motion.span
              className='block'
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              MOHAMMED AKASH
            </motion.span>
          </Text>

          <Text className='mb-10 3xl:mb-10'>
            <motion.span
              className='block'
              initial={{ y: 20, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              
              I am a professional web developer with a great passion for programming. I have been working as a freelancer since 2020, delivering high-quality websites and web applications tailored to meet clients' specific needs.            </motion.span>
          </Text>
          <Box className='flex'>
            <motion.div
              initial={{ x: -10 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileInView={{ x: 0 }}
            >
              <Button
                variant='primary'
                size='lg'
                href='/blog'
                className='font-heading mr-3 text-sm uppercase rounded-full'
              >
                Read my blog
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 10 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileInView={{ x: 0 }}
            >
              <Button
                variant='secondary'
                size='lg'
                href='/blog'
                className='font-heading mr-3 text-sm uppercase rounded-full'
              >
                Hire me
              </Button>
            </motion.div>
          </Box>
        </Box>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='order-2 hidden md:order-3 md:block'
        >
          <Link
            className='font-heading flex animate-bounce gap-1 text-sm uppercase text-slate-900 hover:text-green-500'
            href='#latest'
          >
            <AiOutlineArrowDown className='h-[21px] w-auto' /> scroll down
          </Link>
        </motion.div>
      </Container>

    </Box>
  );
};
