import { Link } from '@components/ui';

export const Logo = ({ className = '' }) => (
  <Link
    href='/'
    className={`${className} font-heading transform text-3xl font-medium text-green-500 hover:scale-95 hover:text-green-600 dark:text-green-500`}
  >
    {''}
  </Link>
);
