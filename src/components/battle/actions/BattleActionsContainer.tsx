"use client"

import React, { FC, useState } from "react"
import { Button } from "../../ui/button"
import { IconArrowBackUp } from "@tabler/icons-react"
import { useBattleStore } from "@/stores/battle/battleStore"
import BattleMenuActions from "./BattleMenuActions"
import SelectedBattleAction from "./SelectedBattleAction"

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

  const {
    selectedAction,
    setSelectedAction: onActionSelect,
    battleState,
  } = useBattleStore()

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

  const MenuContent: FC = () => {
    switch (battleState) {
      case "SELECT_CHARACTER":
        return (
          <div className="p-2 flex justify-center">
            <h2>Select a character</h2>
          </div>
        )
      case "SELECT_ACTION":
        return (
          <BattleMenuActions
            onMenuItemClick={onMenuItemClick}
            currentMenu={currentActionItems()}
          />
        )
      case "SELECT_TARGETS":
        return (
          <SelectedBattleAction
            selectedAction={selectedAction}
            onConfirmAction={() => void 0}
            onCancelAction={() => onActionSelect(null)}
          />
        )
    }
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
      <MenuContent />
    </div>
  )
}

export default BattleActionsContainer
