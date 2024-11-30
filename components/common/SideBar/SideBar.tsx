import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillMail,
  AiFillProfile,
  AiFillBulb,
} from 'react-icons/ai';

import { Box, Link, Text } from '@components/ui';
import s from './SideBar.module.scss';
import { Logo } from '../Logo/Logo';
import { BsGlobe, BsPeopleFill } from 'react-icons/bs';
import { BiBrain, BiGlobe, BiSun } from 'react-icons/bi';
import { RiGlobeFill, RiProfileFill } from 'react-icons/ri';
import { FaBrain } from 'react-icons/fa';

export const SideBar = () => {
  const links = [
    {
      href: 'https://github.com/byteverseit',
      Icon: BsPeopleFill,
      title: 'Github',
    },    
    {
      href: 'byteverseit@gmail.com',
      Icon: AiFillMail,
      title: 'Email',
    },
    {
      href: 'https://twitter.com/byteverseit',
      Icon: BsGlobe,
      title: 'Twitter',
    },
    {
      href: 'https://www.linkedin.com/in/byteverseit/',
      Icon: RiProfileFill,
      title: 'Linkedin',
    },
    {
      href: 'https://www.linkedin.com/in/byteverseit/',
      Icon: AiFillBulb,
      title: 'Linkedin',
    },
  ];

  return (
    <Box className={s.root}>
      <Box className={s.main}>
        <Logo />
        <Box className={s.bar}>
          <Text as='h1' casing='uppercase' className='font-heading mb-1, text-upper'>
            HOME
          </Text>
        </Box>

        <Box>
          {links.map(({ href, Icon, title }) => (
            <Link
              key={href}
              href={href}
              target='_blank'
              className='mb-6 block'
            >
              <Icon className={s.icon} />
              <span className='sr-only'>Connect with Akash on {title}</span>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
