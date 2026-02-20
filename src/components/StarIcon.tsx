// src/components/Icons.tsx
import React from "react";

interface StarIconProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export const StarIcon = ({
  className = "w-6 h-6",
  color = "currentColor",
  strokeWidth = 1,
}: StarIconProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
