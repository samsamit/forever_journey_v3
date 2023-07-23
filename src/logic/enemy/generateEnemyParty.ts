import { BaseCharacter } from "@/types/types"

export const generateEnemyParty = (): BaseCharacter[] => {
  const party: BaseCharacter[] = [
    {
      name: "Enemy 1",
    },
    {
      name: "Enemy 2",
    },
    {
      name: "Enemy 3",
    },
  ]
  return party
}
