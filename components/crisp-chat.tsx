"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e5941031-ba0d-4479-9fa9-2b4e49c5a97a");
  }, []);

  return null;
};
