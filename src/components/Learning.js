// LearningCard.js
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/LearningCard.module.css";
function LearningCard({ name, image, link }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md relative ${styles.LearningCard_div}`}
    >
      <Link href={link}>
      <div className={styles.LearningCard_shadowDiv}>
        
          <Image
            src={image}
            className={`${styles.LearningCard_img} opacity-50`}
          />
        <div
          className={`absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center ${styles.LearningCard_textContainer}`}
        >
          <h4 className={`text-lg text-white text-center font-medium ${styles.LearningCard_text}`}>
            {name}
          </h4>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default LearningCard;
