// src/components/ui/auth-buttons.tsx
"use client"
import { signIn, signOut } from "next-auth/react"

export function SignInButton() {
  return (
    <button
      type="button"
      className="px-3 py-2 rounded"
      onClick={() => signIn("google")} // optional: , { callbackUrl: "/" }
    >
      Sign in with Google
    </button>
  )
}

export function SignOutButton() {
  return (
    <button
      type="button"
      className="px-3 py-2 rounded"
      onClick={() => signOut()} // optional: , { callbackUrl: "/" }
    >
      Sign out
    </button>
  )
}
