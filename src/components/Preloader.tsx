import { useEffect, useState } from "react"

const Preloader = () => {
  const [text, setText] = useState<string>("LOADING")
  const [progress, setProgress] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1

        setTimeout(() => setVisible(false), 500)
        return prev
      })
    }, 50)

    const animate = setInterval(() => {
      setText((current) => {
        if (current === "LOADING...") return "LOADING"
        else return current + "."
      })
    }, 500)

    return () => {
      clearTimeout(timeout)
      clearInterval(animate)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-secondary flex items-end justify-end transition duration-200 ease-out ${
        visible
          ? "transform opacity-100 z-[9999]"
          : "transform opacity-0 -z-[9999]"
      }`}
    >
      <div className="grid gap-3 text-5xl font-Grotesk p-8 text-right text-muted-foreground md:text-7xl">
        <h2>{text}</h2>
        <h2>{`${progress}%`}</h2>
      </div>
    </div>
  )
}

export default Preloader
