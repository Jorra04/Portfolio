import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

const GITHU_LINK = "https://github.com/jorra04";
const LINKEDIN_LINK = "https://www.linkedin.com/in/jorrasingh/";
const TWITTER_LINK = "https://twitter.com";

const emailBody =
  "Hello, Jorra!\n\nWe would love to get in contact with you for an interview at <company name>. Please let us know when you are free to meet with us!";

const encodedEmailBody = encodeURIComponent(emailBody);
function Footer() {
  return (
    <div className="h-full flex flex-col ">
      <hr></hr>
      <div className="text-5xl pt-5 flex justify-center items-center gap-16 h-full">
        <Link href={TWITTER_LINK}>
          <AiFillTwitterCircle />
        </Link>

        <Link href={LINKEDIN_LINK}>
          <AiFillLinkedin />
        </Link>

        <Link
          href=""
          onClick={() =>
            window.open(
              `mailto:jorrasingh04@gmail.com?subject=Interview Request!&body=${encodedEmailBody}`
            )
          }
        >
          <AiFillMail />
        </Link>

        <Link href={GITHU_LINK}>
          <AiFillGithub />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
