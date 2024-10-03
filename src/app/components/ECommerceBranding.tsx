import Image from "next/image"

const ECommerceBranding = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Image src="/images/icons/logo.svg" alt="Website logo" width={42.03} height={32} />
      <div className="flex flex-col">
        <h1 className="relative top-0.5 text-base font-bold">E-Commerce</h1>
        <span className="relative bottom-0.5 left-0.5 text-[8px] font-medium">By Bootcamp 3.0</span>
      </div>
    </div>
  )
}
export default ECommerceBranding
