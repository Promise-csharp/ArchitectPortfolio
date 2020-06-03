import React, { Component } from 'react';
import ShowcaseImage from '../../img/greenhouse/render-exterior-greenhouse.jpg'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './MainShowcase.scss';

    
export default class MainShowcase extends Component {
    render() {
        return (
            
            <div className="showcase-container">
                <div className="showcase">
                    <img 
                        className='main-showcase-image' 
                        src={ShowcaseImage} 
                        alt="Full window render of a space craft" 
                        onLoad={this.props.loaded}
                        />
                    <AnimatedOnScroll animationIn="fadeIn" animationInDuration={800}>
                        <h1 className="title-text">ARCHITECTURE DESIGN PORTFOLIO</h1>
                    </AnimatedOnScroll>
                    <div className="culture-container">
                        <AnimatedOnScroll animationIn="fadeIn" animationInDuration={800} animationInDelay={800}>
                            <h3 className="culture-text">Showcasing all my creative design projects.</h3>
                        </AnimatedOnScroll>
                    </div>
                </div>
            </div>
         
        )
    }
}