import { Clock2, Navigation } from "lucide-react"
import { useEffect, useState } from "react"
import { GitHub, Heading, LinkedIn, Paragraph, TextLink, Twitter } from "."

const Footer = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const links = [
    {
      href: "https://github.com/usernameisleye",
      Icon: GitHub,
      title: "GitHub",
    },
    {
      href: "https://twitter.com/usernameisleye",
      Icon: Twitter,
      title: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/adeleye-adesida-975b27262/",
      Icon: LinkedIn,
      title: "LinkedIn",
    },
  ]
  return (
    <footer className="container flex flex-col items-center gap-12 mt-12 md:gap-24">
      <div id="contact" className="w-full max-w-6xl">
        <Heading typeStyle="heading-3xl">Get in Touch</Heading>
        <Paragraph className="text-muted-foreground mt-4">
          Got a project we could work on together?
        </Paragraph>

        <div className="flex items-center justify-start w-max gap-6 mt-6 md:mt-12">
          {links.map(({ Icon, href }) => (
            <TextLink
              key={href}
              href={href}
              className="p-3 md:p-8 rounded-full bg-muted text-muted-foreground hover:text-foreground"
            >
              <div className="w-10 md:w-20">
                <Icon />
              </div>
            </TextLink>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border h-20 text-muted-foreground w-full">
        <small className="whitespace-nowrap">
          Adesida Leye | &copy; Copyright {new Date().getFullYear()}
        </small>

        <div className="flex flex-wrap items-center justify-end gap-4 text-xs">
          <div className="flex items-center gap-2 select-none hover:text-foreground">
            <span className="font-mono tracking-wider">
              {time.toLocaleTimeString("en-US", {
                timeZone: "Africa/Lagos",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              })}
            </span>
            <Clock2 size={15} />
          </div>

          <TextLink
            href="https://google.com/maps/search/Lagos, Nigeria"
            className="flex items-center gap-2 select-none hover:text-foreground"
          >
            <span className="font-mono tracking-wider text-right">
              Lagos, Nigeria
            </span>
            <Navigation size={15} />
          </TextLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
