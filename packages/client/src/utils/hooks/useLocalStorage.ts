import { useEffect, useState } from "react"

function useLocalState (defaultValue, key) {
   const [value, setValue]  = useState (() => {
        const localStorageValue = localStorage.getItem(key)
        localStorageValue !== null ? JSON.parse(localStorageValue) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalState