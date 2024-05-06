import React from 'react'
import { FcHome, FcNightPortrait, FcSalesPerformance, FcFactory, FcTodoList, FcContacts } from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";

const sidebarItems = [
  {
    scroll: "home",
    icon: <i className="fa-solid fa-house fa-lg"></i>,
    text: "Home"
  },
  {
    scroll: "about",
    icon: <i className="fa-solid fa-address-card fa-lg"></i>,
    text: "About"
  },
  {
    scroll: "work",
    icon: <i className="fa-solid fa-laptop-code fa-lg"></i>,
    text: "Work   Experience"
  },
  {
    scroll: "project",
    icon: <i className="fa-solid fa-diagram-project fa-lg"></i>,
    text: "Projects"
  },
  {
    scroll: "tech",
    icon: <i className="fa-solid fa-gear fa-lg"></i>,
    text: "Teck Stack"
  },
  {
    scroll: "edu",
    icon: <i className="fa-solid fa-graduation-cap fa-lg"></i>,
    text: "Education"
  },

  {
    scroll: "testimonial",
    icon: <i className="fa-solid fa-comments fa-lg"></i>,
    text: "Testimonial"
  },
  {
    scroll: "contact",
    icon: <i className="fa-solid fa-file-contract fa-lg"></i>,
    text: "Contact"
  }
];

export default sidebarItems