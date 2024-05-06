import React, { useState } from 'react'
import "./TeckStack.css"
import { motion } from 'framer-motion';

const TeckStack = () => {
    const techstacks = [
        { name: "Web Developer" },
        { name: "Vanila Js" },
        { name: "React Js" },
        { name: "Embedded JS" },
        { name: "json-server" },
        { name: "Express Js" },
        { name: "Framer Motion" },
        { name: "Node Js" },
        { name: "jQuery" },
        { name: "SQL" },
        { name: "Postgres" },
        { name: "CSS" },
        { name: "SASS" },
        { name: "Bootstrape" },
        { name: "GIT" },
    ];
    
    const colors = ["#ED9455", "#322C2B", "#8B322C", "#41B06E", "#6C0345",
        "#DC6B19", "#49243E", "#BC7FCD", "#FB9AD1", "#475569",
        "#9B3922", "#FA7070", "#D6589F", "#627254", "#4b5563"];

    const [showMoreTeckStack, setShowMoreTechStack] = useState(7);
    const loadMore = () => { setShowMoreTechStack(prevList => prevList + 3) };
    const loadLess = () => { setShowMoreTechStack(7) };
    return (
        <div className='container techstack-section' id='tech'>

            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className='line'></span>
            </div>
            <div className='row tech-grid1'>
                {techstacks.slice(0, showMoreTeckStack).map((tech, index) => (
                    <motion.div initial={{ y: 200, opacity:0 }} whileInView={{ y: 0, opacity:1 }} transition={{ type: "spring", stiffness: 70 }} className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index} >
                        <div className={index === 0 ? 'first-tech-content tech-content' : 'tech-content'}>
                            <span className='tech-num' style={{ backgroundColor: colors[index] }}>{index + 1}</span>
                            <p>{tech.name}</p>
                        </div>

                    </motion.div>
                ))}
            </div>
            {showMoreTeckStack >= techstacks.length ? null :
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 120 }}>
                    <button onClick={loadMore}
                        className='load-more-tech-stack'>Show More
                    </button>
                </motion.div>

            }

        </div>
    )
}

export default TeckStack