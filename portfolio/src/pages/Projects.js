import { Outlet, Link } from "react-router-dom";
import noteCard from "../images/note-card.jpg";

const Projects = () => {
    return (
      <div id="container" >
      <img src={noteCard} alt='' />
      <div class="top-left">
          <Link to="/">About Me</Link> *
          <Link to="/projects"> Projects</Link> *
          <Link to="/contact"> Contact</Link>
      </div>
      <div class="centered">
                <li>RuPedia</li>
                <li><a href="https://github.com/MBrunoStem/e-commerce-back-end">
                E-Commerce Back End</a></li>
                <li><a href="https://github.com/MBrunoStem/team-profile-generator"> 
                Employee Profile Generator</a></li>
                <li><a href="https://github.com/MBrunoStem/employee-tracker"> 
                Employee Tracker</a></li>
                <li><a href="https://mbrunostem.github.io/day-planner/">
                Day Planner</a></li>
            </div>
      <Outlet />
      </div>
    )
  };
  
  export default Projects;