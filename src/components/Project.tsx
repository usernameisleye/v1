import { ProjectType } from "@/types"
import { GitHub, Heading, Paragraph, TextLink } from "."

const Project = ({ project }: { project: ProjectType }) => {
  const { name, description, link, tools, gitHub } = project
  return (
    <div className="proj h-56 border border-border rounded-xl hover:border-muted-foreground md:h-60">
      <div className="flex flex-col justify-between p-5 transition h-full cursor-pointer">
        <TextLink href={link ? link : gitHub} className="z-20">
          <Heading level="h4" typeStyle="heading-2xl">
            <span className="relative transition-all w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:opacity-80 after:transition-transform after:duration-500 after:ease-spring after:content-[''] after:bg-foreground hover:after:origin-bottom-left hover:after:scale-x-100 hover:text-foreground after:origin-right after:scale-x-0">
              {name}
            </span>
          </Heading>

          <Paragraph
            typeStyle="body-base"
            className="text-muted-foreground mt-2 truncate line-clamp-2 whitespace-normal md:line-clamp-3"
          >
            {description}
          </Paragraph>

          <div className="mt-4">
            <ul className="uppercase text-xs flex flex-wrap gap-2">
              {tools?.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        </TextLink>

        <div className="ml-auto mt-4">
          {gitHub && (
            <TextLink href={gitHub} className="git flex items-center gap-2">
              <GitHub className="w-6" />
              <span className="text-xs underline">View on GitHub</span>
            </TextLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
