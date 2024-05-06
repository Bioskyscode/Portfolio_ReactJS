
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

                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 50 }}>
                        <div className='profile-picture-about'>
                            <div className='profile-picture-background-about'>

                            </div>
                        </div>
                    </motion.div>

                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-detail'>
                        <motion.div initial={{ y: -100, opacity:0 }} whileInView={{ y:0, opacity:1}} transition={{ type: "spring", stiffness: 50 }} className='about-title'>
                            <h5>About Me</h5>
                            <span className='line'></span>
                        </motion.div>
                            <motion.p initial={{ scale: 0 }} whileInView={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 70 }}>
                                I'm a 3-folds expert based in Hanover, Germany with quality experience as Web Developer, Software Automation Tester and UI/UX Designer. I strive to build immersive and beautiful web applications through carefully crafted code, user-centric design and to assure their qualities to satisfy customers and to meet requirements. I design and develop services for customers specializing in creating stylish, modern websites and online stores. My passion is to design digital user experiences that aliviate user pain points.
                            </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
