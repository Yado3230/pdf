"use client";

import { useEffect, useState } from "react";
import ConfirmationPage from "../components/ConfirmationPage";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ConfirmationPageRoute() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }

  return <ConfirmationPage />;
}
