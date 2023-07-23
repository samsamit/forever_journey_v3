import { Character } from "@prisma/client"

export type BaseCharacter = Omit<Character, "id" | "ownerId">
