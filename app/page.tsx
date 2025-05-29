"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "./components/LoadingSpinner";
import { Box } from "@mui/material";
import GradientBackground from "./components/GradientBackground";

// Client-only wrapper component
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }

  // Using dynamic import to force client-side rendering
  const ClientHomePage = dynamic(() => import("./components/ClientHomePage"), {
    ssr: false,
    loading: () => <LoadingSpinner />,
  });

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
      <ClientHomePage />
    </Box>
  );
}
