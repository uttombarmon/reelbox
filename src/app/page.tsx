"use client";
import { useUser } from "@/hooks/useUser";

export default function NavigationMenu() {
  const { user, isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return <div>...</div>;
  }

  if (isAuthenticated) {
    return (
      <nav>
        <span>Welcome back, {user?.username}!</span>
        {/* The 'user?' is optional here since isAuthenticated ensures it exists */}
        <button
          onClick={() => {
            /* call logout function from useAuth */
          }}
        >
          Logout
        </button>
      </nav>
    );
  }

  return (
    <nav>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </nav>
  );
}
