import BattleActionsContainer from "@/components/battle/actions/BattleActionsContainer"
import BattleContainer from "@/components/battle/BattleContainer"
import { BattleStoreInitializer } from "@/stores/battle/battleStoreInitializert"

import React from "react"

const BattlePage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <BattleStoreInitializer selectedCharacter={null} />
      <div className="p-6 flex flex-col gap-4">
        <h1>Battle</h1>
        <BattleContainer />
      </div>
      <BattleActionsContainer />
    </div>
  )
}
export default BattlePage
