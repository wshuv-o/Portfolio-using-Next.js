import { Box, Button, Container, Link, Text } from '@components/ui';
import s from './Recommendation.module.scss';
import { motion } from 'framer-motion';

import Testimonials from 'components/common/Testimonial/index';
import TestimonialCard from 'components/common/Testimonial/TestimonialCard';


export const TechStack = () => {
  return (
    <Container full className={s.root}>
      <Container className='bg-white'>
        <Box className='flex items-center justify-between'>
          <Text as='h2' className='mb-4' fontSize='4xl'>
            <motion.span
              className='block'
              initial={{ x: -10 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0 }}
            >
              Testimonial
            </motion.span>
          </Text>
        </Box>
        <Text className='max-w-lg'>
          <motion.span
            className='block'
            initial={{ x: -10 }}
            transition={{ duration: 0.6 }}
            whileInView={{ x: 0 }}
          >
            Over the last couple of years, I have worked on a variety of projects
            with different clients from all over the world. Below are some of the
            feedback I have received.
            <br />
            <br />

          </motion.span>
        </Text>
      </Container>

      <Box className={s.stackContainer} style={{ paddingLeft: '35px', paddingRight: '35px', background: 'white' }}>
        <div className={`${s.testimonialWrapper} flex flex-wrap gap-4`}>
          {Testimonials.map((testimonial, index) => (
            <div key={index} className={s.testimonialCardWrapper}>
              <TestimonialCard
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                country={testimonial.country}
                imageSrc={testimonial.imageSrc}
              />
            </div>
          ))}
        </div>
      </Box>

      <Box className='bg-white mt-5 text-center'>
              <Button
                variant='secondary'
                size='lg'
                href='/blog'
                className='font-heading mr-3 text-sm uppercase rounded-full'
              >
                All Feedbacks
              </Button>
        </Box>
    </Container>
  );
};
