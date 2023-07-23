import React from "react"
import CharacterCard from "../../components/character/CharacterCard"
import { Character } from "@prisma/client"
import CharacterCardsContainer from "@/components/character/CharacterCardsContainer"
import { useBattleStore } from "@/stores/battle/battleStore"

interface BattleContainerProps {
  playterParty: Character[]
  enemyParty: Character[]
}
const BattleContainer = ({
  playterParty,
  enemyParty,
}: BattleContainerProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <CharacterCardsContainer characters={playterParty} />
      <h2>VS</h2>
      <CharacterCardsContainer characters={enemyParty} />
    </div>
  )
}

export default BattleContainer
