import useLocalStorage from "@/hooks/useLocalStorage"
import { MoonStar, SunMedium } from "lucide-react"
import { useEffect } from "react"
import { Button } from "."

const Theme = () => {
  const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage(
    "theme",
    userTheme ? "dark" : "light"
  )

  const toggle = () => setTheme(theme === "light" ? "dark" : "light")

  useEffect(() => {
    document.documentElement.setAttribute("class", theme)
  }, [theme])

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Button
        aria-label={`Change theme to ${
          theme === "light" ? "dark" : "light"
        } mode`}
        size="icon"
        role="switch"
        variant="ghost"
        onClick={toggle}
      >
        {theme === "light" ? <MoonStar /> : <SunMedium />}
      </Button>
    </div>
  )
}

export default Theme
