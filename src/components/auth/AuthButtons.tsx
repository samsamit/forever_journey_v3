"use client"

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export const LoginButton = () => {
  const [loading, setloading] = useState(false)
  const login = async () => {
    setloading(true)
    try {
      await signIn("google")
    } catch (e) {
      console.log(e)
    } finally {
      setloading(false)
    }
  }
  return (
    <Button
      disabled={loading}
      variant={"outline"}
      className="w-full"
      onClick={login}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Sign in
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
