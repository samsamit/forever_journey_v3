"use client"

import { useRef } from "react"
import { BattleStore, useBattleStore } from "./battleStore"

export const BattleStoreInitializer = ({
  selectedCharacter,
}: Pick<BattleStore, "selectedCharacter">) => {
  const initialized = useRef(false)
  if (!initialized.current) {
    useBattleStore.setState((state) => ({ selectedCharacter }))
    initialized.current = true
  }
  return null
}
