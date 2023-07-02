"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { IconArrowBackUp } from "@tabler/icons-react"

interface Action {
  label: string
  action?: () => void
  subactions?: Record<string, Action>
}

const battleActions: Record<string, Action> = {
  attack: {
    label: "Attack",
    subactions: {
      basic_attack: { label: "Basic Attack", action: () => void 0 },
      special_attack: { label: "Special Attack", action: () => void 0 },
      weapon_skill: { label: "Weapon Skills", action: () => void 0 },
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
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleActionClick = (action: string | null) => {
    setSelectedAction(action)
  }

  const currentActionItems =
    selectedAction && battleActions[selectedAction]
      ? battleActions[selectedAction].subactions
      : battleActions
  return (
    <div className="p-4 flex flex-col border border-cyan-300 w-screen gap-4">
      <div className="flex justify-between">
        <h2>Battle Action Selection</h2>
        {selectedAction && (
          <Button variant={"ghost"} onClick={() => handleActionClick(null)}>
            <IconArrowBackUp />
          </Button>
        )}
      </div>

      <div className=" flex gap-4">
        {Object.entries(currentActionItems ?? {}).map(([key, action]) => (
          <div key={action.label}>
            <Button
              variant={"outline"}
              className="w-full"
              onClick={() => handleActionClick(key)}
            >
              {action.label}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BattleActionsContainer
