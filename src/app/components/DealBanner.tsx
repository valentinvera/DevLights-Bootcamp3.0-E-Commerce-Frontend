import Image from "next/image"
import Link from "next/link"

const DealBanner = () => {
  return (
    <div className="mx-auto mt-[20px] flex h-[84px] w-[708px] items-center justify-between rounded-lg bg-[#4392F9] px-16 text-white">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-base font-medium">Deal of the day</h2>
        <div className="flex gap-1">
          <Image src="/images/icons/clock.svg" alt="" width={13.33} height={13.47} />
          <p className="text-xs">22h 55m 20s remaining</p>
        </div>
      </div>

      <div className="flex items-center">
        <Link
          href=""
          className="flex gap-2 rounded-[4px] border border-solid border-white px-2.5 py-1.5 text-xs font-semibold"
        >
          View all
          <Image src="/images/icons/arrowlargeright.svg" alt="" width={13.33} height={9.33} />
        </Link>
      </div>
    </div>
  )
}

export default DealBanner
