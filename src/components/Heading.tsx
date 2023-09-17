import { cn } from "@/lib/utils"
import { FC } from "react"

type TypeStyle =
  | "heading-4xl"
  | "heading-3xl"
  | "heading-2xl"
  | "heading-lg"
  | "heading-md"
  | "heading-base"

interface HeadingProps {
  level?: string
  className?: string
  typeStyle?: TypeStyle
  children: React.ReactNode
}

const Heading: FC<HeadingProps> = ({
  typeStyle = "heading-lg",
  level = "h2",
  className,
  children,
}) => {
  let classNames = ""
  const Tag = `${level}`
  switch (typeStyle) {
    case "heading-4xl":
      classNames = `text-5xl font-medium tracking-snug md:text-8xl`
      break
    case "heading-3xl":
      classNames = `text-3xl font-medium tracking-snug md:text-6xl`
      break
    case "heading-2xl":
      classNames = `text-xl font-medium tracking-normal md:text-2xl`
      break
    case "heading-lg":
      classNames = `text-md font-normal tracking-normal md:text-lg`
      break
    case "heading-md":
      classNames = `text-base font-normal tracking-normal md:text-md`
      break
    case "heading-base":
      classNames = `text-sm font-normal tracking-normal md:text-base`
      break
    default:
      classNames = `text-4xl font-medium tracking-tight md:text-8xl`
  }

  // @ts-ignore
  return <Tag className={cn(classNames, className)}>{children}</Tag>
}

export default Heading
