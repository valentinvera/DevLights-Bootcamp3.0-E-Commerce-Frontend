"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import RatingStars from "@/components/RatingStars"

interface Product {
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

interface ProductByIdProps {
  params: {
    _id: string
  }
}

const ProductById = ({ params }: ProductByIdProps) => {
  const { _id } = params
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(`http://localhost:8000/product/getProduct/${_id}`)
      const data = await response.json()
      setProduct(data)
    }

    fetchProductData()
  }, [_id])

  if (!product) return <p>Cargando...</p>

  return (
    <section className="bg-white mb-20">
      <div className="mx-[120px] flex gap-10">

        <div>
          <h3 className="text-[#FD6E86] pt-10 mb-6 text-[22px]">Deport - urban</h3>
          <div className="flex flex-col gap-8">
            <Image src={product.images[0]} alt={product.name} width={150} height={150} />
            <Image src={product.images[1]} alt={product.name} width={150} height={150} />
          </div>
        </div>


        <article className="pt-24 flex gap-6"> 
          <Image src={product.images[0]} className="rounded-[4px]" alt={product.name} width={592} height={100} />
          <div className="flex flex-col">
            <p className="font-semibold text-sm text-black mb-1">Size: 7UK</p>
            <div className="flex gap-2 mb-6">
              <button className="font-semibold text-sm text-[#FA7189] rounded-[4px] border-[1.5px] w-[50px] h-8 border-[#FA7189]">
                6 UK
              </button>
              <button className="font-semibold text-sm text-white rounded-[4px] border-[1.5px] w-[50px] h-8 border-[#FA7189] bg-[#FA7189]">
                7 UK
              </button>
              <button className="font-semibold text-sm text-[#FA7189] rounded-[4px] border-[1.5px] w-[50px] h-8 border-[#FA7189]">
                8 UK
              </button>
              <button className="font-semibold text-sm text-[#FA7189] rounded-[4px] border-[1.5px] w-[50px] h-8 border-[#FA7189]">
                9 UK
              </button>
              <button className="font-semibold text-sm text-[#FA7189] rounded-[4px] border-[1.5px] w-[50px] h-8 border-[#FA7189]">
                10 UK
              </button>
            </div>
            <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
            <p className="font-normal text-sm mb-2">{product.description}</p>
            <div className="flex items-center gap-2 mb-2">
              <RatingStars rating={product.rating.average} />
              <span className="block font-medium text-sm text-[#828282]">{product.rating.count}</span>
            </div>

            <div className="mb-2.5 flex items-center">
              <span className="price-crossed-out mr-11 block text-sm font-normal text-[#808488]">
                ${product.discountedPrice}
              </span>
              <span className="font-medium text-sm mr-4">${product.price}</span>
              <span className="block text-sm font-semibold text-[#FA7189]">{product.discount}% Off</span>
            </div>

            <div>
              <p className="font-medium text-sm mb-1">Product Details</p>
              <p className="font-normal text-xs w-[95%] mb-4">
                Perhaps the most iconic sneaker of all-time, this original &quot;Chicago&quot; colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...
                <span className="text-[#FA7189]">More</span>
              </p>

              <div className="flex gap-2 mb-8">
                <div className="flex items-center gap-1 justify-center w-[97px] rounded-[4px] h-6 border border-[#828282]">
                  <Image src="/images/icons/location.svg" alt="Location icon" width={16} height={16} />
                  <span className="font-medium text-[10px] text-[#828282]">Nearest Store</span>
                </div>

                <div className="flex items-center justify-center gap-1 w-[46px] rounded-[4px] h-6 border border-[#828282]">
                  <Image src="/images/icons/lock.svg" alt="Location icon" width={16} height={16} />
                  <span className="font-medium text-[10px] text-[#828282]">VIP</span>
                </div>

                <div className="flex items-center justify-center gap-1 w-[96px] rounded-[4px] h-6 border border-[#828282]">
                  <Image src="/images/icons/check.svg" alt="Location icon" width={16} height={16} />
                  <span className="font-medium text-[10px] text-[#828282]">Return policy</span>
                </div>

              </div>

              <div className="flex gap-4 mb-8">
                <button className="bg-[#2D73D7] w-[166px] h-10 rounded-[4px] flex items-center justify-center gap-2">
                  <Image src="/images/icons/cartwhite.svg" alt="Icon cart in white" width={20} height={20} />
                  <span className="font-medium text-white">Go to cart</span>
                </button>

                <button className="bg-[#3BC173] w-[166px] h-10 rounded-[4px] flex items-center justify-center gap-2">
                  <Image src="/images/icons/fingerclick.svg" alt="Finger clicking" width={15.85} height={21} />
                  <span className="font-medium text-white">Buy Now</span>
                </button>
              </div>

              <button className="flex items-center justify-center gap-1 border-[.5px] border-[#D9D9D9] rounded-lg w-[182px] h-12">
                <Image src="/images/icons/eyeblack.svg" alt="Icon of eye" width={22} height={15} />
                <span className="text-sm font-medium">View Similar</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProductById
