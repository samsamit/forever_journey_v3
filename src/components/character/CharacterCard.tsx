"use client"

import React from "react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { useBattleStore } from "@/stores/battle/battleStore"
import { Character } from "@prisma/client"

interface CharacterCardProps {
  character: Character
  onCharacterClick?: (id: string) => void
  active?: boolean
  targeted?: boolean
}
const CharacterCard = ({
  character,
  onCharacterClick,
  active,
  targeted,
}: CharacterCardProps) => {
  const { name, id } = character

  return (
    <Card
      className={`w-fit ${
        onCharacterClick && "hover:bg-slate-500 cursor-pointer"
      } 
      ${active && "outline outline-green-400"}
      ${targeted && "border-yellow-400"}`}
      onClick={() => onCharacterClick && onCharacterClick(id)}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default CharacterCard
