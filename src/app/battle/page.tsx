import BattleActionsContainer from "@/components/battle/actions/BattleActionsContainer"
import BattleContainer from "@/components/battle/BattleContainer"
import { BattleStoreInitializer } from "@/stores/battle/battleStoreInitializert"

import React from "react"

const BattlePage = () => {
  return (
    <>
      <BattleStoreInitializer selectedCharacter={null} />
      <div className="page-container">
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <h1>Battle</h1>
          <BattleContainer />
        </div>
        <BattleActionsContainer />
      </div>
    </>
  )
}
export default BattlePage
