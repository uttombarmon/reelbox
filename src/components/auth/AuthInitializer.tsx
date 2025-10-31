"use client";

import { useReqireAuth } from "@/hooks/useReqireAuth";
import { useAuthStore } from "@/store/authStore";

export default function AuthInitializer() {
  useReqireAuth();
  const userIsLoaded = useAuthStore((state) => state.userIsLoaded);
  if (!userIsLoaded) {
    return null;
  }
  return null;
}
