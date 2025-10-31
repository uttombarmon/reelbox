// src/hooks/useInitializeAuth.ts
import { useEffect } from "react";
import { api } from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";

export const useReqireAuth = () => {
  const { user, setUser, finishLoading, userIsLoaded } = useAuthStore();

  useEffect(() => {
    if (userIsLoaded || user) return;

    const checkAuth = async () => {
      try {
        // GET /auth/me checks the attached HTTP-only cookie
        const response = await api.get("/auth/me");
        setUser(response.data);
      } catch (error: unknown) {
        // Session invalid or not found, user remains null.
        console.log("session: ", error);
      } finally {
        finishLoading();
      }
    };

    checkAuth();
  }, [setUser, finishLoading, userIsLoaded, user]);

  return { userIsLoaded };
};
