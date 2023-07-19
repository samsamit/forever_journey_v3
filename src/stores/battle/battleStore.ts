import { UUID } from "crypto"
import { create } from "zustand"
export interface BattleStore {
  selectedCharacter: UUID | null
  selectedAction: string | null
  onCharacterSelect: (id: UUID | null) => void
  onActionSelect: (actionKey: string | null) => void
}
export const useBattleStore = create<BattleStore>((set) => ({
  selectedCharacter: null,
  selectedAction: null,
  onCharacterSelect: (id) => {
    set((state) => ({ selectedCharacter: id }))
    console.log("character click: ", id)
  },
  onActionSelect: (actionKey) => {
    set((state) => ({ selectedAction: actionKey }))
    console.log("Action selected: ", actionKey)
  },
}))
