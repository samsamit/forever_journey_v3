"use client"

import React from "react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Character } from "@/types/character/characterType"
import { useBattleStore } from "@/stores/battle/battleStore"

interface CharacterCardProps {
  character: Character
}
const CharacterCard = (props: CharacterCardProps) => {
  const { name, id } = props.character
  const {
    setSelectedCharacter: onCharacterSelect,
    selectedCharacter,
    targetCharacters,
  } = useBattleStore()
  console.log(targetCharacters)
  return (
    <Card
      className={`w-fit hover:bg-slate-500 cursor-pointer ${
        selectedCharacter === id && "border-green-500"
      }
      ${targetCharacters.includes(id) && "outline outline-amber-500"}`}
      onClick={() => onCharacterSelect(id)}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default CharacterCard
