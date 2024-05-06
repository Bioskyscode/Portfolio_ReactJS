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
            position: "Automation Software Tester",
            des: "Write automation scripts to detect bugs in application functionalities that run periodically on version control system with downloadable test results.",
            year: "2023-present",

            techskills: [
                {
                    techname: "Python",
                },
                {
                    techname: "Robotframework",
                },
                {
                    techname: "Javascript",
                },
                {
                    techname: "GitLab",
                },
            ],
        },

        {
            companyname: "Datev eG",
            location: "Nürnberg, Germany",
            position: "UI/UX Designer",
            des: "Create intuitive experience for application that is responsive across different devices and screen sizes. Create user interaction with Motion Design",
            year: "2022",

            techskills: [
                {
                    techname: "Figma",
                },
               
            ],
        },

        {
            companyname: "Grace Cloud GmbH",
            location: "Ilmenau, Germany",
            position: "Web Developer",
            des: "Design and Development of a responsive product website using modern web development technology HTML5, CSS3 and JavaScript.",
            year: "2020-2021",

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
                            contentStyle={{ background: colors[index], color: '#e0f2fe' }}
                            contentArrowStyle={{ borderRight: '7px solid  #a21caf' }}
                            date={item.year}
                            dateClassName='date-class'
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<MdGroupWork />}
                            key={index}
                        >
                            <h3 className="vertical-timeline-element-title">{item.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.companyname} <span className='job-location'>{item.location}</span></h4>
                            <div className='row'>
                                {item.techskills.map((tech, index) => (
                                    <div className='col-xl-6 col-lg-4 col-md-6 col-sm-12 ' key={index}>
                                        <div style={{background:colors[index +6]}} className='tech-skill color'> {tech.techname}</div>
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