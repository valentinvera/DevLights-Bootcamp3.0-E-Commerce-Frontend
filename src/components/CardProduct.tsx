import Link from "next/link"
import Image from "next/image"
import RatingStars from "./RatingStars"

interface ProductProps {
  _id: number
  images: string[]
  name: string
  description: string
  price: number
  discountedPrice: number
  discount: number
  average: number
  count: number
  rating: {
    average: number
    count: number
  }
}

interface CardProductProps {
  productsToShow: number
  startIndex?: number
}

const CardProduct = async ({ productsToShow, startIndex = 0 }: CardProductProps) => {
  const data = await fetch(
    `http://localhost:8000/product/getProducts?timestamp=${Date.now()}`,
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    },
  )

  const products: ProductProps[] = await data.json()

  return (
    <article className="">
      <ul className="flex gap-4">
        {products
          .slice(startIndex, startIndex + productsToShow)
          .map(
            (
              { _id, images, name, description, price, discount, discountedPrice, rating },
              index,
            ) => (
              <li key={index} className="rounded-md bg-white">
                <Link href={`/products/${_id}`}>
                {images && images.length > 0 && (
                <Image
                  className="h-[207.35px] w-[284.27px] object-cover"
                  src={images[0]}  
                  alt={name}
                  width={284.27}
                  height={207.35}
                />
              )}
                  <div className="w-[284.27px] pb-2 pl-2 pt-2">
                    <h3 className="mb-2.5 text-lg font-medium">{name}</h3>
                    <p className="mb-2.5 text-base font-normal">{description}</p>
                    <span className="mb-8 text-lg font-medium">$ {price}</span>
                    <div className="mb-2.5 flex gap-4">
                      <span className="price-crossed-out mr-11 block pl-[4px] text-xs font-light text-[#BBBBBB]">
                        ${discountedPrice}
                      </span>
                      <span className="block text-[10px] text-[#FE735C]">{discount}%Off</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RatingStars rating={rating.average} />
                      <span className="block text-[10px] text-[#A4A9B3]">{rating.count}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ),
          )}
      </ul>
    </article>
  )
}

export default CardProduct
