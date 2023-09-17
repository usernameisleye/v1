import { cn } from "@/lib/utils"
import { FC } from "react"

type TypeStyle = "body-xl" | "body-lg" | "body-base" | "body-sm"

interface ParagraphProps {
  className?: string
  typeStyle?: TypeStyle
  children: React.ReactNode
}

const Paragraph: FC<ParagraphProps> = ({
  typeStyle = "body-base",
  className,
  children,
}: ParagraphProps) => {
  let classNames = ""
  switch (typeStyle) {
    case "body-xl":
      classNames = `text-lg font-regular leading-8 md:text-xl`
      break
    case "body-lg":
      classNames = `text-md font-regular leading-8 md:text-lg`
      break
    case "body-base":
      classNames = `text-base leading-7`
      break
    case "body-sm":
      classNames = `text-sm leading-7`
      break
    default:
      classNames = `text-lg font-regular leading`
  }

  return <p className={cn(classNames, className)}>{children}</p>
}

export default Paragraph
