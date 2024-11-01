import Image from "next/image"

const SpecialOffers = () => {
  return (
    <div className="mx-auto mb-20 flex h-[84px] w-[708px] items-center gap-[75px] rounded-md bg-white px-14">
      <Image src="/images/specialoffers.png" alt="Special Offers" width={65} height={65} />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-black">Special Offers</h3>
          <span className="flex size-[20px] items-center rounded-full border">
            <span className="h-[11px] w-[12px] pb-4 text-xs">😱</span>
          </span>
        </div>
        <p className="text-base font-light text-black">
          We make sure you get the offer you need at best prices
        </p>
      </div>
    </div>
  )
}

export default SpecialOffers
