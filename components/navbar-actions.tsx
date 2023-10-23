"use client";

import { useState, useEffect } from "react";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full px-4 py-2 gap-x-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-auto text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
