import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex h-[171px] w-full items-center justify-between bg-[#FD6E86] px-[140px]">
      <Image src="/images/icons/logo-white.svg" alt="Logo in white" width={214.28} height={59.71} />
      <div className="flex flex-col gap-1">
        <p className="text-lg font-medium text-white">Copyright 2024</p>
        <Link
          href="https://devlights.com"
          className="text-lg font-medium text-white"
          target="_blank"
        >
          Devlights
        </Link>
      </div>
    </footer>
  )
}

export default Footer
