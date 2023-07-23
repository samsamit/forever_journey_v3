"use client"
import { Character } from "@prisma/client"
import React, { useState, useTransition } from "react"
import CharacterCard from "../character/CharacterCard"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { handleOngoingBattleState } from "../../../queries/adventurePlanner/ongoingBattleStateQueries"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface PartySelectProps {
  characters: Character[]
}
const PartySelect = ({ characters }: PartySelectProps) => {
  const [selectedPartyIds, setSelectedPartyIds] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const handleCharacterClick = (id: string) => {
    setSelectedPartyIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      return prev.concat(id)
    })
  }
  const selectedParty = characters.filter((char) =>
    selectedPartyIds.includes(char.id)
  )
  const filteredCharacters = characters.filter(
    (char) => !selectedPartyIds.includes(char.id)
  )

  const onPartyReady = async () => {
    startTransition(() =>
      handleOngoingBattleState({ party: selectedParty }).finally(() =>
        router.push("/battle")
      )
    )
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col w-full px-4 min-h-[150px]">
        <h2>Selected party:</h2>
        {selectedParty.map((character) => (
          <CharacterCard
            onCharacterClick={handleCharacterClick}
            character={character}
          />
        ))}
      </div>
      <Separator />
      <div className="flex flex-col w-full px-4 min-h-[150px]">
        <h2>All characters:</h2>
        {filteredCharacters.map((character) => (
          <CharacterCard
            onCharacterClick={handleCharacterClick}
            character={character}
          />
        ))}
      </div>
      <Button onClick={onPartyReady}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Party
        ready
      </Button>
    </div>
  )
}

export default PartySelect
