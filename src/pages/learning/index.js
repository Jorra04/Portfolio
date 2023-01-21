import LearningCard from "@/components/Learning";
import styles from "./styles.module.css";
import ecommerceImage from "../../../public/ecommerce.png";
import securityImage from "../../../public/security.png";
import missionCritical from '../../../public/missionCritical.png'
import computerNetworks from '../../../public/network.png'
import distSystems from '../../../public/distributed.png'
function Learning() {
  const thingsILearn = [
    {
      name: "E-commerce Systems",
      image: ecommerceImage,
      link: "https://www.optimizely.com/optimization-glossary/ecommerce-platform/"
    },
    {
      name: "Computer Security",
      image: securityImage,
      link: "https://www.bleepingcomputer.com/"
    },
    {
      name: "Mission Critical Systems",
      image: missionCritical,
      link: "https://www.suse.com/suse-defines/definition/mission-critical-computing/#:~:text=Mission%2Dcritical%20computing%2C%20also%20known,function%20essential%20to%20business%20operations."
    },
    {
      name: "Computer Networking and Applications",
      image: computerNetworks,
      link: "https://www.ibm.com/topics/networking"
    },
    {
      name: "Distributed Systems",
      image: distSystems,
      link: "https://www.splunk.com/en_us/data-insider/what-are-distributed-systems.html"
    },
  ];

  return (
    <section
      className={`flex flex-col justify-center overflow-y-scroll p-10 rounded-md h-full ${styles.learningCardSection}`}
    >
      <h2 className="text-2xl font-medium">What I am Learning</h2>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {thingsILearn.map((thing) => (
          <LearningCard key={thing} name={thing.name} image={thing.image} link={thing.link} />
        ))}
      </div>
    </section>
  );
}

export default Learning;
