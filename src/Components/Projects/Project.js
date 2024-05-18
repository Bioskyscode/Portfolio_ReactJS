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
            name: "Estate Connect",
            des: "Estate-Connect is anapplication designed to finding accommodations. Developed with React JS and CSS together with Firebase for data storage, Estate-Connect offers a seamless and user-friendly interface that connects users with a variety of housing options.",
            projectlink: "https://estate-connect.vercel.app/",
            techused: [
                {
                    techname: "React js",
                },
                {
                    techname: "CSS",
                },
                {
                    techname: "Firebase",
                },
            ],
        },

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
            des: "This is single-page app enables users to read different advices as much as they want. It also has the functionality that enable users to leave review based on their level of satisfaction.",
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