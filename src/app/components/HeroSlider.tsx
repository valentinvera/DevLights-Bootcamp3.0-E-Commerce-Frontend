import Image from "next/image"
import Link from "next/link"

const HeroSlider = () => {
  return (
    <section className="relative">
      <Image
        className=""
        src="/images/heroimage.png"
        alt="Image of the hero"
        width={1440}
        height={366}
      />

      <div className="*:button flex items-center justify-between px-[52px]">
        <button>
          <Image className="" src="images/icons/arrowleft.svg" alt="" width={7.41} height={12} />
        </button>

        <button>
          <Image className="" src="images/icons/arrowright.svg" alt="" width={7.41} height={12} />
        </button>
      </div>

      <article className="absolute top-[60px] pl-[110px] text-white">
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
