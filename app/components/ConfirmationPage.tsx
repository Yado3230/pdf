"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingSpinner from "./LoadingSpinner";

// Client-only wrapper component
const ConfirmationPageWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }

  // Using dynamic import without named import to force client-side rendering
  const ClientConfirmationPage = dynamic(
    () => import("./ClientConfirmationContent"),
    {
      ssr: false,
      loading: () => <LoadingSpinner />,
    }
  );

  return <ClientConfirmationPage />;
};

export default ConfirmationPageWrapper;
