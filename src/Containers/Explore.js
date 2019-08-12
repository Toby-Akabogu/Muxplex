import React from 'react';
import Footer from '../Components/Footer';
import TopNav from '../Components/TopNavigation';
import './Explore.css'


class Explore extends React.Component{
    onSearchChange = (event) =>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 {
        console.log(event.target.value);
    }

    render(){
        return(
            <div>
                <TopNav/>
                <div className="search-box">
                    <input
                    type="search"
                    placeholder="Search Artists"
                    autofocus="true"
                    />
                </div>
                <Footer />
            </div>
        );
    }

    
}

export default Explore;