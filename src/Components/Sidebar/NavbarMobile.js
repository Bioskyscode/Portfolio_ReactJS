import React, { useState } from 'react'
import "./NavbarMobile.css"
import sidebarItems from './NavItems'
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobile = ({ theme, changeTheme }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleclick = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <div className='mobile-navbar'>

            <div className='navbar-header'>
                <p onClick={handleclick}>{openMenu ? <i className="fa-solid fa-xmark fa-xl"></i> : <i className="fa-solid fa-bars fa-xl"></i>}</p>
            </div>

            {openMenu &&
                <div className='mobile-nav'>
                    <ul>{sidebarItems.map(item => (
                        <li className='nav-item-mobile'>
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
                    <div className='switch'>
                        <Switch checkedIcon={false}
                            uncheckedIcon={false}
                            onColor='#86198f'
                            offColor='#000000'
                            onChange={changeTheme}
                            checked={theme === "light"} />
                    </div>
                </div>}
        </div>
    )
}

export default NavbarMobile