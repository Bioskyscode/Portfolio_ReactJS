import "./Footer.css"
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className='footer'>
            <div className="content">
                <div className="info">
                    <h5>Contact Info</h5>
                    <ul>
                        <li><i className="fa-solid fa-phone fa-fade"></i> +49177690866</li>
                        <li><i className="fa-regular fa-envelope fa-fade"></i> <a href="mailto:ajibade.abiodun@outlook.com">ajibade.abiodun@outlook.com</a></li>
                    </ul>
                </div>
                <div className="info">
                    <h5>Get To Know Me</h5>
                    <ul>
                        <Link to="about">
                        <li>About Me</li>
                        </Link>
                        <Link to="home">
                        <li>Resume</li>
                        </Link>
                    </ul>
                </div>
                <hr/>
                © { new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer