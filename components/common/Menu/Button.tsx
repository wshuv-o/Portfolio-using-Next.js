import { VscMenu } from 'react-icons/vsc';

export const MenuButton = ({ onOpen, color }) => {
  const buttonStyle = {
    color: color || 'rgb(79,194,94)', 
  };

  return (
    <button
      aria-label='Menu button'
      className='transform hover:scale-90'
      onClick={onOpen}
      style={buttonStyle}
    >
      <VscMenu className='h-6 w-auto' />
    </button>
  );
};
