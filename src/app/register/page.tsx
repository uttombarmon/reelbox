"use client";

import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
// 1. Import Card components for title/description area
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    // Responsive Layout:
    // flex and min-h-screen center the content on all devices
    // p-4 (small), sm:p-6, lg:p-8 (larger) provide responsive padding
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8 bg-muted">
      {/* Responsive Width: w-full for small, max-w-sm/md for medium screens */}
      <div className="w-full max-w-sm md:max-w-md">
        {/* Title Section using CardHeader for style consistency */}
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl font-bold">
            Create an Account
          </CardTitle>
          <CardDescription>
            Enter your details below to create your movie management account.
          </CardDescription>
        </CardHeader>

        <RegisterForm />

        {/* Footer Link using shadcn text styles */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
