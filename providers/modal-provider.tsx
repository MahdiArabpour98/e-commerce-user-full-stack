"use client";

import PreviewModal from "@/components/preview-modal";

import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [ismounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
