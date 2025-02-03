import React from 'react';

interface GradientCircleProps {
  size?: number; 
  strokeWidth?: number; 
  startColor?: string; 
  endColor?: string; 
  fillColor?: string;
  imageUrl?: string; 
  text?: string; 
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  size = 120,
  strokeWidth = 10, 
  startColor = "#8C01D4", 
  endColor = "#3200BF", 
  fillColor = "#10022F",
  imageUrl,
  text
}) => {
  const radius = size / 2 - strokeWidth; 

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
        <clipPath id="circleClip">
          <circle cx={size / 2} cy={size / 2} r={radius} />
        </clipPath>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill={fillColor}
        stroke="url(#gradientStroke)"
        strokeWidth={strokeWidth}
        
      />

      {imageUrl && (
        <image
          href={imageUrl}
          x={size / 2 - 25} 
          y={size / 2 - 25} 
          width={50} 
          height={50} 
          clipPath="url(#circleClip)" 
        />
      )}

      {text && !imageUrl && (
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fill="#fff"
        >
          {text}
        </text>
      )}
    </svg>
  );
};

export default GradientCircle;
