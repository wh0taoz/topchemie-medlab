import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface ValuesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
  gradient?: 'blue' | 'gray' | 'dark' | 'light'
}

const gradientStyles = {
  blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
  gray: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
  dark: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  light: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"
}

const ValuesCard = React.forwardRef<HTMLDivElement, ValuesCardProps>(
  ({ className, title, description, icon, gradient = 'blue', ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-3xl bg-white/80 backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <CardContent className="p-8 text-center min-h-[280px] flex flex-col justify-center">
          {icon && (
            <div className={cn(
              "w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white",
              gradientStyles[gradient]
            )}>
              {icon}
            </div>
          )}
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 font-light leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    )
  }
)

ValuesCard.displayName = "ValuesCard"

export { ValuesCard }