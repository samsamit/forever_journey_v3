import BattleActionsContainer from "@/components/battle/BattleActionsConteiner"
import BattleContainer from "@/components/battle/BattleContainer"
import { useBattleStore } from "@/stores/battle/battleStore"
import { BattleStoreInitializer } from "@/stores/battle/battleStoreInitializert"

import React from "react"

const BattlePage = () => {
  useBattleStore.setState({ selectedCharacter: null })
  console.log("renders")
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
