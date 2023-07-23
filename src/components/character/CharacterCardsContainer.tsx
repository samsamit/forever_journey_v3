"use client"

import { Character } from "@prisma/client"
import React from "react"
import CharacterCard from "./CharacterCard"
import { useBattleStore } from "@/stores/battle/battleStore"

interface CharacterCardsContainerProps {
  characters: Character[]
}
const CharacterCardsContainer = ({
  characters,
}: CharacterCardsContainerProps) => {
  const { selectedCharacter, setSelectedCharacter, targetCharacters } =
    useBattleStore()
  return (
    <div className="flex gap-4">
      {characters.map((character) => (
        <CharacterCard
          active={character.id === selectedCharacter}
          targeted={targetCharacters.includes(character.id)}
          character={character}
          onCharacterClick={() => setSelectedCharacter(character.id)}
        />
      ))}
    </div>
  )
}

export default CharacterCardsContainer
