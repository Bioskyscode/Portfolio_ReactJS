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
            des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            img: "https://media.licdn.com/dms/image/C4D03AQEUvX_f5QN_vA/profile-displayphoto-shrink_800_800/0/1648865648256?e=2147483647&v=beta&t=WRQfH_UrKFVQ6IbjR9uIejLR-fRis2HHm7UfQztHDD4",
        },
        {
            name: "Fatanmi",
            position: "Software Engineer",
            des: "He was good at his work. He worked on several complex project",
            img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            name: "Fikayo",
            position: "Marketing Manager",
            des: "He was good at his work. He worked on several complex project",
            img: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            name: "Fola",
            position: "Web Developer",
            des: "He was good at his work. He worked on several complex project",
            img: "https://images.pexels.com/photos/2776582/pexels-photo-2776582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            name: "Primus",
            position: "Developer",
            des: "He was good at his work. He worked on several complex project",
            img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            name: "Dare",
            position: "Developer",
            des: "He was good at his work. He worked on several complex project",
            img: "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
                                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 20 }}  className='content-slider' >
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