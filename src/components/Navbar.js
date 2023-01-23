import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const GITHUB_LINK = "https://github.com/jorra04";


  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    if (href !== router.pathname) {
      router.push(href);
    }

    if(isOpen) {
      setIsOpen(!isOpen);
    }
    
  };

  return (
    <nav className=" flex justify-between pt-4 relative z-10">
      <div className="flex items-center">
        <Link href="/" onClick={handleClick}>
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
            isOpen ? " border-2 " : ""
          } text-sm lg:flex-grow rounded-md bg-white`}
        >
          <Link
            href="learning"
            className={` ${
              isOpen ? " pl-1 border-b-2 bg-white" : ""
            } block mt-4 lg:inline-block lg:mt-0 mr-4`}
            onClick={handleClick}
          >
            What I'm Learning
          </Link>
          <Link
            href={GITHUB_LINK}
            className={` ${
              isOpen ? " pl-1 border-b-2  bg-white" : ""
            } block mt-4 lg:inline-block lg:mt-0 mr-4`}
            onClick={handleClick}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={` ${
              isOpen ? " pl-1 border-b-2  bg-white" : ""
            } block mt-4 lg:inline-block lg:mt-0 mr-4 `}
            onClick={handleClick}
          >
            About Me
          </Link>
          <Link
            href="../static/Resume.pdf"
            target="_blank"
            className={` ${
              !isOpen
                ? "bg-black rounded-lg px-2 py-2 text-white "
                : "text-black pl-1  bg-white"
            } block mt-4 lg:inline-block lg:mt-0  `}
            onClick={handleClick}
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
