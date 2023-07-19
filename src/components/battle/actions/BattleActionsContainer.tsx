"use client"

import React, { useState } from "react"
import { Button } from "../../ui/button"
import { IconArrowBackUp } from "@tabler/icons-react"
import { useBattleStore } from "@/stores/battle/battleStore"
import BattleMenuActions from "./BattleMenuActions"

interface MenuAction {
  label: string
  subActions?: Record<string, MenuItem>
}

interface Action {
  label: string
  actionKey: string
}

export type MenuItem = MenuAction | Action
export type ActionMenu = Record<string, MenuItem>

export const isAction = (action: MenuAction | Action): action is Action =>
  Object(action).hasOwnProperty("actionKey")

export const isMenuAction = (
  action: MenuAction | Action
): action is MenuAction => !Object(action).hasOwnProperty("actionKey")

const battleActions: ActionMenu = {
  attack: {
    label: "Attack",
    subActions: {
      basic_attack: { label: "Basic Attack", actionKey: "BASIC" },
      special_attack: { label: "Special Attack", actionKey: "SPECIAL" },
      weapon_skill: { label: "Weapon Skills" },
    },
  },
  defend: {
    label: "Defend",
  },
  skill: {
    label: "Skill",
  },
} as const

const BattleActionsContainer = () => {
  const [selectedMenuAction, setSelectedMenuAction] = useState<string | null>(
    null
  )

  const { selectedAction, onActionSelect } = useBattleStore()

  const onMenuItemClick = ([actionName, action]: [string, MenuItem]) => {
    if (isAction(action)) {
      onActionSelect(action.actionKey)
      setSelectedMenuAction(null)
      return
    }
    setSelectedMenuAction(action.subActions ? actionName : null)
  }

  const currentActionItems = (): ActionMenu => {
    if (!selectedMenuAction) return battleActions
    const selectedMenuItem = battleActions[selectedMenuAction]
    if (isMenuAction(selectedMenuItem))
      return selectedMenuItem?.subActions ?? battleActions
    return battleActions
  }

  return (
    <div className="p-4 flex flex-col border border-cyan-300 w-screen gap-4">
      <div className="flex justify-between items-center">
        <h2>Battle Action Selection</h2>
        {selectedMenuAction && (
          <Button
            className="p-0 h-min"
            variant={"ghost"}
            onClick={() => setSelectedMenuAction(null)}
          >
            <IconArrowBackUp />
          </Button>
        )}
      </div>
      {selectedAction ? (
        <div className="flex gap-4 items-center">
          <p className="leading-none">SelectedAction: {selectedAction}</p>
          <Button variant={"outline"}>Confirm</Button>
          <Button variant={"outline"} onClick={() => onActionSelect(null)}>
            Cancel
          </Button>
        </div>
      ) : (
        <BattleMenuActions
          onMenuItemClick={onMenuItemClick}
          currentMenu={currentActionItems()}
        />
      )}
    </div>
  )
}

export default BattleActionsContainer
