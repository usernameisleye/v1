import { cn } from "@/lib/utils"
import { FC } from "react"

interface TextLinkProps {
  href: string
  target?: string
  className?: string
  children: React.ReactNode
}

const TextLink: FC<TextLinkProps> = ({
  href,
  children,
  className,
  target = "_blank",
}) => {
  return (
    <>
      {" "}
      <a
        href={href}
        target={target}
        rel="noreferrer noopener"
        className={cn("", className)}
      >
        {children}
      </a>
    </>
  )
}

export default TextLink
