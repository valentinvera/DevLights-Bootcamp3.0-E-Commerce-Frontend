import Link from "next/link"

interface NavLink {
  label: string
  href: string
}

const NavLinks: NavLink[] = [
  { label: "Beauty", href: "/" },
  { label: "Fashion", href: "/" },
  { label: "Kids", href: "/" },
  { label: "Mens", href: "/" },
  { label: "Womens", href: "/" },
  { label: "Gifts", href: "/" },
]

const NavBar = () => {
  return (
    <nav className="flex justify-center bg-[#FD6E86] py-1.5">
      <ul className="flex gap-4">
        {NavLinks.map(({ label, href }, index) => (
          <li key={index}>
            <Link className="text-sm text-white" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
