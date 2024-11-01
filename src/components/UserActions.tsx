import Image from "next/image"
import Link from "next/link"

const UserActions = () => {
  return (
    <div className="flex">
      <div className="mr-14 flex gap-2">
        <Image src="/images/icons/user.svg" alt="Icon of user" height={24} width={24} />
        <Link href="/sign-in">Ingresar</Link>
      </div>

      <div className="flex gap-3.5">
        <Image
          src="/images/icons/heart.svg"
          alt="Heart icon to view likes"
          width={24}
          height={24}
        />
        <Image
          src="/images/icons/cart.svg"
          alt="Cart icon to view possible purchases"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}

export default UserActions
