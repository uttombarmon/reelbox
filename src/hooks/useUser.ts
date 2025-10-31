
import { useAuthStore } from "@/store/authStore";
import type { User } from "@/types/user";

interface UseUserResult {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useUser = (): UseUserResult => {
  const user = useAuthStore((state) => state.user);
  const userIsLoaded = useAuthStore((state) => state.userIsLoaded);

  return {
    user,
    isAuthenticated: !!user, // True if user object exists
    isLoading: !userIsLoaded, // True if initial check is not finished
  };
};
