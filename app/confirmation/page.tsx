"use client";

import { useEffect, useState } from "react";
import ConfirmationPage from "../components/ConfirmationPage";
import LoadingSpinner from "../components/LoadingSpinner";
import { Box } from "@mui/material";
import GradientBackground from "../components/GradientBackground";

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
        bgcolor: "#05070A",
        overflow: "hidden",
      }}
    >
      <GradientBackground />
      <ConfirmationPage />
    </Box>
  );
}
