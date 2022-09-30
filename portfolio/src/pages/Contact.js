import { Outlet, Link } from "react-router-dom";
import noteCard from "../images/note-card.jpg";
import resume from "../Resume.pdf";

const Contact = () => {
    return (
        <div id="container" >
        <img src={noteCard} alt='' />
        <div class="top-left">
            <Link to="/">About Me</Link> *
            <Link to="/projects"> Projects</Link> *
            <Link to="/contact"> Contact</Link>
        </div>
        <div class="centered">
                <a href="mailto:mbrunostem@gmail.com">Email</a> *
                <a href="https://www.linkedin.com/in/mario-bruno-806792219/"> LinkedIn</a> * 
                <a href="https://github.com/MBrunoStem"> GitHub</a> * 
                < a href={resume}> Resume</a>
            </div>
        <Outlet />
        </div>
    )
  }
  
  export default Contact;