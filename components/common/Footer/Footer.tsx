import { BsArrowUpCircle } from 'react-icons/bs';

import { Container, Box, Text, Link } from '@components/ui';
import { Subscribe, Copyright } from '@components/common';
import { motion } from 'framer-motion';
import { AiOutlineMail, AiFillWeiboCircle } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';
import { FacebookIcon } from 'react-share';
export const Footer = () => {
  return (
    <footer id='subscribe'>
      <Container className='relative mb-10 bg-white grid-cols-5 gap-10 md:grid w-full'>
        <Box className='col-span-2 items-center md:block  w-full px-30 py-30'>
          <Text
            as='h6'
            casing='uppercase' 
            fontWeight='medium'
            className='font-heading mb-4 items-center'
          >
            <motion.span
              className='block'
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
            >
              <br /><br />
              My Socials
            </motion.span>
          </Text>
          <motion.span
            className='block'
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1 }}
          >
            <Link
            href='mailto:wshuvo360@gmail.com'
            className='mb-3 block text-base font-medium items-center hover:text-blue-500'
          >
            <div className="flex items-center">
              <div className="mr-2">
                <AiOutlineMail size={20} />
              </div>
              wshuvo360@gmail.com
            </div>
            </Link>
            <Link
              href='/'
              className='mb-3 block text-base font-medium hover:text-blue-500'
            >
              <div className="flex items-center">
              <div className="mr-2">
                <BiGlobe size={20} />
              </div>
              github.com/wshuv-o
            </div>
            </Link>
            <Link
              href='/'
              className='mb-3 block text-base font-medium hover:text-blue-500'
            >
              <div className="flex items-center">
              <div className="mr-2">
                <BiGlobe size={20} />
              </div>
              linkedin.com/in/wshuvo
            </div>
            </Link>


          </motion.span>
        </Box>

        <Box className='col-span-3 max-w-lg  bg-[rgb(250,250,250)] border-green-600 border-2 shadow-xl px-10 py-10 rounded-2xl px-30 py-30'>
          
          <Text className='mb-6'>
            <motion.span
              className='block'
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
            >
              
            </motion.span>
          </Text>
          <Subscribe />
        </Box>

        <Link
          href='#top'
          className='group absolute bottom-0 right-10 hidden items-center gap-2 text-sm font-medium uppercase text-green-500 transition duration-300 ease-in-out hover:text-green-600 md:flex'
        >
          Top
          <BsArrowUpCircle className='relative -top-[2px] h-5 w-5 transform transition duration-300 ease-in-out group-hover:-translate-y-1' />
        </Link>
      </Container>

      <Copyright />
    </footer>
  );
};
