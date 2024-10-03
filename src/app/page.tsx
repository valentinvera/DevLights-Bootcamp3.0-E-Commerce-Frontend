import Header from "./components/Header"
import NavBar from "./components/NavBar"
import HeroSlider from "./components/HeroSlider"
import DealBanner from "./components/DealBanner"
import CardProduct from "./components/CardProduct"

const Page = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <HeroSlider />
        <DealBanner />
        <CardProduct />
      </main>
    </>
  )
}

export default Page
