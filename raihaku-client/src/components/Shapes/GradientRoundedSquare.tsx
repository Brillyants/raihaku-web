import React, { ReactNode } from 'react';

interface GradientSquareProps {
  width?: number; 
  height?: number;
  strokeWidth?: number; 
  startColor?: string; 
  endColor?: string; 
  fillColor?: string; 
  children?: ReactNode; 
  borderRadius?: number;
}

const GradientSquare: React.FC<GradientSquareProps> = ({
  width = 320,
  height = 270,
  strokeWidth = 10, 
  startColor = "#8C01D4", 
  endColor = "#3200BF", 
  fillColor = "#23085B", 
  borderRadius = 50,
  children
}) => {
  const halfStroke = strokeWidth / 2; 

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: startColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: endColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect
        x={halfStroke} 
        y={halfStroke}
        width={width - strokeWidth} 
        height={height - strokeWidth}
        fill={fillColor} 
        stroke="url(#gradientStroke)"
        strokeWidth={strokeWidth}
        rx={borderRadius} 
        ry={borderRadius} 
      />

      {children && (
        <foreignObject x={halfStroke} y={halfStroke} width={width - strokeWidth} height={height - strokeWidth}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: '#fff', 
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
