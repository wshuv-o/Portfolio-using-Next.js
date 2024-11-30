import { Blog } from '@components/sections';
import { Nav, Page } from '@components/common';

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
      <Nav className='fixed border-b bg-white bg-opacity-75 py-3 backdrop-blur dark:bg-slate-900 dark:bg-opacity-90' />
      <Blog articles={articles} />
    </Page>
  );
}

export async function getStaticProps() {
  const { NEXT_PUBLIC_DEV_TO_USERNAME } = process.env;
  const res = await fetch(
    `https://dev.to/api/articles?username=wshuvo&state=all`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
