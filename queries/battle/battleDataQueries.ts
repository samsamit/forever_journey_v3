"use server"

import { getAuthSession } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/lib/db"

export const getBattleState = async () => {
  const session = await getAuthSession()
  return await db.ongoingBattle.findUnique({
    where: {
      userId: session.user.id,
    },
    include: {
      enemyParty: true,
      playerParty: true,
    },
  })
}
