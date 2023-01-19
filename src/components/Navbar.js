import Image from "next/image";
import logo from "../../public/logo.png"
function Navbar() {
    return (
        <nav className="py-10 mb-12 flex justify-between ">
            <Image alt="J S representing the initials of the creator of this site, Jorra Singh" src={logo} height={40} width={40} />
            <ul className=" flex items-center">
              <li className="px-2">
                <a className=" text-md px-2 py-2">What I'm Learning</a>
              </li>
              <li className="px-2">
                <a className=" text-md px-2 py-2">Projects</a>
              </li>
              <li className="px-2">
                <a className=" text-md px-2 py-2">About Me</a>
              </li>
              <li className="px-2">
                <a
                  className=" text-md text-white bg-black px-2 py-2 rounded-lg"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
    );
}

export default Navbar;