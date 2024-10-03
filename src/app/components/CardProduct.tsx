import Link from "next/link"
import Image from "next/image"

interface ProductProps {
  imageUrl: string
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

const CardProduct = async () => {
  const data = await fetch(
    "https://devlights-bootcamp3-0-e-commerce-backend.onrender.com/product/getProducts",
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    },
  )
  const products: ProductProps[] = await data.json()

  return (
    <section className="mb-[120px] mt-[60px] px-[120px]">
      <article className="">
        <ul className="flex gap-4">
          {products
            .slice(0, 4)
            .map(
              (
                { imageUrl, name, description, price, discount, discountedPrice, rating },
                index,
              ) => (
                <li key={index} className="bg-white">
                  <Link href="">
                    <Image
                      className="h-[207.35px] w-[284.27px] object-cover"
                      src={imageUrl}
                      alt={name}
                      width={284.27}
                      height={207.35}
                    />
                    <div className="w-[284.27px] pl-2 pt-2">
                      <h3 className="text-lg font-medium">{name}</h3>
                      <p className="text-base font-normal">{description}</p>
                      <span className="block text-lg font-medium">$ {price}</span>
                      <div className="flex gap-2">
                        <span className="price-crossed-out block text-xs font-light text-[#BBBBBB]">
                          ${discountedPrice}
                        </span>
                        <span className="block text-[10px] text-[#FE735C]">{discount}%Off</span>
                      </div>
                      <span className="block">{rating.average}</span>
                      <span className="block text-[10px] text-[#A4A9B3]">{rating.count}</span>
                    </div>
                  </Link>
                </li>
              ),
            )}
        </ul>
      </article>
    </section>
  )
}

export default CardProduct
