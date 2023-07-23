"use server"

import { getAuthSession } from "@/app/api/auth/[...nextauth]/route"
import { db } from "@/lib/db"
import { generateEnemyParty } from "@/logic/enemy/generateEnemyParty"
import { BaseCharacter } from "@/types/types"
import { Character } from "@prisma/client"

interface HandleOngoingBattleStateProps {
  party: Character[]
}
export const handleOngoingBattleState = async ({
  party,
}: HandleOngoingBattleStateProps) => {
  const enemyParty = generateEnemyParty()
  const ongoingBattleState: OngoingBattleStateProps = {
    party,
    enemyParty,
  }
  await setOngoingBattleState(ongoingBattleState)
}

interface OngoingBattleStateProps {
  party: BaseCharacter[]
  enemyParty: BaseCharacter[]
}
const setOngoingBattleState = async ({
  enemyParty,
  party,
}: OngoingBattleStateProps) => {
  const session = await getAuthSession()
  const userId = session.user.id
  console.log(session.user)
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      ongoingBattle: {
        create: {
          playerParty: {
            connect: party.map((char) => ({
              ...char,
            })) as Character[],
          },
          enemyParty: {
            create: enemyParty.map((char) => ({
              ...char,
              userId: userId,
              enemy: true,
            })) as Character[],
          },
        },
      },
    },
  })
}
