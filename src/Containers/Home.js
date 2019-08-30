import React from 'react';
import Trav from '../Pictures/TRVS.jpg';
import Joey from '../Pictures/JoeyBadAsss.jpg';
import Meg from '../Pictures/MegTheeStallion.jpg';
import Burna from '../Pictures/Burna.jpg';
import Footer from '../Components/Footer';
import TopNav from '../Components/TopNavigation';
import Box from '../Components/Box';
import './Home.css'

const QUOTE = '"The premiere destination of high quality, artistry content"'

class Home extends React.Component{
    render(){
        return(
            <div>
                <TopNav />
                <body>
                    <img className='image1' src={Trav} alt="Travis" />
                    <div className = "gallery">
                        <img src={Joey} alt="Rihanna" />
                        <img src={Meg} alt="Rihanna" />
                        <img src={Burna} alt="Rihanna" />

                    </div>
                    
                </body>
                <div className="Box">
                    <Box label={QUOTE} />
                </div>
                <Footer />              
            </div>

        );
    }
}

export default Home;