import * as React from "react"
import { cn } from "@/lib/utils"

interface FeatureBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  text: string
  gradient?: 'blue' | 'gray' | 'dark' | 'light'
}

const gradientStyles = {
  blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
  gray: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
  dark: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  light: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"
}

const FeatureBadge = React.forwardRef<HTMLDivElement, FeatureBadgeProps>(
  ({ className, icon, text, gradient = 'blue', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20",
          className
        )}
        {...props}
      >
        {icon && (
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-white",
            gradientStyles[gradient]
          )}>
            {icon}
          </div>
        )}
        <span className="text-gray-800 font-medium">{text}</span>
      </div>
    )
  }
)

FeatureBadge.displayName = "FeatureBadge"

export { FeatureBadge }