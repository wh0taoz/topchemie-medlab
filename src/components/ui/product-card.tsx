import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description: string
  icon?: React.ReactNode
  gradient?: 'blue' | 'gray' | 'dark' | 'light'
  href?: string
}

const gradientStyles = {
  blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
  gray: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
  dark: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  light: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, title, subtitle, description, icon, gradient = 'blue', href, ...props }, ref) => {
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
          "relative text-white p-0 min-h-[280px]",
          gradientStyles[gradient]
        )}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[280px]">
            <div>
              {subtitle && (
                <p className="text-sm text-white/80 mb-2 font-medium">{subtitle}</p>
              )}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                {description}
              </p>
            </div>

            <div className="flex justify-between items-end">
              {href && (
                <a
                  href={href}
                  className="inline-flex items-center text-white/90 hover:text-white font-medium transition-colors duration-300 text-sm"
                >
                  Saznajte više →
                </a>
              )}

              {icon && (
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

ProductCard.displayName = "ProductCard"

export { ProductCard }