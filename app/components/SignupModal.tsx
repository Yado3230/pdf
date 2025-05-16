"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  Stack,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    text: {
      dark: string;
      medium: string;
      light: string;
    };
    bg: {
      main: string;
      card: string;
      highlight: string;
    };
    border: string;
  };
}

const SignupModal: React.FC<SignupModalProps> = ({
  open,
  onClose,
  onSubmitSuccess,
  colors,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "" };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful form submission
      console.log("Form submitted:", formData);
      onSubmitSuccess();

      // Reset form
      setFormData({ name: "", email: "" });
      onClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="signup-modal"
      aria-describedby="modal-for-resource-signup"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: "600px" },
          maxHeight: "90vh",
          overflow: "auto",
          bgcolor: colors.bg.card,
          borderRadius: 3,
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          p: { xs: 3, sm: 5 },
          outline: "none",
          border: `1px solid ${colors.border}`,
        }}
      >
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: colors.primary,
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
              letterSpacing: "-0.02em",
            }}
            id="signup-modal"
          >
            Get Free Resources Now
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.light,
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.5,
              maxWidth: "90%",
              mx: "auto",
            }}
          >
            Enter your details below for instant access to our valuable webinar
            resources
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3.5} sx={{ mb: 4 }}>
            <Box>
              <TextField
                required
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.name}
                placeholder="Enter your full name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon sx={{ color: colors.primary }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: colors.border,
                      borderWidth: "1px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.primary,
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: colors.primary,
                    },
                    fontSize: "1.1rem",
                    py: 0.8,
                    borderRadius: 1.5,
                    backgroundColor: "rgba(248, 250, 252, 0.5)",
                    color: colors.text.dark,
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    "&.Mui-focused": {
                      color: colors.primary,
                      fontWeight: 500,
                    },
                  },
                  "& input::placeholder": {
                    opacity: 0.7,
                    color: colors.text.light,
                  },
                  mb: 0.5,
                }}
              />
              {errors.name && (
                <FormHelperText error sx={{ fontSize: "0.85rem", ml: 1.5 }}>
                  {errors.name}
                </FormHelperText>
              )}
            </Box>

            <Box>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                error={!!errors.email}
                placeholder="your.email@example.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon sx={{ color: colors.primary }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: colors.border,
                      borderWidth: "1px",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.primary,
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: colors.primary,
                    },
                    fontSize: "1.1rem",
                    py: 0.8,
                    borderRadius: 1.5,
                    backgroundColor: "rgba(248, 250, 252, 0.5)",
                    color: colors.text.dark,
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    "&.Mui-focused": {
                      color: colors.primary,
                      fontWeight: 500,
                    },
                  },
                  "& input::placeholder": {
                    opacity: 0.7,
                    color: colors.text.light,
                  },
                  mb: 0.5,
                }}
              />
              {errors.email && (
                <FormHelperText error sx={{ fontSize: "0.85rem", ml: 1.5 }}>
                  {errors.email}
                </FormHelperText>
              )}
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: colors.secondary,
                color: "white",
                fontWeight: 600,
                py: 2,
                fontSize: "1.1rem",
                textTransform: "none",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#d02d53", // Darker shade of secondary
                },
                mt: 2,
                boxShadow: `0 4px 12px rgba(231, 56, 97, 0.3)`,
              }}
            >
              Submit & Get Access
            </Button>
          </Stack>
        </form>

        <Typography
          variant="body2"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 3,
            color: colors.text.light,
          }}
        >
          We respect your privacy and will never share your information.
        </Typography>
      </Box>
    </Modal>
  );
};

export default SignupModal;
