import {
  LoginButton,
  LogoutButton,
  ProfileButton,
} from "@/components/auth/AuthButtons"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center p-24">
      <h1>Home</h1>
      <div className="flex flex-col gap-4 w-3/12">
        {session ? (
          <>
            <LogoutButton />
            <ProfileButton />
            <Button asChild>
              <Link href="/battle">Battle</Link>
            </Button>
            <Button asChild>
              <Link href="/adventurePlanner">Start adventure</Link>
            </Button>
            <Button asChild>
              <Link href="/admin">Admin</Link>
            </Button>
          </>
        ) : (
          <>
            <LoginButton />
          </>
        )}
      </div>
    </main>
  )
}
