import * as React from "react"
import { cn } from "@/lib/utils"

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  gradient?: 'blue' | 'gray' | 'dark' | 'light'
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, value, label, gradient = 'blue', ...props }, ref) => {
    return (
      <div className="group">
        <div className="bg-gray-50 rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-[#2563eb]/5 transition-colors text-center">
          <div className="text-4xl sm:text-6xl lg:text-8xl font-light text-gray-900 mb-2 sm:mb-3 lg:mb-4 break-words">
            {value}
          </div>
          <p className="text-gray-600 font-light text-xs sm:text-sm lg:text-sm leading-tight break-words">
            {label}
          </p>
        </div>
      </div>
    )
  }
)

StatsCard.displayName = "StatsCard"

export { StatsCard }