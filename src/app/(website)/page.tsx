import NavBar from "@/components/NavBar"
import HeroSlider from "@/components/HeroSlider"
import DealBanner from "@/components/DealBanner"
import CardProduct from "@/components/CardProduct"
import SpecialOffers from "@/components/SpecialOffers"
import ProductSpotlightBanner from "@/components/ProductSpotlightBanner"
import DiscountShowcase from "@/components/DiscountShowcase"
import { ProductSpotlightBannerStylesHome } from "@/app/styles/ProductSpotlightBanner"

const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroSlider />
        <DealBanner />
        <section className="my-[60px] flex flex-col items-center justify-center">
          <CardProduct productsToShow={4} startIndex={0} />
        </section>
        <SpecialOffers />
        <section className="mb-8 px-[120px]">
          <ProductSpotlightBanner {...ProductSpotlightBannerStylesHome} />
        </section>
        <section className="my-[60px] flex flex-col items-center justify-center">
          <CardProduct productsToShow={4} startIndex={4} />
        </section>
        <DiscountShowcase />
      </main>
    </>
  )
}

export default Home
