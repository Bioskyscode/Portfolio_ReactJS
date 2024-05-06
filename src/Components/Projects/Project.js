import React, { useState } from 'react'
import ProjectList from './ProjectList';
import "./Project.css"
import { motion } from 'framer-motion';

const Project = () => {
    const displayedProject = 5;
    const [showMoreProjects, setShowMoreProjects] = useState(displayedProject);
    const loadMore = () => { setShowMoreProjects(prevList => prevList + 1) };
    const projects = [
        {
            name: "DevFinder",
            des: "Welcome to DevFinder, it is an App developped with React js for connecting with talented developers from around the globe. This is developed for developers to find and connect with other developers or for individuals or teams to find developers . DevFinder is designed to make your search as smooth and efficient as possible.",
            projectlink: "https://dev-finder-kappa-nine.vercel.app/",
            techused: [
                {
                    techname: "React js",
                },
                {
                    techname: "CSS",
                },
                {
                    techname: "Tailwind",
                },
                {
                    techname: "REST API",
                },
            ],
        },
        {
            name: "Job Portfolio",
            des: "This multi-page-application website is the built with vanilla JavaScript along with CSS for styling. This Website features a clean, user-friendy interface for easy navigation. This current single-page portfolio buit with React JS, is the improved version of this multi-page one.",
            projectlink: "https://bioskyscode.github.io/Portfolio/index.html",
            techused: [
                {
                    techname: "Javascript",
                },
                {
                    techname: "JQuery",
                },
                {
                    techname: "CSS",
                },
                {
                    techname: "HTML5",
                },
            ],
        },

        {
            name: "Insight-Inn",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
            projectlink: "https://iyanju-app-b4yr.vercel.app/",
            techused: [
                {
                    techname: "React js",
                },
                {
                    techname: "CSS",
                },
                {
                    techname: "Framer Motion",
                },
                {
                    techname: "REST API",
                },
            ],
        },


    ];


    return (
        <div className='vanilla-container' id='project'>
            <div className='section-title'>
                <h5>Projects</h5>
                <span className='line'></span>
            </div>
            <div className='row project-container'>
                {projects.slice(0, showMoreProjects).map((item, index) => (
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                        <ProjectList {...item} />
                    </div>
                ))}
            </div>

            {projects.length < displayedProject ? null : (showMoreProjects < projects.length &&

                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 50 }}>
                    <button onClick={loadMore}
                        className='load-more-tech-stack'>Show More
                    </button>
                </motion.div>
            )
            }
        </div>
    )
}

export default Project