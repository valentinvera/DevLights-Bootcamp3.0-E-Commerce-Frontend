import Image from "next/image"

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Image
              key={index}
              src="/images/icons/star.svg"
              alt="Full star"
              width={19.49}
              height={18.53}
            />
          )
        } else if (index === fullStars && hasHalfStar) {
          return (
            <Image
              key={index}
              src="/images/icons/starpartial.svg"
              alt="Half star"
              width={19.49}
              height={18.53}
            />
          )
        } else {
          return (
            <Image
              key={index}
              src="/images/icons/star-empty.svg"
              alt="Empty star"
              width={19.49}
              height={18.53}
            />
          )
        }
      })}
    </div>
  )
}

export default RatingStars
