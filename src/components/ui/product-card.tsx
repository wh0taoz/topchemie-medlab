import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description: string
  icon?: React.ReactNode
  cardNumber?: string
  href?: string
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, title, subtitle, description, icon, cardNumber, href, ...props }, ref) => {
    const tagColors = [
      { bg: "bg-[#2F4550]/10", text: "text-[#2F4550]" },
      { bg: "bg-[#586F7C]/10", text: "text-[#586F7C]" },
      { bg: "bg-[#2F4550]/10", text: "text-[#2F4550]" }
    ]

    const cardIndex = cardNumber ? parseInt(cardNumber) - 1 : 0
    const colorScheme = tagColors[cardIndex % tagColors.length]

    return (
      <div className="group">
        <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-8xl font-light text-gray-900">{cardNumber || "01"}</div>
            <div className={cn(
              "flex items-center gap-2 px-3 py-1 rounded-full text-sm",
              colorScheme.bg,
              colorScheme.text
            )}>
              <ArrowUpRight className="h-4 w-4" />
              <span>{subtitle || "Proizvod"}</span>
            </div>
          </div>
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 font-light text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    )
  }
)

ProductCard.displayName = "ProductCard"

export { ProductCard }