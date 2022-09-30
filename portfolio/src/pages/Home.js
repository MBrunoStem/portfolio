import { Outlet, Link } from "react-router-dom";
import noteCard from "../images/note-card.jpg";

const Home = () => {
    return (
        <div id="container" >
            <img src={noteCard} alt='' />
            <div class="top-left">
                <Link to="/">About Me</Link> *
                <Link to="/projects"> Projects</Link> *
                <Link to="/contact"> Contact</Link>
            </div>
            <div class="centered-2">
                Bay Area transplant in Washington DC. I've worked in education for the past 6 years, and in my most recent role I managed student test data.
            </div>
            <Outlet />
        </div>
    )
};

export default Home;