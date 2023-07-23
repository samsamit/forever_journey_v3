import BattleActionsContainer from "@/app/battle/(actions)/BattleActionsContainer"
import BattleContainer from "@/app/battle/BattleContainer"
import { BattleStoreInitializer } from "@/stores/battle/battleStoreInitializert"

import React from "react"
import { getBattleState } from "../../../queries/battle/battleDataQueries"
import { redirect } from "next/navigation"

const BattlePage = async () => {
  const battleState = await getBattleState()
  console.log(battleState)
  if (!battleState) redirect("/adventurePlanner")
  return (
    <>
      <BattleStoreInitializer selectedCharacter={null} />
      <div className="page-container">
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <h1>Battle</h1>
          <BattleContainer
            enemyParty={battleState.enemyParty}
            playterParty={battleState.playerParty}
          />
        </div>
        <BattleActionsContainer />
      </div>
    </>
  )
}
export default BattlePage
