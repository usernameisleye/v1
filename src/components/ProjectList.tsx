import { ProjectType } from "@/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FC } from "react"
import "swiper/css"
import { FreeMode, Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Button, Project } from "."

interface ProjectListProps {
  projects: ProjectType[]
  index: number
}

const ProjectList: FC<ProjectListProps> = ({ projects, index }) => {
  let prev: string
  let next: string

  if (index === 0) {
    prev = "prev"
    next = "next"
  } else {
    prev = "prevv"
    next = "nextt"
  }

  const buttons = [
    {
      el: prev,
      Icon: ChevronLeft,
    },
    {
      el: next,
      Icon: ChevronRight,
    },
  ]
  return (
    <div>
      <Swiper
        className="mt-6"
        spaceBetween={15}
        slidesPerView={1.2}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Scrollbar, FreeMode]}
        breakpoints={{
          640: { width: 640, slidesPerView: 2 },
          1200: { width: 1200, slidesPerView: 2.5 },
        }}
        navigation={{ nextEl: "." + next, prevEl: "." + prev }}
      >
        {projects.map((project, key) => (
          <SwiperSlide key={key}>
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden justify-end gap-6 mt-6 md:flex">
        {buttons.map(({ el, Icon }) => (
          <Button key={el} className={el} variant="secondary" size="icon">
            <Icon />
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
