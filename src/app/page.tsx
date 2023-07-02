import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-1 items-center p-24">
      <h1>Home</h1>
      <Button variant={"outline"} asChild>
        <Link href="/battle">Battle</Link>
      </Button>
    </main>
  )
}
