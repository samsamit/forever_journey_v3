"use server"

import { getAuthSession } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/lib/db"

export const createCharacter = async (name: string) => {
  const session = await getAuthSession()
  const res = await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      characters: {
        create: [
          {
            name,
            enemy: false,
          },
        ],
      },
    },
  })
  console.log("user updated: ", res)
}
