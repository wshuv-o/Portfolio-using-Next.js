import { Container, Text, Link } from '@components/ui';

export const Copyright = () => (
  <Container className='flex flex-col justify-between border-t  bg-white border-slate-300 py-5 dark:border-slate-700 md:flex-row'>
    <Text fontSize='sm'>
      Copyright © {new Date().getFullYear()} | All rights reserved.
    </Text>
    <Text fontSize='sm'>
      Made by{' '}
      <Link
        href='/'
        className='font-medium text-green-500 hover:text-green-600 dark:text-green-500'
      >
        Mohammed Akash
      </Link>
      .
    </Text>
  </Container>
);
