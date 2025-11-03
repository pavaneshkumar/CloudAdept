import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'onDark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const blackColor = variant === 'onDark' ? '#FFFFFF' : '#1a1a1a';

  return (
    <svg
      viewBox="0 0 520 100"
      className={`h-10 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CloudAdept Systems Logo"
    >
      {/* Icon */}
      <g transform="scale(1.1) translate(0, 5)">
          <path d="M73.8,19.3c-11.1,0-20.2,7.5-21.7,17.9h-22c-7.5,0-13.6,5.9-13.6,13.1c0,7.2,6.1,13.1,13.6,13.1h12.1v9.9 H1.8V19.3c0-10.9,8.8-19.8,19.8-19.8h42.9c2.2,0,4,1.8,4,4v15.8H73.8z" fill={blackColor}/>
          <path d="M72.9,23.1c10.4,0,19.4,7.6,20.9,17.9h14.8c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6H60.4l12.8,30.3h38.8 c11.5,0,20.9-9,20.9-20.1V43.1L103.5,23.1H72.9z" fill="#2067c4"/>
          <rect x="75.6" y="28.5" width="11.5" height="11.5" fill="#2067c4"/>
          <rect x="101.8" y="6.6" width="7.6" height="7.6" fill="#2067c4"/>
          <rect x="117" y="13.3" width="4.8" height="4.8" fill="#2067c4"/>
      </g>
      {/* Text */}
      <text x="175" y="68" fontFamily="Poppins, sans-serif" fontSize="60" fill={blackColor}>
        <tspan fontWeight="600">CloudAdept</tspan>
        <tspan fontWeight="400"> Systems</tspan>
      </text>
    </svg>
  );
}


export default Logo;