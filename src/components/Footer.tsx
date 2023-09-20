import { Clock2, Navigation } from "lucide-react"
import { useEffect, useState } from "react"
import { AtSign, Heading, LinkedIn, Paragraph, TextLink, Twitter } from "."

const Footer = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const links = [
    {
      href: "mailto:adeleyeadesida@gmail.com",
      Icon: AtSign,
      title: "Email",
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
    <footer className="container mt-12 flex flex-col items-center gap-12 md:gap-24">
      <div id="contact" className="w-full max-w-6xl">
        <Heading typeStyle="heading-3xl">Get in Touch</Heading>
        <Paragraph className="mt-4 text-muted-foreground">
          Got a project we could work on together?
        </Paragraph>

        <div className="mt-6 flex w-max items-center justify-start gap-6 md:mt-12">
          {links.map(({ Icon, href }) => (
            <TextLink
              key={href}
              href={href}
              className="rounded-full bg-muted p-3 text-muted-foreground hover:text-foreground md:p-8"
            >
              <div className="w-10 md:w-20">
                <Icon />
              </div>
            </TextLink>
          ))}
        </div>
      </div>

      <div className="flex h-20 w-full flex-col-reverse items-center justify-evenly border-t border-border text-muted-foreground md:flex-row md:justify-between">
        <small className="whitespace-nowrap">
          Adesida Leye | &copy; Copyright {new Date().getFullYear()}
        </small>

        <div className="flex flex-wrap items-center justify-end gap-8 text-xs md:gap-4">
          <div className="flex select-none items-center gap-2 hover:text-foreground">
            <time className="font-mono tracking-wider">
              {time.toLocaleTimeString("en-US", {
                timeZone: "Africa/Lagos",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              })}
            </time>
            <Clock2 size={15} />
          </div>

          <TextLink
            href="https://google.com/maps/search/Lagos, Nigeria"
            className="flex select-none items-center gap-2 hover:text-foreground"
          >
            <span className="font-mono tracking-wider">Lagos, Nigeria</span>
            <Navigation size={15} />
          </TextLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
