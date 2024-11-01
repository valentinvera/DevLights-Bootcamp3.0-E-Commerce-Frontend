export type ProductSpotlightBannerStyles = {
  containerClassName: string
  bannerWrapperClassName: string
  imageWrapperClassName: string
  mainImageContainerClassName: string
  mainImageClassName: string
  contentWrapperClassName: string
  titleClassName: string
  subtitleClassName: string
  linkClassName: string
  backgroundImageContainerClassName: string
  backgroundImageClassName: string
  gradientContainerClassName: string
  gradientClassName: string
}

export const ProductSpotlightBannerStylesHome: ProductSpotlightBannerStyles = {
  containerClassName: "relative",
  bannerWrapperClassName: "borde-modificado relative flex items-center bg-[#E7E7EB4D]",
  imageWrapperClassName: "flex items-center",
  mainImageContainerClassName: "z-50 ml-[146px]",
  mainImageClassName: "object-contain",
  contentWrapperClassName: "flex flex-col items-end",
  titleClassName: "text-[44px] font-extrabold leading-tight text-[#232327]",
  subtitleClassName: "mb-6 text-[22px] text-[#232327]",
  linkClassName:
    "flex h-10 w-[100px] items-center justify-center gap-1 rounded-[4px] bg-[#F83758] text-xs font-medium text-white hover:opacity-90",
  backgroundImageContainerClassName: "absolute left-0 top-0 z-10",
  backgroundImageClassName: "h-[404px] w-[271px]",
  gradientContainerClassName: "absolute left-0 top-0 z-20",
  gradientClassName: "h-[404px] w-[38.39px] bg-custom-gradient",
}

export const ProductSpotlightBannerStylesTrendingProducts: ProductSpotlightBannerStyles = {
  containerClassName: "relative w-full",
  bannerWrapperClassName: "relative flex bg-white h-[192px]",
  imageWrapperClassName: "flex items-center",
  mainImageContainerClassName: "z-10 ml-[250px]",
  mainImageClassName: "h-40 w-full",
  contentWrapperClassName: "flex flex-col items-center",
  titleClassName: "text-[44px] font-extrabold leading-tight text-[#232327]",
  subtitleClassName: "text-[22px] text-[#232327] mb-2",
  linkClassName:
    "flex h-10 w-[100px] items-center justify-center gap-1 rounded-[4px] bg-[#F83758] text-xs font-medium text-white hover:opacity-90",
  backgroundImageContainerClassName: "absolute left-0 top-0 z-10",
  backgroundImageClassName: "h-[192px] w-[271px] object-cover",
  gradientContainerClassName: "absolute left-0 top-0 z-20",
  gradientClassName: "h-[192px] w-[38px] bg-custom-gradient",
}
