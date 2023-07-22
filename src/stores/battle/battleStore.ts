import { BattleState } from "@/types/battle/battleTypes"
import { create } from "zustand"
export interface BattleStore {
  targetCharacters: string[]
  selectedCharacter: string | null
  selectedAction: string | null
  battleState: BattleState
}

interface BattleStoreAction {
  setSelectedCharacter: (id: string | null) => void
  setSelectedAction: (actionKey: string | null) => void
}

export const useBattleStore = create<BattleStore & BattleStoreAction>(
  (set) => ({
    selectedCharacter: null,
    selectedAction: null,
    targetCharacters: [],
    battleState: "SELECT_CHARACTER",
    setSelectedCharacter: (id) => {
      set((state) => {
        if (state.selectedAction) {
          if (!id) return state
          if (state.targetCharacters.includes(id)) {
            return {
              targetCharacters: state.targetCharacters.filter((x) => x !== id),
              battleState: "SELECT_CHARACTER",
            }
          }
          return {
            targetCharacters: [...state.targetCharacters, id],
          }
        }
        const isAlreadySelected = state.selectedCharacter === id
        return {
          selectedCharacter: isAlreadySelected ? null : id,
          battleState: isAlreadySelected ? "SELECT_CHARACTER" : "SELECT_ACTION",
        }
      })
      console.log("character click: ", id)
    },
    setSelectedAction: (actionKey) => {
      set((state) => ({
        selectedAction: actionKey,
        targetCharacters: actionKey ? state.targetCharacters : [],
        battleState: actionKey ? "SELECT_TARGETS" : "SELECT_ACTION",
      }))
      console.log("Action selected: ", actionKey)
    },
  })
)
