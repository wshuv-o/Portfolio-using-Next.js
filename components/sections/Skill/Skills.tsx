import Image from 'next/image';
import { Text, Box, Container, Link } from '@components/ui';
import { motion } from 'framer-motion';
import { Button } from '@components/ui';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const About = () => {
  /*const treeRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(treeRef.current);

    const data = [1, 2, 3, 4, 5, 6];
    var curveHeight = 100;
    const hei=[50,200,480,600,800,1000]

    const lines = svg
      .selectAll('.tree-line')
      .data(data)
      .enter()
      .append('path')
      .attr('class', 'tree-line')
      .attr('d', (d, i) => {
        const startX = -0;
        const startY = 420;
        const controlX = 100; // Adjust the control point based on your preference
        const controlY = hei[i];
        const endX = 300;
        const endY = 60+curveHeight * i;

        return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
      })
      .style('fill', 'none')
      .style('stroke', 'green')
      .style('stroke-width', '1px');

    return () => {
      lines.remove();
    };
  }, []);*/

  return (
    <Container id='about' className='mb-20 grid gap-10 md:mb-40 md:grid-cols-2 custom-grid'>
      <motion.div
        initial={{ x: -10 }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0 }}
      >
        <Text as='h2' className='mb-5' fontSize='5xl'>
          My Skills
        </Text>
        <Text className='gap-5 md:columns-1 2xl:gap-10'>
          After leaving my regular job, I have been working as a freelance developer since 2020. I have received 40+ Fiverr reviews, all with a 5-star rating.
          <br />
          <br />
          Check out my{' '}
          <Link
            className='font-medium text-green-500'
            target='_blank'
            href='https://www.fiverr.com/akashmony01'
          >
            Fiverr profile.
          </Link>
          <br />
          <br />
          Over the course of my professional journey, I have acquired a wealth of expertise in frontend development, showcasing remarkable skills in this domain. This experience has allowed me to flourish as a developer, honing my abilities to create exceptional web experiences. With a strong focus on frontend technologies, I am well-versed in crafting visually appealing and user-friendly interfaces.
        </Text>
      </motion.div>

      <motion.div
        initial={{ translateX: 30 }}
        transition={{ duration: 1 }}
        whileInView={{ translateX: 0 }}
        className='relative h-auto md:h-[fit-content] md:pt-10 2xl:h-[420px] flex justify-center items-center bg-[rgb(240,240,240)] rounded-lg px-8 py-10 container'
      >
        {/*<svg ref={treeRef} className='w-full h-full' />*/}

        <Box className='space-y-2 w-full max-w-[400px] md:max-w-none'>
        <Box className='bg-green-500 bg-opacity-20 rounded-md p-2 hover:bg-opacity-90'>
        <Text as='span' className='font-bold text-black-500'>
          Frontend:
        </Text>{' '}
        HTML, CSS3, JavaScript, SCSS, SASS, Bootstrap, Tailwind
      </Box>
          <Box className='bg-green-500 bg-opacity-20 rounded-md p-2 hover:bg-opacity-90'>
            <Text as='span' className='font-bold text-black-500 hover:text-white-500'>
              Backend:
            </Text>{' '}
            PHP, mysql, ajax (intermediate)
          </Box>
          <Box className='bg-green-500 bg-opacity-20 rounded-md p-2 hover:bg-opacity-90'>
            <Text as='span' className='font-bold text-black-500 hover:text-white-500'>
              Static site generators:
            </Text>{' '}
            astro, gridsome, hugo, eleventy, next.js, jeykyll
          </Box>
          <Box className='bg-green-500 bg-opacity-20 rounded-md p-2 hover:bg-opacity-90'>
            <Text as='span' className='font-bold text-black-500 hover:text-white-500'>
              Framework:
            </Text>{' '}
            node js, jquery, vue js, django
          </Box>
          <Box className='bg-green-500 bg-opacity-20 rounded-md p-2 hover:bg-opacity-90'>
            <Text as='span' className='font-bold text-black-500 hover:text-white-500'>
              Applications:
            </Text>{' '}
            figma, sketch, adobe xd, photoshop
          </Box>
          <Box className='bg-green-500 bg-opacity-20 rounded-md p-2 hover:bg-opacity-90'>
            <Text as='span' className='font-bold text-black-500 hover:text-white-500'>
              Languages:
            </Text>{' '}
            c, c++, python (basic)
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};
