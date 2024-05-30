import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/no-unescaped-entities */
export default function Navbar() {

    return (
        <section className="nav-bar">
            <div className="logo">
                <img src="http://focal-x.com/assets/img/home/logo.svg" alt="" />
                <span>Digital markiting agency</span>
            </div>
            <ul className="lists">
                <li>
                    <a href="http://#" target="_blank" title="home">Home</a>
                </li>
                <li>
                    <a href="http://#" target="_blank" title="Services">Services</a>
                </li>
                <li>
                    <a href="http://#" target="_blank" title="portfolio">portfolio</a>
                </li>
                <li>
                    <a href="http://#" target="_blank" title="Clients&partners">Clients&partners</a>
                </li>
                <li className="academy">
                    <a href="http://#" target="_blank" title="X Academy">X Academy</a>
                </li>
                <li>
                    <a href="http://#" target="_blank" title="About us">About us</a>
                </li>
                <li>
                    <a href="http://#" target="_blank" title="content">Let's Talk</a>
                </li>
            </ul>
           <span> <FontAwesomeIcon icon={faBars} /></span>
        </section>
    )
}