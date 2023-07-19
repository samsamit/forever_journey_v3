"use client"

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "../ui/button"

export const LoginButton = () => {
  return (
    <Button variant={"outline"} className="w-full" onClick={() => signIn()}>
      Sign in
    </Button>
  )
}

export const RegisterButton = () => {
  return (
    <Button variant={"outline"} asChild>
      <Link href="/register" className="w-full">
        Register
      </Link>
    </Button>
  )
}

export const LogoutButton = () => {
  return (
    <Button variant={"outline"} className="w-full" onClick={() => signOut()}>
      Sign Out
    </Button>
  )
}

export const ProfileButton = () => {
  return (
    <Button variant={"outline"} asChild>
      <Link href="/profile">Profile</Link>
    </Button>
  )
}
