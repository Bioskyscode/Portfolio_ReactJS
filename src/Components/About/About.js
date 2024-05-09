
import "./About.css"
import { motion } from 'framer-motion';

const About = () => {
    <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
    </div>
    return (
        <div className='container1 about-section' id='about'>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 picture-frame'>

                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 30 }}>
                        <div className='profile-picture-about'>
                            <div className='profile-picture-background-about'>

                            </div>
                        </div>
                    </motion.div>

                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-detail'>
                        <motion.div initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 50 }} className='about-title'>
                            <h5>About Me</h5>
                            <span className='line'></span>
                        </motion.div>
                        <motion.p  >
                            <p>Hello! I'm Abiodun Ajibade, with focus in Web Developement. I also have diverse skill set that spans UI/UX design and software test automation. Bringing more than 3 years of experience in the tech industry, I have honed my abilities to deliver elegant, efficient, and user-centric solutions that bridge the gap between technical functionality and visual appeal.</p>
                            <p>My approach blends analytical problem-solving with creative design thinking. I believe that understanding user needs is just as important as technical prowess in developing successful software products. I am a lifelong learner, continuously exploring new technologies and methodologies to stay at the forefront of web development trends.</p>
                            <p>If you're looking for a web developer who brings together expertise in UI/UX design to deliver exceptional digital experiences, I'd love to connect. Let's collaborate to bring your vision to life and create innovative solutions that make a lasting impact.</p>
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
