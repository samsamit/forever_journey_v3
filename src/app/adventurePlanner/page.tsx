import React from "react"
import { getUserCharacters } from "../../../queries/character/characterQueries"
import PartySelect from "@/components/partySelect/PartySelect"

const page = async () => {
  const characters = await getUserCharacters()
  if (!characters) return null
  return (
    <div className="page-container gap-4">
      <h1 className="text-xl">Select your party</h1>
      <PartySelect characters={characters} />
    </div>
  )
}

export default page
