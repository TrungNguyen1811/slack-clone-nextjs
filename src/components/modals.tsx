"use client";
import { CreateWorkspaceModel } from "@/app/features/workspaces/component/create-workspace-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <CreateWorkspaceModel />
    </>
  );
};
