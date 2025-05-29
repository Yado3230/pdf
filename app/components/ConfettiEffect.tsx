"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

const ConfettiEffect = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Set window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial size
    updateWindowSize();

    // Update on resize
    window.addEventListener("resize", updateWindowSize);

    // Hide confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
      clearTimeout(timer);
    };
  }, []);

  if (!showConfetti) return null;

  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={500}
      gravity={0.15}
      colors={[
        "#1e90ff", // Blue
        "#d53f8c", // Pink
        "#f59e0b", // Gold
        "#0A1926", // Dark blue
        "#ffffff", // White
        "#3b82f6", // Light blue
      ]}
    />
  );
};

export default ConfettiEffect;
