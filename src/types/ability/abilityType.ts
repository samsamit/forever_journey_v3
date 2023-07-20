interface BaseAbility {
  name: string
  targets: number
  targetType: TargetType
  baseDamage: number
}

type TargetType = "ALL" | "ENEMY" | "TEAM"

interface Skill extends BaseAbility {}
