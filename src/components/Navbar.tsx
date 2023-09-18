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
      <div className="flex h-full items-center justify-between gap-x-4">
        <div className="rounded-full border border-muted-foreground/20 bg-muted px-6 py-4 text-muted-foreground">
          <div className="flex select-none gap-6">
            {pageLinks.map(({ id, title }, i) => (
              <a
                key={i}
                href={id}
                className="after:ease-spring relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:origin-right after:scale-x-0 after:bg-foreground after:opacity-80 after:transition-transform after:duration-500 after:content-[''] hover:text-foreground hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
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
        <MenubarTrigger className="cursor-pointer">
          <div className="block py-1 md:hidden">
            <Link2 />
          </div>
          <div className="hidden items-center gap-2 p-1 md:flex">
            <Link2 size={15} />
            <span>Links</span>
          </div>
        </MenubarTrigger>
        <MenubarContent className="mx-2">
          {links.map(({ Icon, href, title }) => (
            <TextLink key={href} href={href}>
              <MenubarItem className="flex cursor-pointer gap-2">
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
