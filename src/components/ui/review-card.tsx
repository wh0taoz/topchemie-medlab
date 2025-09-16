import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  rating: number
  totalReviews: number
  reviewText?: string
  reviewerName?: string
  reviewerAvatar?: string
  variant?: 'compact' | 'detailed'
}

const StarRating = ({ rating, className }: { rating: number; className?: string }) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-4 h-4",
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          )}
        />
      ))}
    </div>
  )
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({
    className,
    title,
    rating,
    totalReviews,
    reviewText,
    reviewerName,
    reviewerAvatar,
    variant = 'compact',
    ...props
  }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <CardContent className="bg-white p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">{rating.toFixed(1)}</span>
                  <StarRating rating={rating} />
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  Odličan
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Založeno na {totalReviews} recenzija
              </p>
            </div>

            {variant === 'detailed' && reviewText && (
              <div className="border-t pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    {reviewerAvatar ? (
                      <img
                        src={reviewerAvatar}
                        alt={reviewerName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {reviewerName || "Anonimni korisnik"}
                      </span>
                      <StarRating rating={rating} />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reviewText}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)

ReviewCard.displayName = "ReviewCard"

export { ReviewCard }