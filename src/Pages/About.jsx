import Main from "../Components/Main";
import Hero from "../Components/Hero";
import Experience from "../Components/Experience";
import Mission from "../Components/Mission";
import Team from '../Components/Team';
import TeamsMem from "../Components/TeamsMem";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer.jsx";
import { Fragment } from "react";

const About = () => {
    return (
        <Fragment>
            <Hero />
            <Main />
            <Experience />
            <Mission />
            <Team />
            <TeamsMem />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default About;