"use server"

import { getAuthSession } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/lib/db"

export const getUserCharacters = async () => {
  const session = await getAuthSession()
  if (!session) return
  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      characters: {
        where: {
          enemy: false,
        },
      },
    },
  })
  return user?.characters
}
