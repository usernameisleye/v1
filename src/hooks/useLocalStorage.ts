import { useEffect, useState } from "react"

const useLocalStorage = (key: string, initial: any) => {
  const [value, setValue] = useState(() => {
    try {
      const current = window.localStorage.getItem(key)
      return current ? JSON.parse(current) : initial
    } catch (err) {
      console.log(err)
      return initial
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
