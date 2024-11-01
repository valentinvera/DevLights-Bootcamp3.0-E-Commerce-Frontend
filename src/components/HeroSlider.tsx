"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const images = [
  "/images/heroimage.png",
  "/images/home-carrousel01.jpg",
  "/images/home-carrousel02.jpg",
  "/images/home-carrousel03.jpg",
]

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handlePreviosClick = () => {
    const isFirstSlide = currentIndex === 0
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1)
  }

  const handleNextClick = () => {
    const isLastSlide = currentIndex === images.length - 1
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1)
  }

  return (
    <section className="relative h-[366px]">
      <div className="relative h-full w-full">
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              alt={image}
              fill
              className={`absolute left-0 top-0 h-full w-full object-cover transition-all duration-500 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          )
        })}
      </div>

      <div className="absolute left-0 right-0 top-[45%] z-20 flex -translate-y-1/2 items-center justify-between px-[52px]">
        <button
          onClick={() => handlePreviosClick()}
          className="relative flex size-10 items-center justify-center rounded-full bg-white p-3 shadow-[0_1px_15px_-1px_#626262] transition-colors hover:bg-white/30"
        >
          <Image src="images/icons/arrowleft.svg" alt="Previos" width={7.41} height={12} />
        </button>

        <button
          onClick={() => handleNextClick()}
          className="relative flex size-10 items-center justify-center rounded-full bg-white p-3 shadow-[0_1px_15px_-1px_#626262] transition-colors hover:bg-white/30"
        >
          <Image src="images/icons/arrowright.svg" alt="Next" width={7.41} height={12} />
        </button>
      </div>

      <article className="absolute left-0 top-[60px] z-10 pl-[110px] text-white">
        <p className="-mb-4 text-[54px] font-black">50-40% OFF</p>

        <div>
          <p className="text-[28px]">Now in (product)</p>
          <p className="mb-5 text-[22px]">All colours</p>
        </div>

        <div className="flex">
          <Link
            href=""
            className="flex gap-2 rounded-md border border-solid border-white px-3.5 py-3 text-xs font-semibold"
          >
            Shop Now
            <Image src="/images/icons/arrowlargeright.svg" alt="" width={13.33} height={9.33} />
          </Link>
        </div>
      </article>
    </section>
  )
}

export default HeroSlider

// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"

// const images = ["/images/home-carrousel01.jpg", "/images/home-carrousel02.jpg", "/images/home-carrousel03.jpg"]

// export default function HomeCarrousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   function handlePreviosClick() {
//     const isFirstSlide = currentIndex === 0
//     setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1)
//   }
//   function handleNextClick() {
//     const isLastSlide = currentIndex === images.length - 1
//     setCurrentIndex(isLastSlide ? 0 : currentIndex + 1)
//   }
//   return (
//     <div className="w-full bg-gray-400">
//       <div className="relative flex h-[366px] w-full items-center justify-center">
//         {images.map((image, idx) => {
//           return (
//             <Image
//               key={image + idx}
//               src={image}
//               alt={image}
//               fill
//               objectFit="cover"
//               className={`transition-all duration-500 ease-in-out ${
//                 currentIndex === idx ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           )
//         })}
//         <div className="z-10 flex w-[1200px] flex-col">
//           <h2 className="text-5xl font-bold text-white">50-40% OFF</h2>
//           <h4 className="text-2xl text-white">Now in shoes.</h4>
//           <h5 className="text-xl text-white">All sizes</h5>
//           {/* <button className="w-32 h-10 rounded-md border border-white text-white mt-4 flex items-center justify-center gap-2">
//             Shop Now <IconArrowRight className="w-5 h-5" />
//           </button> */}
//           <Link
//             href=""
//             className="flex gap-2 rounded-md border border-solid border-white px-3.5 py-3 text-xs font-semibold"
//           >
//             Shop Now
//             <Image src="/images/icons/arrowlargeright.svg" alt="" width={13.33} height={9.33} />
//           </Link>
//         </div>
//         <div className="absolute flex w-full justify-between p-16">
//           <button
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-black hover:shadow-xl"
//             onClick={() => handlePreviosClick()}
//           >
//             {/* <IconChevronRight className="text-gray-700 rotate-180 mr-0.5 hover:text-gray-400" /> */}
//             <Image className="" src="images/icons/arrowleft.svg" alt="" width={7.41} height={12} />
//           </button>
//           <button
//             className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-black hover:shadow-xl"
//             onClick={() => handleNextClick()}
//           >
//             {/* <IconChevronRight className="text-gray-700 ml-0.5 hover:text-gray-400" /> */}
//             <Image className="" src="images/icons/arrowright.svg" alt="" width={7.41} height={12} />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
