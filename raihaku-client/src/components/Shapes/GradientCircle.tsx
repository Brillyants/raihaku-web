import React from 'react';

interface GradientCircleProps {
  size?: number; // Size of the circle (default 120)
  strokeWidth?: number; // Stroke width (default 10)
  startColor?: string; // Gradient start color (default #8C01D4)
  endColor?: string; // Gradient end color (default #3200BF)
  imageUrl?: string; // URL of the image to display inside the circle
  text?: string; // Text to display inside the circle
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  size = 120, // Default size is 120
  strokeWidth = 10, // Default stroke width
  startColor = "#8C01D4", // Default gradient start color
  endColor = "#3200BF", // Default gradient end color
  imageUrl,
  text
}) => {
  const radius = size / 2 - strokeWidth; // Circle radius based on size and strokeWidth

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      {/* Define gradient */}
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
        {/* Define circular clip path */}
        <clipPath id="circleClip">
          <circle cx={size / 2} cy={size / 2} r={radius} />
        </clipPath>
      </defs>

      {/* Circle with gradient stroke */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#gradientStroke)"
        strokeWidth={strokeWidth}
      />

      {/* Render image if imageUrl is provided */}
      {imageUrl && (
        <image
          href={imageUrl}
          x={size / 2 - radius} // Center the image horizontally
          y={size / 2 - radius} // Center the image vertically
          width={radius * 2} // Set width to fit the circle
          height={radius * 2} // Set height to fit the circle
          clipPath="url(#circleClip)" // Apply circular clipping path
        />
      )}

      {/* Render text if text is provided */}
      {text && !imageUrl && (
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="16"
          fill="#fff" // White text color for better contrast
        >
          {text}
        </text>
      )}
    </svg>
  );
};

export default GradientCircle;
