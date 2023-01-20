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
const emailBody = `Hello, Jorra!

We would love to get in contact with you for an interview at <company name>. Please let us know when you are free to meet with us!

All the best.

Sincerely,
[Your Name]`;

const encodedEmailBody = encodeURIComponent(emailBody);

function Footer() {
  return (
    <>
      <hr className="border-t-2"></hr>
      <div className="pt-5 flex justify-center items-center gap-16 h-full">
        <Link href={TWITTER_LINK}>
          <AiFillTwitterCircle className="text-4xl" />
        </Link>

        <Link href={LINKEDIN_LINK}>
          <AiFillLinkedin className="text-4xl" />
        </Link>

        <AiFillMail className="text-4xl cursor-pointer" onClick={() =>
            window.open(
              `mailto:jorrasingh04@gmail.com?subject=Interview Request!&body=${encodedEmailBody}`
            )
          } />

        <Link href={GITHU_LINK}>
          <AiFillGithub className="text-4xl" />
        </Link>
      </div>
    </>
  );
}

export default Footer;