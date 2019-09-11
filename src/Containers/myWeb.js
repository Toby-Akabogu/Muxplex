import React from 'react';
import './myWeb.css'

class myWeb extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div>
                // container for the slideshow 
                <div class="slideshow-container">

                    //div class for every slide which contains an image of a musical artist
                    <div class="mySlides">
                        <img src=""></img>
                        <div class = "text">Hello World</div>
                    </div>

                    <div class="mySlides">
                        <img src=""></img>
                        <div class="text">Hello World</div>
                    </div>

                    <div class="mySlides">
                        <img src=""></img>
                        <div class="text">Hello World</div>
                    </div>

                    //For the next and previous buttons in the slideshow
                    <a class="prev" onClick="plusSlides(-1)"></a>
                    <a class="next" onClick="plusSlides(1)"></a>
                </div>

                <div style="text-align:center">
                    <span class="dot" onClick="currentSlide(1)"></span>
                    <span class="dot" onClick="currentSlide(2)"></span>
                    <span class="dot" onClick="currentSlide(3)"></span>
                </div>
            </div>
        );
    }
}