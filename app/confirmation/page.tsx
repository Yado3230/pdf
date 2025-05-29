"use client";

import { useEffect, useState } from "react";
import ConfirmationPage from "../components/ConfirmationPage";
import LoadingSpinner from "../components/LoadingSpinner";
import { Box } from "@mui/material";
import GradientBackground from "../components/GradientBackground";
import dynamic from "next/dynamic";

// Dynamically import the confetti component to avoid SSR issues
const ConfettiEffect = dynamic(() => import("../components/ConfettiEffect"), {
  ssr: false,
});

export default function ConfirmationPageRoute() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "#0A1926",
        overflow: "hidden",
      }}
    >
      <GradientBackground />
      <ConfettiEffect />
      <ConfirmationPage />
    </Box>
  );
}
