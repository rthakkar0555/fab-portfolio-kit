"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ThemeToggleButtonProps {
  showLabel?: boolean
  variant?: "default" | "gif" | "circle" | "circle-blur"
  start?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center"
  url?: string
  className?: string
}

const ThemeToggleButton = ({ 
  showLabel = false, 
  variant = "default", 
  start = "center", 
  url,
  className 
}: ThemeToggleButtonProps) => {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    
    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    // Set the view transition name for animation
    const targetElement = document.documentElement
    
    switch (variant) {
      case "gif":
        if (url) {
          // Create a temporary element with the GIF for transition
          const gifElement = document.createElement("div")
          gifElement.style.position = "fixed"
          gifElement.style.top = "0"
          gifElement.style.left = "0"
          gifElement.style.width = "100vw"
          gifElement.style.height = "100vh"
          gifElement.style.backgroundImage = `url(${url})`
          gifElement.style.backgroundSize = "cover"
          gifElement.style.backgroundPosition = "center"
          gifElement.style.pointerEvents = "none"
          gifElement.style.zIndex = "9999"
          gifElement.style.viewTransitionName = "gif-transition"
          
          document.body.appendChild(gifElement)
          
          document.startViewTransition(() => {
            setTheme(newTheme)
          }).finished.then(() => {
            gifElement.remove()
          })
        } else {
          setTheme(newTheme)
        }
        break
        
      case "circle":
      case "circle-blur":
        targetElement.style.setProperty("--start-position", getStartPosition(start))
        targetElement.style.viewTransitionName = variant === "circle-blur" ? "circle-blur-transition" : "circle-transition"
        
        document.startViewTransition(() => {
          setTheme(newTheme)
        }).finished.then(() => {
          targetElement.style.removeProperty("--start-position")
          targetElement.style.removeProperty("view-transition-name")
        })
        break
        
      default:
        document.startViewTransition(() => {
          setTheme(newTheme)
        })
        break
    }
  }

  const getStartPosition = (position: string) => {
    switch (position) {
      case "top-left": return "0% 0%"
      case "top-right": return "100% 0%"
      case "bottom-left": return "0% 100%"
      case "bottom-right": return "100% 100%"
      case "center": return "50% 50%"
      default: return "50% 50%"
    }
  }

  const renderIcon = () => {
    if (variant === "gif" && url) {
      return (
        <img 
          src={url}
          alt="Theme toggle"
          className="w-4 h-4 object-cover rounded filter grayscale"
        />
      )
    }
    
    return (
      <>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={handleThemeChange}
        className={cn("relative", className)}
      >
        {renderIcon()}
        <span className="sr-only">Toggle theme</span>
      </Button>
      {showLabel && (
        <span className="text-sm font-medium">
          Theme Toggle variant = {variant}
          {start !== "center" && (
            <>
              <br />
              start = {start}
            </>
          )}
        </span>
      )}
    </div>
  )
}

export default ThemeToggleButton