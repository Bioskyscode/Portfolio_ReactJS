import React from 'react'
import "./Testimonial.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

const Testimonial = () => {
    const data = [
        {
            name: "Ayodeji",
            position: "Project Manager",
            des: "His  ability to balance form and function is truly exceptional. Our site is not only visually stunning but also incredibly user-friendly.",
            img: "https://media.licdn.com/dms/image/C4D03AQEUvX_f5QN_vA/profile-displayphoto-shrink_800_800/0/1648865648256?e=2147483647&v=beta&t=WRQfH_UrKFVQ6IbjR9uIejLR-fRis2HHm7UfQztHDD4",
        },
        {
            name: "Fatanmi",
            position: "Senior Software Developer",
            des: "His passion for design and development shines through in every aspect of his work. His works not only beautiful but also significantly improved user experience.",
            img: "https://media.licdn.com/dms/image/v2/D4E03AQH9KfMEhBynGw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695704366767?e=1732147200&v=beta&t=i_ETIcEo70gZo5rsTZEjZZeWWiGHIRnHXX1HWxivM_0",
        },
        {
            name: "Fikayo",
            position: "Network Engineer| Systems Engineer | IoT",
            des: "His expertise in UX/UI design has made a noticeable difference in how users interact with his sites.",
            img: "https://media.licdn.com/dms/image/v2/D4E03AQF_xm8vbVUJBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670662803039?e=1732147200&v=beta&t=DpwdmqGM12pWMUby4lEc5OD1_oYBIErkFabQfP27UPg",
        },
        {
            name: "Fola",
            position: "Senior FullStack Developer",
            des: "I am really impressed with his technical expertise and professionalism",
            img: "https://media.licdn.com/dms/image/D4D03AQGoaq0klxu4Mg/profile-displayphoto-shrink_200_200/0/1694642470642?e=2147483647&v=beta&t=inF2uXSy-T5KaGWxri8fxvze15sdxjySQcAzRpvWda4",
        },
        {
            name: "Moses",
            position: "Teaching Assistant- PhD",
            des: "He was good at his work. He worked on several complex project",
            img: "https://media.licdn.com/dms/image/v2/C4D03AQErir9MdCRSuw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1620827803821?e=1732147200&v=beta&t=2Pn9opgTgsqT2a9bGBUyhyjpoftIMnm9gBBX4_7GEE8",
        },

         {
             name: "Omotola",
             position: "Software Tester",
             des: "If you're looking for a creative, reliable, and highly skilled web developer, look no further than him",
             img: "https://media.licdn.com/dms/image/v2/D4D03AQEJCdLT4WoGLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725382904355?e=1732147200&v=beta&t=btZxgYuSZTynEUNLZSuol4tCy0im7m05Y2Fqfilaft8",
         },
        
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='testimonial-section' id='testimonial'>
            <div className='section-title'>
                <h5>Testimonial</h5>
                <span className='line'></span>
            </div>

            <div className='testimonial-slider'>

                <Slider {...settings}>

                    {data.map((item, index) => (
                       
                            <div className='content-slider-main' key={index}>
                                <motion.div 
                                initial={{ scale: 0 }} 
                                whileInView={{ scale: 0.9 }} 
                                transition={{ type: "spring", stiffness: 20 }}  
                                viewport={{once:true}}
                                className='content-slider' >
                                    <img className='slider-img' src={item.img} alt='img'></img>
                                    <p>{item.des}</p>
                                    <p>{item.name}</p>
                                    <p>{item.position}</p>
                                </motion.div>
                            </div>
                        
                    ))}

                </Slider>

            </div>
        </div>
    )
}

export default Testimonial