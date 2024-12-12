import React from 'react';
import { motion } from 'framer-motion';
import projects from "./index"
import { fadeIn, textVariant } from 'utils/motion';
import { Container, Text } from '@components/ui';
import { BsGithub } from 'react-icons/bs';
import { IoArrowRedoCircle } from 'react-icons/io5';
import { Box, Button } from '@components/ui';
import Image from 'next/image';
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div
        style={{
          background: 'linear-gradient(45deg, rgb(148,148,148), rgb(29,29,29))',
        }}
        className="p-5 rounded-2xl sm:w-[310px] w-full shadow-lg flex-grow"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt={name}
            layout={'fill'}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <IoArrowRedoCircle />
            </div>
            <div>&nbsp;</div>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <BsGithub />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Works = () => {
  const displayedProjects = projects.slice(0, 4); // Limit the number of displayed projects to 4 or less

  return (
    <Box className="mb-10 bg-slate-50 py-12 text-center dark:bg-[#0d1424]">
      <Container>
        <motion.div id="portfoilo" variants={textVariant()}>
          <Text as="h2" className="mb-5" fontSize="5xl" align="left">
            Projects
          </Text>
        </motion.div>

        
        <Text className='md:'>
          <motion.span
            className='mb-3 block'
            initial={{ x: -10 }}
            transition={{ duration: 0.6 }}
            whileInView={{ x: 0 }}
          >
           Over the last couple of years, I have worked on a variety of projects with different clients from all over the world. Below are some of the feedback I have received.
          Over the last couple of years, I have worked on a variety of projects with different clients from all over the world. Below are some of the feedback I have received.
          </motion.span>
        </Text>

        <div className="mt-10 flex flex-wrap gap-7 justify-center" >
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <Box className="bg-slate mt-5 text-center">
          <Button
            variant="primary"
            size="lg"
            href="/projects"
            className="font-heading mr-3 text-sm uppercase rounded-full"
          >
            See All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Works;
