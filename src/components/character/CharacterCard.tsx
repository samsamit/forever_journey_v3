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
  const { onCharacterSelect, selectedCharacter } = useBattleStore()
  return (
    <Card
      className={`w-fit hover:bg-slate-500 cursor-pointer ${
        selectedCharacter === id && "border-green-500"
      }`}
      // onClick={() => () => startTransition(() => selectCharacter(id))}
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default CharacterCard
