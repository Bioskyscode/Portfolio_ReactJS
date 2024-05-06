import React, { useState } from 'react';
import "./Sidebar.css"
import Home from '../Home/Home';
import SidebarList from './SidebarList';

const Sidebar = ({ changeTheme, theme }) => {
    const [expandSidebar, setExpandSidebar] = useState(false);

    const handleExpandClick = () => setExpandSidebar(!expandSidebar);
    return (
        <div className="container-fluid1 sidebar-section">
            <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>

                <div className="icon-for-sidebar-expand-and-collapse">
                    <p onClick={handleExpandClick}>
                        {expandSidebar ? <i className="fa-solid fa-chevron-left fa-xl"></i> : <i className="fa-solid fa-chevron-right fa-xl"></i>}
                    </p>
                </div>

                <SidebarList toggle={expandSidebar} />
            </div>

            <Home changeTheme={changeTheme} theme={theme} />
        </div>
    )
}

export default Sidebar