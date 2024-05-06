
import "./Home.css";
import Typewriter from 'typewriter-effect';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import { Link } from "react-scroll";


const Home = ({ changeTheme, theme }) => {
  const animation = {
    startLeft: { x: -300, opacity: 0 },
    fadeRight: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 110 } },
    startBottom: { x: 300, opacity: 0 },
    fadeLeft: { x: 0, opacity: 1, transition: { delay: 0.7, type: "spring", stiffness: 120 } },
    zoom: { scale: 1.1 }
  }
  return (
    <div className='container-fluid1 home-section' id='home'>
      {/* Toggle between dark and light background mode */}
      <div onClick={changeTheme} className='change-theme'>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={25} />
          </p>
        ) : (
          <p className="light-icon">
            <BsFillSunFill size={30} />
          </p>
        )}
      </div>

      <div className='container1 home-content'>
        <a target='_' href='https://www.linkedin.com/in/abiodun-ajibade-0840a1228/'><i className="fa-brands fa-linkedin fa-2xl"></i></a>

        <motion.div
          variants={animation} initial="startLeft" whileInView="fadeRight"
        >
          <h1>Hello, I'm Abiodun</h1>
          <h4 >
            <Typewriter
              options={{
                strings: ['Fullstack Web Developer',
                  'Automation Software Tester',
                  'UI/UX Designer'],
                autoStart: true,
                loop: true,
                pauseFor: 5000
              }}
            />
          </h4>
        </motion.div>

        <motion.div variants={animation} initial="startBottom" whileInView="fadeLeft" className='row1 buttons-for-action'>

          <motion.div variants={animation} whileHover="zoom">
            <Link to='contact' spy={true}>
              <Button className="hire-me-button" text="Hire Me" />
            </Link>
          </motion.div>

          <motion.div variants={animation} whileHover="zoom">
            <Button className="get-resume-button" text={<a href='https://bioskyscode.github.io/Resume/' target="_">
              Get Resume
            </a>} />
          </motion.div>

        </motion.div>
      </div>


    </div>
  )
}

export default Home