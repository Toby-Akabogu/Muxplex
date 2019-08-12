import React from 'react';
import Card from '../Components/Card';
import TopNav from '../Components/TopNavigation';
import Footer from '../Components/Footer';
import ASAP from '../Pictures/ASAP.jpg';
import ARI from '../Pictures/ARI.jpg';
import './About.css'
import Box from '../Components/Box';

const ABOUT = "Muxplex is a place that returns all social media activity from your favorite artists. As an artists mind evolves, so does their content. Stay informed with Muxplex.";
const ABOUT2 = "Created in 2019, the idea was to keep users closer to their favorite artists by getting all of their social media activity in one destination";
const HEADER = 'Progressive Ideas';
const HEADER2 = 'Unique Thoughts';
const QUOTE = '"The premiere destination of high quality, artistry content"'

class About extends React.Component{
    render(){
        return(
            <div className="About">
                <TopNav />
                <div className="Card">
                    <Card header={HEADER} text={ABOUT} />
                </div>
                <div className="Pic1">
                    <img src={ASAP} alt="Rocky instagram pic"/>
                </div>
                <div className="About2">
                    <Card header={HEADER2} text={ABOUT2} />
                </div>
                <div className="Pic2">
                    <img src={ARI} alt="Ariana Grande instagram pic"/>
                </div>
                <div className="Box">
                    <Box label={QUOTE} />
                </div>
                <Footer />
            </div>
        );
    }

    
}

export default About;