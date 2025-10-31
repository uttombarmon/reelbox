"use client";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export default function NavigationMenu() {
  const { user, isAuthenticated, isLoading } = useUser();
  const { logout } = useAuth();

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
            logout();
          }}
        >
          Logout
        </button>
      </nav>
    );
  }

  return (
    <nav>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </nav>
  );
}
