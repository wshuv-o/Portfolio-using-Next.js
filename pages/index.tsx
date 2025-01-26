import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  About,
  Hero,
  LatestBlogs,
  
  Works,
} from '@components/sections';
import { Footer, Nav, Page } from '@components/common';
import { Box } from '@components/ui';
import { VscChromeClose } from 'react-icons/vsc';

export default function Home({ articles }) {
  const [schedule, setSchedule] = useState(false);
  const router = useRouter();
  const { action } = router.query;

  useEffect(() => {
    if (action === 'schedule') {
      setSchedule(true);
    }
  }, [router, action]);

  return (
    <Page
      title='Wahid Shuvo | Web Developer'
      description='I am a professional web developer with a great passion for programming. I am graduating and I worked on projects .'
      url='/'
      keywords='Shuvo'
      image='/images/shuvo.png'
      canonicalURL='#'
    >
      <Nav className='absolute py-3 md:py-5' />

      <Hero />
      <About />
      <LatestBlogs articles={articles} />
      <Works />
      <Footer />
    </Page>
  );
}

export async function getStaticProps() {
  const { NEXT_PUBLIC_DEV_TO_USERNAME } = process.env;
  const res = await fetch(
    `https://dev.to/api/articles?username=wshuvo&per_page=5&state=all`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
