import React from 'react'
import "./Education.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const study = [
        {
            name: "Technische Universität Ilmenau, Germany",
            degree: "M.sc | Research in Computer and Systems Engineering",
            year: "2019-2022",
            des: "",
        },
        {
            name: "LAUTECH, Ogbomosho Nigeria",
            degree: "B.Tech | Computer Science",
            year: "2012-2018",
            des: "",
        },
    ];


    const colors = [
        "#a78bfa",
        "#818cf8",
    ];

    return (
        <div className='venilla-container' id='edu'>
            <div className='section-title'>
                <h5>Education</h5>
                <span className='line'></span>
            </div>

            <div className='work-experience-section'>
                <VerticalTimeline lineColor={colors[2]}>
                    {study.map((item, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: colors[index], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  gray' }}
                            date={item.year}
                            dateClassName='date-class'
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<FaGraduationCap />}
                            key={index}
                        >
                            <h3 className="vertical-timeline-element-title">{item.degree}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                            <p>
                                {item.des}
                            </p>
                        </VerticalTimelineElement>
                    ))}


                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education