import { useEffect, useState } from "react"

const Preloader = () => {
  // const [text, setText] = useState<string>("LOADING")
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

    // const animate = setInterval(() => {
    //   setText((current) => {
    //     if (current === "LOADING...") return "LOADING"
    //     else return current + "."
    //   })
    // }, 500)

    return () => {
      clearTimeout(timeout)
      // clearInterval(animate)
    }
  }, [])

  const percentage = String(progress).padStart(3, "0") + "%"

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-secondary transition duration-500 ease-out ${
        visible
          ? "z-[9999] transform opacity-100"
          : "-z-[9999] transform opacity-0"
      }`}
    >
      <h2 className="text-lg text-muted-foreground">{percentage}</h2>
    </div>
  )
}

export default Preloader
