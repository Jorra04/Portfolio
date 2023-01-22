import LearningCard from "@/components/Learning";
import styles from "./styles.module.css";
import ecommerceImage from "../../../public/ecommerce.png";
import securityImage from "../../../public/security.png";
import missionCritical from '../../../public/missionCritical.png'
import computerNetworks from '../../../public/network.png'

import distSystems from '../../../public/distributed.png'
import fullstack from '../../../public/fullstack.png'
import sysDesign from '../../../public/systemDesign.png'
import algorithms from '../../../public/algorithms.png'
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
    }
  ];

  const selfDirectedTopics = [
    {
      name: "Distributed Systems",
      image: distSystems,
      link: "https://www.splunk.com/en_us/data-insider/what-are-distributed-systems.html"
    }, 
    {
      name : "Full-Stack Web Development",
      image: fullstack,
      link: "https://www.w3schools.com/whatis/whatis_fullstack.asp"
    },{
      name : "System Design",
      image: sysDesign,
      link: "https://www.techopedia.com/definition/29998/system-design"
    },{
      name : "Algorithms",
      image: algorithms,
      link: "https://www.programiz.com/dsa/algorithm"
    }
  ];

  return (
    
    <section
      className={`flex flex-col justify-center p-10 rounded-md h-full ${styles.learningCardSection}`}
    >
      <>
      <h2 className="text-2xl font-medium">Learning Guided Through School</h2>
      <br></br>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {thingsILearn.map((thing) => (
          <LearningCard key={thing} name={thing.name} image={thing.image} link={thing.link} />
        ))}
      </div>
      <br>
      </br>
      <h2 className="text-2xl font-medium">Self-Directed Learning</h2>
      <br></br>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selfDirectedTopics.map((thing) => (
          <LearningCard key={thing} name={thing.name} image={thing.image} link={thing.link} />
        ))}
      </div>
      </>
    </section>
  );
}

export default Learning;
