import styles from './styles.module.css'
import React, { useState, useEffect } from 'react';



const paragraph = "I am a fourth-year Software Engineering student at York University, specializing in Software Security. My studies have provided me with a strong foundation in algorithm design, operating systems, embedded system development, and computer networks. I have gained valuable experience through two internships in the industry, and I am eager to continue my professional development with a company that values growth and innovation in software engineering. My passion for the field drives me to stay current with the latest technologies and trends, and I am excited to bring my skills and enthusiasm to a dynamic team."
function About() {

    return (
        <>
        <div className=" flex h-full w-full justify-center items-center md:flex-row xxsm:flex-col">
            <div className="basis-1/4">
                <h1 className=" xxsm:text-center md:text-left lg:text-8xl md:text-7xl sm:text-6xl xsm:text-5xl xxsm:text-4xl">Hello! I am <span className={styles.rotateNameColour}>Jorra Singh</span>.</h1>
            </div>
            <br/>
            <br/>
            <div className="basis-3/4 flex justify-center items-center h-fit ">
                <div className={`lg:w-1/2 xxsm:w-3/4 xxsm:h-full md:h-auto ${styles.paragraphContainer}`}>
                    <p className=" xl:text-2xl  lg:text-lg md:text-base xxsm:text-sm ">{paragraph}</p>
                </div>
            </div>
            
        </div>
        <br></br>
        </>
    )
}

export default About;