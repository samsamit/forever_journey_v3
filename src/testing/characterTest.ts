import { Character } from "@/types/character/characterType"
import { randomUUID } from "crypto"

export const testCharacter1: Character = {
  id: randomUUID(),
  name: "character1",
}

export const testEnemy1: Character = {
  id: randomUUID(),
  name: "enemy",
}
