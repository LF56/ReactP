import React from "react";
import {GoMarkGithub} from "react-icons/go";
import {IoLogoLinkedin} from "react-icons/io";
import {FaStackOverflow} from "react-icons/fa";
import resume from '../../assets/images/Resume.pdf';


function Footer(){
return(
    <footer className="">
<div className="social_links">
    <a href="https://github.com/LF56"><GoMarkGithub/></a>
    <a href="https://www.linkedin.com/in/leah-fox-37963b1a2/"><IoLogoLinkedin/></a>
    <a href="https://stackoverflow.com/users/19096720/leah-fox"><FaStackOverflow/></a>
    <a href={`${resume}`} download>Download My Resume Here!</a>   
</div>
    </footer>
)
}
export default Footer;