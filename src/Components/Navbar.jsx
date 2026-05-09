import Button from "./NavComponents/Button"
import Orgamic from "./NavComponents/Orgamic"
import Tabs from "./NavComponents/Tabs"

const Navbar = () => {
  return (
    <div className="flex px-10 py-2 justify-between h-20 items-center bg-green-50">
      <Orgamic />
      <Tabs />
      <Button />
    </div>
  )
}

export default Navbar