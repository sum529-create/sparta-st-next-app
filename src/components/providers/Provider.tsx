"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
type Props = {
  children: React.ReactNode;
};
function Provider({ children }: Props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Provider;
