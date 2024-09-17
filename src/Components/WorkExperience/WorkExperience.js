import React from 'react'
import "./WorkExperience.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdGroupWork } from "react-icons/md";
import colors from '../Colors';

const WorkExperience = () => {
    const work = [
        {
            companyname: "Biqx GmbH",
            location: "Braunschweig, Germany",
            position: "Software Tester",
            des: "Using modern QA technologies and methodology to ensure the quality of software applications and to discover their weak-points and any sorf of defects or mismatch",
            year: "2023-2024",

            techskills: [
                {
                    techname: "Robotframework",
                },
                {
                    techname: "Python",
                },
                {
                    techname: "GitLab-CI",
                },
                {
                    techname: "Selenium",
                },
                {
                    techname: "Git",
                },
            ],
        },

        {
            companyname: "Datev eG",
            location: "Nürnberg, Germany",
            position: "UI/UX Designer",
            des: "Create intuitive experience for application that is responsive across different devices and screen sizes. Create user interaction with Motion Design",
            year: "2022-2023",

            techskills: [
                {
                    techname: "Figma",
                },
                {
                    techname: "Motion Design",
                },
               
            ],
        },

        {
            companyname: "Grace Cloud GmbH",
            location: "Ilmenau, Germany",
            position: "Web Developer",
            des: "Design and Development of a responsive product website using modern web development technology HTML5, CSS3 and JavaScript.",
            year: "2020-2022",

            techskills: [
                {
                    techname: "Javascript",
                },
                {
                    techname: "SASS",
                },
                {
                    techname: "Bitbucket",
                },
                {
                    techname: "Jira",
                },
            ],
        },

        {
            companyname: "Myrioi Solutions",
            location: "Remote, Nigeria",
            position: "Software Tester",
            des: "Using modern QA technologies and methodology to ensure the quality of software applications and to discover their weak-points and any sorf of defects or mismatch",
            year: "2017-2022",

            techskills: [
                {
                    techname: "Jenkins",
                },
                {
                    techname: "Playwrite",
                },
                {
                    techname: "Cypress",
                },
                {
                    techname: "Selenium",
                },
                {
                    techname: "Java",
                },
            ],
        },
    ];


    return (
        <div className='vanilla-container' id='work'>
            <div className='section-title'>
                <h5>Work Experience</h5>
                <span className='line'></span>
            </div>


            <div className='work-experience-section'>
                <VerticalTimeline lineColor={colors[1]}>
                    {work.map((item, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: colors[index+4], color: '#e0f2fe' }}
                            contentArrowStyle={{ borderRight: '7px solid  #a21caf' }}
                            date={item.year}
                            dateClassName='date-class'
                            iconStyle={{ background: colors[index+4], color: '#fff' }}
                            icon={<MdGroupWork />}
                            key={index}
                        >
                            <h3 className="vertical-timeline-element-title">{item.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.companyname} <span className='job-location'>{item.location}</span></h4>
                            <div className='row'>
                                {item.techskills.map((tech, index) => (
                                    <div className='col-xl-6 col-lg-4 col-md-6 col-sm-12 ' key={index}>
                                        <div style={{background:colors[index+7]}} className='tech-skill color'> {tech.techname}</div>
                                    </div>
                                ))}

                            </div>
                            <p className='work-des'>
                                {item.des}
                            </p>
                        </VerticalTimelineElement>
                    ))}


                </VerticalTimeline>
            </div>


        </div>
    )
}

export default WorkExperience