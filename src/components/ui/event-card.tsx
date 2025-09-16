import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  organizer?: string
  location?: string
  date: string
  price: string
  status?: 'upcoming' | 'register' | 'done'
  isHighlighted?: boolean
}

const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  ({ className, title, organizer, location, date, price, status = 'upcoming', isHighlighted = false, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
          isHighlighted ? "ring-2 ring-blue-500 ring-opacity-50" : "",
          className
        )}
        {...props}
      >
        <CardContent className="bg-white p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-600">{organizer || "Topchemie Medlab"}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {title}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{price}</div>
              <div className={cn(
                "text-xs px-2 py-1 rounded-full font-medium",
                status === 'upcoming' && "bg-blue-100 text-blue-600",
                status === 'register' && "bg-green-100 text-green-600",
                status === 'done' && "bg-gray-100 text-gray-600"
              )}>
                {status === 'upcoming' && 'Nadolazeći'}
                {status === 'register' && 'Registrujte se'}
                {status === 'done' && 'Završeno'}
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button className={cn(
              "flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors",
              status === 'register'
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}>
              {status === 'register' ? 'Registrujte se' : 'Saznajte više'}
            </button>
            {status === 'done' && (
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
                Završeno
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)

EventCard.displayName = "EventCard"

export { EventCard }