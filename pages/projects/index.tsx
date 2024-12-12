import { Blog, Works } from '@components/sections';
import { Nav, Page } from '@components/common';
import AllWorks from '@components/sections/Work/AllWorks';
import { Footer } from '@components/common';

export default function Home({ articles }) {
  return (
    <Page
      title='Mohammed Akash | Blog'
      description="Akash's thoughts on Web Development, DevOps, and Tech in general."
      url=''
      keywords=''
      image='/images/banner.jpg'
      canonicalURL='/blog'
    >
      {/* <Nav className='fixed border-b bg-white bg-opacity-75 py-3 backdrop-blur dark:bg-slate-900 dark:bg-opacity-90' /> */}
      <AllWorks />
      <Footer/>
    </Page>
  );
}