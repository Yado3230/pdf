"use client";

import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        bgcolor: "white",
      }}
    >
      <CircularProgress sx={{ color: "#2563eb" }} />
    </Box>
  );
};

export default LoadingSpinner;
