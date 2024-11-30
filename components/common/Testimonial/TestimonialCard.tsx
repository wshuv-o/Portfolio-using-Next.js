import React, { useState } from 'react';
import { Box, Text, Image } from '@components/ui';
import { FiExternalLink } from 'react-icons/fi';

const TestimonialCard = ({ testimonial, name, country, imageSrc }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setGradientPosition({ x, y });
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgb(60, 220, 120), rgb(34,197,94))`,
  };

  return (
    <Box onMouseMove={handleMouseMove} className='rounded-lg shadow-md p-4' style={gradientStyle}>
      <div className='flex items-start mb-4'>
        <div className='w-32 rounded-full overflow-hidden'>
          {/* Adjust the image width and height to match the container size */}
          <Image src={imageSrc} alt={name} width={16} height={16} className='object-cover' />
        </div>
        <div className='ml-4'>
          <Text as='h2' fontWeight='medium' className='text-xl'>
            {name}
          </Text>
          <Text className='text-white leading-3'>{testimonial}</Text>
        </div>
      </div>
      <div className='flex justify-between'>
        <Text className='text-color-[rgb(48,48,48)] text-xs'>{country}</Text>
        <a href={country} target='_blank' rel='noopener noreferrer' className='flex items-center'>
          <FiExternalLink className='ml-1' />
        </a>
      </div>
    </Box>
  );
};

export default TestimonialCard;
