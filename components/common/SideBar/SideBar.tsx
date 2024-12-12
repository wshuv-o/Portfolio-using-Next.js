import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';

export const SideBar = ({ isHero = Boolean }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="h-full flex bg-[rgb(29,29,29)] flex-col items-between justify-between p-4">
      <h2 className={!isHero ? "origin-top-left rotate-90 transform translate-x-11 inline-block relative text-4xl font-black uppercase opacity-50 duration-300" : "inline-block relative text-4xl font-black uppercase opacity-80 duration-300"}>
        <span className={!isHero ? 'rotate-180 inline-block transform' : 'inline-block transform'}>
          Home
        </span>
      </h2>
      <ul className={!isHero ? 'items-center flex flex-col gap-3 w-full' : 'flex flex-col gap-3 w-full'}>
        <li>
          <a href="/#top" onClick={() => scrollToSection('about')} className="flex items-center gap-3 duration-300 opacity-80 hover:opacity-100">
            <BiHomeAlt className='h-9 w-9 border border-gray-600 p-1.5 rounded-md' />
            <span className={!isHero ? 'hidden' : '' + ' inline-block text-lg whitespace-nowrap'}>
              Home
            </span>
          </a>
        </li>
        <li>
          <a href="/#about" onClick={() => scrollToSection('about')} className="flex items-center gap-3 duration-300 opacity-80 hover:opacity-100">
            <BiCodeAlt className='h-9 w-9 border border-gray-600 p-1.5 rounded-md' />
            <span className={!isHero ? 'hidden' : '' + ' inline-block text-lg whitespace-nowrap'}>
              My Skills
            </span>
          </a>
        </li>
        <li>
          <a href="/#portfoilo" onClick={() => scrollToSection('portfolio')} className="flex items-center gap-3 duration-300 opacity-80 hover:opacity-100">
            <AiOutlineAppstoreAdd className='h-9 w-9 border border-gray-600 p-1.5 rounded-md' />
            <span className={!isHero ? 'hidden' : '' + ' inline-block text-lg whitespace-nowrap'}>
              Portfolio
            </span>
          </a>
        </li>
        <li>
          <a href="/#testimonial" onClick={() => scrollToSection('testimonial')} className="flex items-center gap-3 duration-300 opacity-80 hover:opacity-100">
            <FaUserCheck className='h-9 w-9 border border-gray-600 p-1.5 rounded-md' />
            <span className={!isHero ? 'hidden' : '' + ' inline-block text-lg whitespace-nowrap'}>
              Reviews
            </span>
          </a>
        </li>
        <li>
          <a href="/#subscribe" onClick={() => scrollToSection('subscribe')} className="flex items-center gap-3 duration-300 opacity-80 hover:opacity-100">
            <FiMail className='h-9 w-9 border border-gray-600 p-1.5 rounded-md' />
            <span className={!isHero ? 'hidden' : '' + ' inline-block text-lg whitespace-nowrap'}>
              Contact
            </span>
          </a>
        </li>
        <li>
          <a href="/#latest" onClick={() => scrollToSection('latest')} className="flex items-center gap-3 duration-300 opacity-80 hover:opacity-100">
            <BsPencil className='h-9 w-9 border border-gray-600 p-1.5 rounded-md' />
            <span className={!isHero ? 'hidden' : '' + ' inline-block text-lg whitespace-nowrap'}>
              Blog
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
