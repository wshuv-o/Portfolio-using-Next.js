import { VscMenu } from 'react-icons/vsc';

interface MenuButtonProps {
  onOpen: () => void; // Ensure the type matches your callback
  color?: string; // Optional prop for color
  className?: string; // Optional prop for custom className
}

export const MenuButton: React.FC<MenuButtonProps> = ({ onOpen, color, className }) => {
  const buttonStyle = {
    color: color || 'rgb(79,194,94)',
  };

  return (
    <button
      aria-label='Menu button'
      className={`transform hover:scale-90 ${className || ''}`} // Include className if provided
      onClick={onOpen}
      style={buttonStyle}
    >
      <VscMenu className='h-6 w-auto' />
    </button>
  );
};
