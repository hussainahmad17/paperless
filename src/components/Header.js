import { FaSearch, FaHeart, FaUser, FaBars } from "react-icons/fa"
import Cart from "./Cart"

export const Header = () => {
  return (
    <header className="border-b shadow-sm">
      <div className="hidden md:flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="px-4 py-2 text-sm font-medium flex items-center">
            <img src="/logo1.png" alt="Pro" className="inline h-12 mr-2" />
            PAPERLESS PRO™
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="border rounded-full pl-10 pr-4 py-2 w-64" />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <Cart />
          <span className="text-sm">Log in</span>
          <span className="text-sm border-l pl-4 ml-4">Sign up</span>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center px-4 py-3 space-x-4">
        <FaBars className="text-xl" />
        <FaSearch className="text-xl" />
        <img src="/logo1.png" alt="Paperless Pro" className="h-12" />
        <FaHeart className="text-xl" />
        <Cart />
        <FaUser className="text-xl" />
      </div>
    </header>
  )
}
