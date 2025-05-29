"use client";
import { Box } from "@mui/material";

export const GradientBackground = () => {
  return (
    <>
      {/* Top left blue gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgb(71,133,238,0.18) 0%, rgba(10, 25, 38, 0.1) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
          transform: "translate(-20%, -20%)",
          pointerEvents: "none",
        }}
      />

      {/* Top right blue gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(10, 25, 38, 0.9) 0%, rgba(10, 25, 38, 0.1) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
          transform: "translate(20%, -20%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom left red gradient */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(203, 68, 121, 0.18) 0%, rgba(10, 25, 38, 0.1) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
          transform: "translate(-20%, 30%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom right red gradient */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(203, 68, 121, 0.18) 0%, rgba(10, 25, 38, 0.1) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
          transform: "translate(20%, 30%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(100%)",
          width: { xs: "200px", md: "400px" },
          height: { xs: "200px", md: "400px" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgb(10,25,38) 0%, rgba(10,25,38,0.2) 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default GradientBackground;
