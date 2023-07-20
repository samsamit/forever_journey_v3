import { Character } from "@/types/character/characterType"
import { randomUUID } from "crypto"

const basicAttack: Skill = {
  name: "Basic attack",
  targets: 1,
  targetType: "ENEMY",
  baseDamage: 10,
}

export const testCharacter1: Character = {
  id: randomUUID(),
  name: "character1",
  skills: [basicAttack],
}

export const testEnemy1: Character = {
  id: randomUUID(),
  name: "enemy",
  skills: [basicAttack],
}
