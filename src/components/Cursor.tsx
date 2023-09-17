import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

const Cursor = () => {
  const [hide, setHide] = useState<boolean>(false)
  const [scale, setScale] = useState<boolean>(false)
  const [hover, setHover] = useState<boolean>(false)
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const update = (e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY

    setPos({ x, y })

    const edgeDistance = Math.min(
      x,
      window.innerWidth - x,
      y,
      window.innerHeight - y
    )

    const threshold = 20

    setHide(edgeDistance < threshold)
  }

  const handleScale = () => {
    setScale(true)
    setTimeout(() => {
      setScale(false)
    }, 400)
  }

  useEffect(() => {
    window.addEventListener("mousemove", update)
    window.addEventListener("click", handleScale)

    return () => {
      window.removeEventListener("mousemove", update)
      window.removeEventListener("click", handleScale)
    }
  }, [])
  useEffect(() => {
    const els = document.querySelectorAll(".proj")
    const gits = document.querySelectorAll(".git")
    if (!els || !gits) return

    const enter = () => setHover(true)

    const leave = () => setHover(false)

    els.forEach((el) => {
      el.addEventListener("mouseenter", enter)
      el.addEventListener("mouseleave", leave)

      return () => {
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
      }
    })

    gits.forEach((git) => {
      git.addEventListener("mouseenter", leave)
      git.addEventListener("mouseleave", enter)

      return () => {
        git.removeEventListener("mouseenter", leave)
        git.removeEventListener("mouseleave", enter)
      }
    })
  }, [])

  return (
    <div
      className={`hidden lg:grid place-items-center fixed h-6 w-6 border border-muted-foreground z-[999] rounded-full pointer-events-none transition-all ease-out duration-300 overflow-hidden ${
        scale && "animate-scale"
      } ${hide && "scale-0"} ${hover && "w-40 h-40"}`}
      style={{
        top: +pos.y - (hover ? 80 : 10),
        left: +pos.x - (hover ? 80 : 10),
      }}
    >
      <div
        className={`${
          !hover && "h-0 w-0 opacity-0"
        } bg-foreground/80 text-background rounded-full h-32 w-32 grid place-items-center transition-all ease-in-out`}
      >
        <ArrowUpRight size={50} />
      </div>
    </div>
  )
}

export default Cursor
