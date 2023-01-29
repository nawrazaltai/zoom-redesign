import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex sticky justify-between items-center p-3 h-16 border-b-2 md:justify-between lg:justify-between lg:p-9">
      <img
        className=" w-24 md:w-28 lg:w-32 "
        src="../public/Zoom_logo.svg"
        alt="Zoom logo"
      />
      <nav className="flex items-center">
        <ul className="flex w-32 items-center justify-between text-blue-600 font-bold font-open-sans md:justify-end md:pr-2 lg:gap-4 lg:-mr-8">
          <li className="sm:hidden md:hidden lg:flex">Products</li>
          <li className="sm:hidden md:hidden lg:flex">Solutions</li>
          <li className="sm:hidden md:hidden lg:flex">Resources</li>
          <li className="sm:hidden md:hidden lg:flex ">Plans&Pricing</li>
          <li className="sm:hidden md:hidden lg:flex lg:text-3xl">
            <FaUserCircle />
          </li>
          <li className="md:hidden">Join</li>
          <li className="md:hidden">Host</li>
          <li>
            <RxHamburgerMenu className="flex items-center text-2xl md:text-3xl lg:hidden" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
