import { Link2 } from "lucide-react"
import { GitHub, LinkedIn, TextLink, Theme, Twitter } from "."
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/Menubar"

const Navbar = ({}) => {
  const pageLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#contact",
      title: "Contact Me",
    },
  ]

  return (
    <nav className="h-36 px-4 md:px-8">
      <div className="flex items-center justify-between gap-x-4 h-full">
        <div className="bg-muted text-muted-foreground border border-muted-foreground/20 py-4 px-6 rounded-full">
          <div className="flex gap-6 select-none">
            {pageLinks.map(({ id, title }, i) => (
              <a
                key={i}
                href={id}
                className="relative transition-all w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:opacity-80 after:transition-transform after:duration-500 after:ease-spring after:content-[''] after:bg-foreground hover:after:origin-bottom-left hover:after:scale-x-100 hover:text-foreground after:origin-right after:scale-x-0"
              >
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-2 md:flex-row md:gap-4">
          <LinksMenu />
          <Theme />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

const LinksMenu = () => {
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
    <Menubar className="h-auto p-0">
      <MenubarMenu>
        <MenubarTrigger className="flex gap-2 cursor-pointer">
          <Link2 size={15} />
          <span>Links</span>
        </MenubarTrigger>
        <MenubarContent className="mx-2">
          {links.map(({ Icon, href, title }) => (
            <TextLink key={href} href={href}>
              <MenubarItem className="flex gap-2 cursor-pointer">
                <Icon className="w-6" />
                {title}
              </MenubarItem>
            </TextLink>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
