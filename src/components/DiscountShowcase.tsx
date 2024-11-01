import Image from "next/image"
import Link from "next/link"

const DiscountShowcase = () => {
  return (
    <section className="flex flex-col items-center justify-center px-[80px]">
      <Image
        src="/images/discountsales.png"
        className="mb-2 h-[402px] w-full"
        alt="Discount and sales"
        width={1197}
        height={402}
      />

      <article className="mb-12 flex items-center gap-[300px]">
        <div>
          <h4 className="text-[44px] font-extrabold text-[#232327]">New Arrivals</h4>
          <p className="text-[22px] font-normal text-[#232327]">Summer’ 25 Collections</p>
        </div>

        <div>
          <Link
            href=""
            className="mt-6 flex h-10 w-[100px] items-center justify-center gap-1 rounded-[4px] bg-[#F83758] text-xs font-medium text-white hover:opacity-90"
          >
            Visit now
            <Image src="/images/icons/arrowlargeright.svg" alt="" width={13.33} height={9.33} />
          </Link>
        </div>
      </article>

      <div className="mb-6">
        <div className="mb-6 flex flex-col gap-1">
          <p className="text-xl font-medium text-black">Sponserd</p>
          <p className="text-base font-bold text-black">up to 50% Off</p>
        </div>

        <Image
          src="/images/image.png"
          //   className="mb-2 h-[300px] w-full px-[80px]"
          alt="Image"
          width={1197}
          height={300}
        />
      </div>
    </section>
  )
}

export default DiscountShowcase
