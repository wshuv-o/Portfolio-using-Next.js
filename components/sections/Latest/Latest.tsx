import React, { useState } from 'react';
import { Box, Button, Card, Container, Link, Text } from '@components/ui';
import s from './Latest.module.scss';
import { motion, AnimatePresence } from 'framer-motion';


export const LatestBlogs = ({ articles }) => {
  const [x, setX] = useState(0);

  const translate = (pos) => {
    setX((prev) => prev + pos);
  };

  return (
    <Container full className={s.bar} id='latest'>
      <Container className='mb-5'>
        <Box className='mb-7 flex items-center justify-between'>
          <Text as='h2' fontSize='4xl'>
            <motion.span
              className='block'
              initial={{ x: -10 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0 }}
            >
              My Blogs
            </motion.span>
          </Text>
        </Box>
        <Text className='md:'>
          <motion.span
            className='mb-3 block'
            initial={{ x: -10 }}
            transition={{ duration: 0.6 }}
            whileInView={{ x: 0 }}
          >
            My blog is where I share my thoughts and experiences about tech and the web in general. Swipe left or right to see some of my latest blogs
            My blog is where I share my thoughts and experiences about tech and the web in general. Swipe left or right to see some of my latest blogs
          </motion.span>
        </Text>
      </Container>

      <Container>
        <div className='grid grid-cols-2 gap-8' style={{ columnGap: '18px', rowGap: '8px' }}>
          {articles?.slice(0, 4).map(({ id, slug, title, published_at, reading_time_minutes, cover_image }) => (
            <div key={id} className='rounded-lg overflow-hidden'>
              <Card
                slug={slug}
                title={title}
                date={published_at}
                readingTime={reading_time_minutes}
                coverImage={cover_image}
              />
            </div>
          ))}
        </div>
      </Container>
      
      
      <Box className='bg-white mt-5 text-center'>
              <Button
                variant='primary'
                size='lg'
                href='/blog'
                className='font-heading mr-3 text-sm uppercase rounded-full'
              >
                See All Blogs
              </Button>
        </Box>
    </Container>
  );
};
