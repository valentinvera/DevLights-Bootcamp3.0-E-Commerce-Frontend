"use client"
import { createContext, useContext, useState } from "react"
import { ReactNode } from "react"

interface LanguageContextType {
  language: "es" | "en"
  setLanguage: (language: "es" | "en") => void
}

export const SharedStateContext = createContext<LanguageContextType | null>(null)

export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"es" | "en">("en")

  return (
    <SharedStateContext.Provider value={{ language, setLanguage }}>
      {children}
    </SharedStateContext.Provider>
  )
}

export function useSharedState() {
  const context = useContext(SharedStateContext)
  if (!context) throw new Error("useSharedState must be used wihtin a SharedStateProvider")

  return context
}
