import { FC } from "react"

interface SkillProps {
  text: string
}

const Skill: FC<SkillProps> = ({ text }) => {
  return (
    <div className="py-2 px-8 w-fit rounded-full border border-border">
      <span className="text-md text-muted-foreground truncate select-none">
        {text}
      </span>
    </div>
  )
}

export default Skill
