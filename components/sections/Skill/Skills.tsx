import Image from 'next/image';
import { Text, Box, Container, Link } from '@components/ui';
import { motion } from 'framer-motion';
import { Button } from '@components/ui';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const About = () => {
  return (
    <Container
      id="about"
      className="mb-20 grid gap-10 md:mb-40 md:grid-cols-2 custom-grid"
    >
      {/* Text Section */}
      <motion.div
        initial={{ x: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0 }}
        className="space-y-5 flex flex-col justify-between min-h-[400px]"
      >
        <Text as="h2" className="mb-5 text-6xl font-bold">
          My Skills
        </Text>
        <Text className="text-lg text-gray-700 leading-relaxed md:columns-1">
          I am a passionate full-stack developer with extensive experience in building and deploying high-quality web applications. I have successfully managed multiple projects while pursuing my BSc in CSE.
          <br /><br />
          Throughout my journey, I have gained extensive expertise in frontend development, consistently delivering high-quality and user-friendly web experiences. Balancing projects alongside my BSc studies, I have developed a strong ability to craft visually appealing interfaces with a focus on usability and modern design principles.
        </Text>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ translateX: 10 }}
        transition={{ duration: 1 }}
        whileInView={{ translateX: 0 }}
        className="relative h-auto md:h-[fit-content] md:pt-10 2xl:h-[500px] flex justify-center items-center bg-[rgb(240,240,240)] rounded-lg px-6 py-8"
      >
        <Box className="space-y-3 w-full max-w-[400px] md:max-w-none">
          <Box className="bg-green-500 bg-opacity-20 rounded-md p-3 hover:bg-opacity-90 transition-all duration-200">
            <Text as="span" className="font-bold text-gray-800">
              Frontend:
            </Text>{' '}
            HTML, CSS3, JavaScript, SCSS, SASS, Bootstrap, Tailwind CSS, Next.js
          </Box>

          <Box className="bg-green-500 bg-opacity-20 rounded-md p-3 hover:bg-opacity-90 transition-all duration-200">
            <Text as="span" className="font-bold text-gray-800">
              Backend:
            </Text>{' '}
            PHP (Laravel), PostgreSQL, MySQL, AJAX (Intermediate), NestJS
          </Box>

          <Box className="bg-green-500 bg-opacity-20 rounded-md p-3 hover:bg-opacity-90 transition-all duration-200">
            <Text as="span" className="font-bold text-gray-800">
              Frameworks:
            </Text>{' '}
            Node.js, jQuery, Vue.js, Django
          </Box>

          <Box className="bg-green-500 bg-opacity-20 rounded-md p-3 hover:bg-opacity-90 transition-all duration-200">
            <Text as="span" className="font-bold text-gray-800">
              Applications:
            </Text>{' '}
            Figma, Sketch, Adobe XD, Photoshop
          </Box>

          <Box className="bg-green-500 bg-opacity-20 rounded-md p-3 hover:bg-opacity-90 transition-all duration-200">
            <Text as="span" className="font-bold text-gray-800">
              Data Science & Tools:
            </Text>{' '}
            Pandas, NumPy, Matplotlib, Seaborn, Plotly, Scikit-learn
          </Box>

          <Box className="bg-green-500 bg-opacity-20 rounded-md p-3 hover:bg-opacity-90 transition-all duration-200">
            <Text as="span" className="font-bold text-gray-800">
              Languages:
            </Text>{' '}
            C, C++, Python, Java, C#, R, Assembly
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};
