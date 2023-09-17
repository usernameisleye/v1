import {
  About,
  Alien,
  Button,
  Cursor,
  Footer,
  Heading,
  Leye,
  Navbar,
  Paragraph,
  Preloader,
  ProjectList,
  Skill,
  TextLink,
} from "@/components"
import { AtSign, FileDown } from "lucide-react"
import { APIs, familiars, technologies, webProjects } from "./constants"

function App() {
  const links = [
    {
      href: "mailto:adeleyeadesida@gmail.com",
      Icon: AtSign,
      text: "Email",
    },
    {
      href: "https://drive.google.com/file/d/1oYx0y3I1OQO97_X3CXlF4_gM_BBSwv1B/view?usp=drive_link",
      Icon: FileDown,
      text: "Resumé",
    },
  ]

  const lists = [
    {
      name: "Web Projects",
      list: webProjects,
    },
    {
      name: "APIs I've Built",
      list: APIs,
    },
  ]
  return (
    <>
      <Preloader />
      <main id="main-content" className="max-w-7xl mx-auto">
        <Navbar />
        <div className="relative container">
          <header className="my-16">
            <div>
              <Heading typeStyle="heading-4xl">
                Hi,{" "}
                <span className="inline-flex items-center whitespace-pre-wrap">
                  I am Leye <Alien />
                </span>
              </Heading>
              <Paragraph
                typeStyle="body-xl"
                className="uppercase text-muted-foreground mt-2 md:mt-4"
              >
                Full Stack Developer
              </Paragraph>
            </div>

            <div className="flex gap-4 mt-8">
              {links.map(({ href, Icon, text }) => (
                <TextLink key={href} href={href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base font-thin"
                  >
                    <Icon size={20} className="text-muted-foreground" />
                    <span>{text}</span>
                  </Button>
                </TextLink>
              ))}
            </div>
          </header>

          <section className="relative w-full my-20">
            <div className="mb-8">
              <Heading typeStyle="heading-3xl">Projects</Heading>
              <Paragraph
                typeStyle="body-lg"
                className="text-muted-foreground mt-4"
              >
                Here are some projects I've worked on
              </Paragraph>
            </div>

            <div className="flex flex-col gap-8 w-auto md:gap-4">
              {lists.map(({ name, list }, i) => (
                <div key={name}>
                  <Heading className="uppercase">{name}</Heading>
                  <ProjectList index={i} projects={list} />
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="relative my-20">
            <div className="flex items-center gap-4">
              <Heading typeStyle="heading-3xl">About</Heading>
              <Leye className="-rotate-12" />
            </div>

            <div>
              <About />
              <div className="flex flex-col gap-6">
                <div>
                  <Heading className="uppercase mb-4">Technologies</Heading>
                  <div className="flex flex-wrap items-center gap-4">
                    {technologies.map((text) => (
                      <Skill key={text} text={text} />
                    ))}
                  </div>
                </div>

                <div>
                  <Heading className="uppercase mb-4">Familiar With</Heading>
                  <div className="flex flex-wrap items-center gap-4">
                    {familiars.map((text) => (
                      <Skill key={text} text={text} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <Cursor />
    </>
  )
}

export default App
