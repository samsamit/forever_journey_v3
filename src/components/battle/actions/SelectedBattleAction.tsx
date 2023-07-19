import { Button } from "@/components/ui/button"
import React from "react"

interface SelectedBattleActionProps {
  selectedAction: string | null
  onConfirmAction: () => void
  onCancelAction: () => void
}
const SelectedBattleAction = ({
  selectedAction,
  onConfirmAction,
  onCancelAction,
}: SelectedBattleActionProps) => {
  return (
    <div className="flex gap-4 items-center">
      <p className="leading-none">SelectedAction: {selectedAction}</p>
      <Button variant={"outline"} onClick={onConfirmAction}>
        Confirm
      </Button>
      <Button variant={"outline"} onClick={onCancelAction}>
        Cancel
      </Button>
    </div>
  )
}

export default SelectedBattleAction
