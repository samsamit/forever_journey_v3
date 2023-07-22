"use client"

import React from "react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { useBattleStore } from "@/stores/battle/battleStore"
import { Character } from "@prisma/client"

interface CharacterCardProps {
  character: Character
  onCharacterClick?: (id: string) => void
}
const CharacterCard = ({ character, onCharacterClick }: CharacterCardProps) => {
  const { name, id } = character
  return (
    <Card
      className={`w-fit ${
        onCharacterClick ? "hover:bg-slate-500 cursor-pointer" : ""
      }`}
      onClick={() => onCharacterClick && onCharacterClick(id)}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default CharacterCard
