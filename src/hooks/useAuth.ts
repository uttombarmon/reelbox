// src/hooks/useAuth.ts
import { api } from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";
import type { User } from "@/types/user";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { setUser, logout } = useAuthStore();
  const router = useRouter();
  const login = async (email: string, password: string) => {
    const res = await api.post<{ user: User }>("/auth/login", {
      email,
      password,
    });
    setUser(res.data.user);
    router.push("/");
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const res = await api.post<{ user: User }>("/auth/register", {
      username,
      email,
      password,
    });
    console.log("user: ", res.data.user);
    setUser(res.data.user);
    router.push("/");
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout API failed:", error);
    }

    logout();
    router.push("/login");
  };

  return { login, register, logout: handleLogout };
};
