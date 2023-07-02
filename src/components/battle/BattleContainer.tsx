import { testCharacter1, testEnemy1 } from "@/testing/characterTest"
import React from "react"
import CharacterCard from "../character/CharacterCard"

const BattleContainer = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <CharacterCard character={testCharacter1} />
      <h2>VS</h2>
      <CharacterCard character={testEnemy1} />
    </div>
  )
}

export default BattleContainer
