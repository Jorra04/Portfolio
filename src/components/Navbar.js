import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between pt-4">
      <div className="flex items-center">
        <Link href='/'>
          <Image
            className={` ${
              isOpen ? "hidden" : "block"
            } xxsm:w-9 xxsm:h-9  lg:w-10 lg:h-10`}
            alt="J S representing the initials of the creator of this site, Jorra Singh"
            src={logo}
            height={40}
            width={40}
          />
        </Link>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center w-full lg:w-auto`}
      >
        <div
          className={` ${
            isOpen ? " border-2" : ""
          } text-sm lg:flex-grow rounded-md`}
        >
          <Link
            href="learning"
            className={` ${
              isOpen ? " pl-1 border-b-2" : ""
            } block mt-4 lg:inline-block lg:mt-0 mr-4`}
          >
            What I'm Learning
          </Link>
          <Link
            href="/projects"
            className={` ${
              isOpen ? " pl-1 border-b-2" : ""
            } block mt-4 lg:inline-block lg:mt-0 mr-4`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={` ${
              isOpen ? " pl-1 border-b-2" : ""
            } block mt-4 lg:inline-block lg:mt-0 mr-4 `}
          >
            About Me
          </Link>
          <Link
            href="../static/Resume.pdf"
            target="_blank"
            className={` ${
              !isOpen ? "bg-black rounded-lg px-2 py-2 text-white " : "text-black pl-1"
            } block mt-4 lg:inline-block lg:mt-0  `}
          >
            Resume
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded hover:border-white"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
