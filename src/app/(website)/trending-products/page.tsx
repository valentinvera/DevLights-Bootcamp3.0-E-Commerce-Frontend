import Aside from "@/components/Aside"
import CardProduct from "@/components/CardProduct"
import ProductSpotlightBanner from "@/components/ProductSpotlightBanner"
import { ProductSpotlightBannerStylesTrendingProducts } from "@/app/styles/ProductSpotlightBanner"

const TrendingProducts = () => {
  return (
    <section className="mb-14">
      <div className="mb-6 flex h-[110px] w-full items-center bg-white px-[120px] text-[#FD6E86]">
        <div className="mr-[135px] flex flex-col">
          <h2 className="text-[22px] font-semibold">Trending Products</h2>
          <p className="text-xs font-normal">¡find the most incredible!</p>
        </div>
        <div className="mt-4 flex gap-20 *:text-sm">
          <button>Beauty</button>
          <button>Fashion</button>
          <button>Kids</button>
          <button>Mens</button>
          <button>Womens</button>
          <button>Gifts</button>
        </div>
      </div>
      <div className="flex gap-6">
        <Aside />
        <div className="flex flex-col gap-8">
          <CardProduct productsToShow={3} />
          <ProductSpotlightBanner {...ProductSpotlightBannerStylesTrendingProducts} />
          <CardProduct productsToShow={3} />
          <CardProduct productsToShow={3} />
          <CardProduct productsToShow={3} />
        </div>
      </div>
    </section>
  )
}

export default TrendingProducts
