import React, { createContext, useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import TeckStack from './Components/TechStack/TeckStack'
import Project from './Components/Projects/Project'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Education from './Components/Education/Education'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";
import "./App.css"
import NavbarMobile from './Components/Sidebar/NavbarMobile'

export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme} className='main'>
        <NavbarMobile changeTheme={changeTheme} theme={theme}/>
        <Sidebar changeTheme={changeTheme} theme={theme}/>
        <About />
        <WorkExperience />
        <Project />
        <TeckStack />
        <Education />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop
        top="500"
        component={<i className="fa-solid fa-arrow-up fa-fade fa-lg"></i>}
        className='scroll-top' smooth />
    </ThemeContext.Provider>
  )
}

export default App