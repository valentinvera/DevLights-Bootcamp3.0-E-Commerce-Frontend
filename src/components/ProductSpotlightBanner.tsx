import Image from "next/image"
import Link from "next/link"
import { ProductSpotlightBannerStyles } from "@/app/styles/ProductSpotlightBanner"

const ProductSpotlightBanner = ({
  containerClassName,
  bannerWrapperClassName,
  imageWrapperClassName,
  mainImageContainerClassName,
  mainImageClassName,
  contentWrapperClassName,
  titleClassName,
  subtitleClassName,
  linkClassName,
  backgroundImageContainerClassName,
  backgroundImageClassName,
  gradientContainerClassName,
  gradientClassName,
}: ProductSpotlightBannerStyles) => {
  return (
    <div className={containerClassName}>
      <div className={bannerWrapperClassName}>
        <div className={imageWrapperClassName}>
          <div className={mainImageContainerClassName}>
            <Image
              src="/images/heels.png"
              alt="Heels"
              width={500}
              height={300}
              className={mainImageClassName}
            />
          </div>

          <div className={contentWrapperClassName}>
            <h3 className={titleClassName}>Flat and Heels</h3>
            <p className={subtitleClassName}>Stand a chance to get rewarded</p>
            <Link href="" className={linkClassName}>
              Visit now
              <Image src="/images/icons/arrowlargeright.svg" alt="" width={13.33} height={9.33} />
            </Link>
          </div>
        </div>
      </div>

      <div className={backgroundImageContainerClassName}>
        <Image
          className={backgroundImageClassName}
          src="/images/backgroundstars.png"
          alt="Small stars"
          width={271}
          height={403}
        />
      </div>

      <div className={gradientContainerClassName}>
        <div className={gradientClassName}></div>
      </div>
    </div>
  )
}

export default ProductSpotlightBanner
