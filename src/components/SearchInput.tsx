import Image from "next/image"

const SearchInput = () => {
  return (
    <div className="relative flex items-center">
      <Image
        className="absolute left-4"
        src="/images/icons/search.svg"
        alt="Search icon"
        width={16}
        height={16}
      />
      <input
        className="h-[40px] w-[490.67px] rounded-md bg-white pl-[42px] placeholder:text-sm"
        type="text"
        placeholder="Search any Product.."
      />
      <Image
        className="absolute right-3"
        src="/images/icons/microphone.svg"
        alt="Microphone icon"
        width={14}
        height={19}
      />
    </div>
  )
}

export default SearchInput
