import { UUID } from "crypto"
import { create } from "zustand"
export interface BattleStore {
  selectedCharacter: UUID | null
  onCharacterSelect: (id: UUID) => void
}
export const useBattleStore = create<BattleStore>((set) => ({
  selectedCharacter: null,
  onCharacterSelect: (id) => {
    set((state) => ({ selectedCharacter: id }))
    console.log("character click: ", id)
  },
}))
