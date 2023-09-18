import { FC } from "react"

interface SkillProps {
  text: string
}

const Skill: FC<SkillProps> = ({ text }) => {
  return (
    <div className="w-fit rounded-full border border-border px-8 py-2">
      <span className="text-md select-none truncate text-muted-foreground">
        {text}
      </span>
    </div>
  )
}

export default Skill
