import React, { ReactNode } from 'react';

interface GradientSquareProps {
  width?: number; // Size of the square (default 120)
  height?: number;
  strokeWidth?: number; // Stroke width (default 10)
  startColor?: string; // Gradient start color (default #8C01D4)
  endColor?: string; // Gradient end color (default #3200BF)
  fillColor?: string; // Fill color for the square (default #23085B)
  children?: ReactNode; // Accept children (h3 and p elements)
  borderRadius?: number;
}

const GradientSquare: React.FC<GradientSquareProps> = ({
  width = 320, // Default size is 120
  height = 270,
  strokeWidth = 10, // Default stroke width
  startColor = "#8C01D4", // Default gradient start color
  endColor = "#3200BF", // Default gradient end color
  fillColor = "#23085B", // Default fill color
  borderRadius = 50,
  children
}) => {
  const halfStroke = strokeWidth / 2; // Half stroke width for position adjustments

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      {/* Define gradient */}
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Square with gradient stroke */}
      <rect
        x={halfStroke} // Position with respect to stroke width
        y={halfStroke}
        width={width - strokeWidth} // Adjust size based on stroke width
        height={height - strokeWidth}
        fill={fillColor} // Fill color for the square
        stroke="url(#gradientStroke)" // Gradient stroke
        strokeWidth={strokeWidth}
        rx={borderRadius} // Set rounded corners with radius
        ry={borderRadius} // Set rounded corners with radius
      />

      {/* Render children (h3 and p elements) */}
      {children && (
        <foreignObject x={halfStroke} y={halfStroke} width={width - strokeWidth} height={height - strokeWidth}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: '#fff', // White text color for contrast
              textAlign: 'center',
            }}
          >
            {children}
          </div>
        </foreignObject>
      )}
    </svg>
  );
};

export default GradientSquare;
