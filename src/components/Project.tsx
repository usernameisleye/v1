import { ProjectType } from "@/types"
import { GitHub, Heading, Paragraph, TextLink } from "."

const Project = ({ project }: { project: ProjectType }) => {
  const { name, description, link, tools, gitHub } = project
  return (
    <div className="proj h-56 rounded-xl border border-border hover:border-muted-foreground md:h-60">
      <div className="flex h-full cursor-pointer flex-col justify-between p-5 transition">
        <TextLink href={link ? link : gitHub} className="z-20">
          <Heading level="h4" typeStyle="heading-2xl">
            <span className="after:ease-spring relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:origin-right after:scale-x-0 after:bg-foreground after:opacity-80 after:transition-transform after:duration-500 after:content-[''] hover:text-foreground hover:after:origin-bottom-left hover:after:scale-x-100">
              {name}
            </span>
          </Heading>

          <Paragraph
            typeStyle="body-base"
            className="mt-2 line-clamp-2 truncate whitespace-normal text-muted-foreground md:line-clamp-3"
          >
            {description}
          </Paragraph>

          <div className="mt-4">
            <ul className="flex flex-wrap gap-2 text-xs uppercase">
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
