import React from 'react';
import "./SidebarList.css";
import { Link } from "react-scroll";
import sidebarItems from './NavItems';


const SidebarList = (prop) => {

  return (
    <React.Fragment>

      {prop.toggle ?
        <div className='navbar-items'>

          <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
          </div>

          <ul>{sidebarItems.map((item, index) => (
            <li className='nav-item' key={index}>
              <Link
                to={item.scroll}
                spy={true}
                offset={-100}
              >
                {item.icon} {item.text}
              </Link>
            </li>
          ))}
          </ul>

        </div>
        :
        <div className='navbar-items-only-icons'>
          <ul>
            {sidebarItems.map((item, index) => (
              <li className='nav-item' key={index}>
                <Link
                  to={item.scroll}
                  spy={true}
                  offset={0}
                >
                  {item.icon}
                </Link>

              </li>
            ))}
          </ul>
        </div>
      }
    </React.Fragment>
  )
}

export default SidebarList