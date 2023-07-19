import React from "react"
import { ActionMenu, MenuItem, isAction } from "./BattleActionsContainer"
import { Button } from "@/components/ui/button"

interface BattleMenuActionsProps {
  currentMenu: ActionMenu
  onMenuItemClick: (entrie: [string, MenuItem]) => void
}
const BattleMenuActions = ({
  currentMenu,
  onMenuItemClick,
}: BattleMenuActionsProps) => {
  return (
    <div className=" flex gap-4">
      {Object.entries(currentMenu ?? {}).map((menuEntrie) => {
        const [_, action] = menuEntrie
        return (
          <div key={action.label}>
            <Button
              variant={"outline"}
              className="w-full"
              onClick={() => onMenuItemClick(menuEntrie)}
            >
              {action.label}
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default BattleMenuActions
