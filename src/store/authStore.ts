// src/store/authStore.ts
import { create } from "zustand";
import type { User } from "@/types/user";

interface AuthState {
  user: User | null;
  userIsLoaded: boolean; 
  setUser: (user: User) => void; 
  finishLoading: () => void; 
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  userIsLoaded: false,
  
  setUser: (user) => {
    set({ user, userIsLoaded: true });
  },

  finishLoading: () => {
    set({ userIsLoaded: true });
  },
  
  logout: () => {
    set({ user: null, userIsLoaded: true });
  },
}));