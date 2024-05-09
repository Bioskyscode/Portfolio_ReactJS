import React, { useState } from 'react'
import { motion } from 'framer-motion';
import colors from '../Colors';
import Button from '../Button/Button';

const ProjectList = ({ name, des, projectlink, techused }) => {
    const [show, setShow] = useState(false);

    function showMore() {
        setShow(!show)
    }
    
    return (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            whileHover={{ y:-7 }} transition={{ type: "spring", stiffness: 70 }}
            className='project-list'>
                <div className='title-and-collapse-option'>
                    <h5>{name}</h5>
                    <p onClick={showMore}> {show ? <i className="fa-solid fa-angle-up fa-xl"></i> : <i className="fa-solid fa-angle-down fa-xl"></i>}</p>
                </div>
                <div className='proj-description'>
                {show ? <p>{des}</p> : <p>{des.substring(0, 130)} ...<span onClick={showMore} className='read-more'>Read more</span></p>}
                </div>
                

                <div className='row'>
                    {techused.map((tech, index) => (
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12' key={index}>
                            <div style={{background:colors[index +1]}} className='tech-used'>{tech.techname}</div>
                        </div>
                    ))}
                </div>

                <Button className="live-demo" text={<a target='_' href={projectlink}>Visit Website <i className="fa-solid fa-arrow-right fa-beat"></i></a>}/>

            </motion.div>
    )
}

export default ProjectList