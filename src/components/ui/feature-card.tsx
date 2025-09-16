import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description: string
  date?: string
  icon?: React.ReactNode
  gradient?: 'blue' | 'purple' | 'teal' | 'orange'
  size?: 'default' | 'large'
}

const gradientStyles = {
  blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
  purple: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700",
  teal: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-700",
  orange: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-600"
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, subtitle, description, date, icon, gradient = 'blue', size = 'default', ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
          size === 'large' ? "col-span-2" : "",
          className
        )}
        {...props}
      >
        <CardContent className={cn(
          "relative text-white p-0",
          gradientStyles[gradient]
        )}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-6">
            {date && (
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1">
                <div className="text-center">
                  <div className="text-2xl font-bold">{date.split(' ')[0]}</div>
                  <div className="text-sm opacity-90">{date.split(' ')[1]}</div>
                </div>
              </div>
            )}

            <div className={cn(
              "flex flex-col justify-between h-full",
              size === 'large' ? "min-h-[200px]" : "min-h-[160px]"
            )}>
              <div className="mt-8">
                {subtitle && (
                  <p className="text-sm text-white/80 mb-1">{subtitle}</p>
                )}
                <h3 className={cn(
                  "font-bold text-white mb-3 leading-tight",
                  size === 'large' ? "text-3xl" : "text-xl"
                )}>
                  {title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {description}
                </p>
              </div>

              {icon && (
                <div className="flex justify-end">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

FeatureCard.displayName = "FeatureCard"

export { FeatureCard }