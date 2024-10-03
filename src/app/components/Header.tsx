import ECommerceBranding from "./ECommerceBranding"
import SearchInput from "./SearchInput"
import UserActions from "./UserActions"

const Header = () => {
  return (
    <header className="flex h-[105px] items-center justify-between px-[110px]">
      <ECommerceBranding />
      <SearchInput />
      <UserActions />
    </header>
  )
}

export default Header
