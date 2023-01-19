import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
function Footer() {
    return (
        <div className="h-full flex flex-col ">
          <hr></hr>
          <div className="text-5xl pt-5 flex justify-center items-center gap-16 h-full">
            <AiFillTwitterCircle/>
            <AiFillLinkedin />
          </div>
        </div>
    )
}

export default Footer;