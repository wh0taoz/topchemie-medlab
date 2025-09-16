import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  gradient?: 'blue' | 'gray' | 'dark' | 'light'
}

const gradientStyles = {
  blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
  gray: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
  dark: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  light: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, value, label, gradient = 'blue', ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-3xl",
          className
        )}
        {...props}
      >
        <CardContent className={cn(
          "relative text-white p-0 min-h-[120px]",
          gradientStyles[gradient]
        )}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-6 text-center flex flex-col justify-center h-full min-h-[120px]">
            <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
              {value}
            </div>
            <p className="text-white/90 font-medium text-sm">
              {label}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }
)

StatsCard.displayName = "StatsCard"

export { StatsCard }