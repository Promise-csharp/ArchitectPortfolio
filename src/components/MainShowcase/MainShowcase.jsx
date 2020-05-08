import React, { Component } from 'react';
import ShowcaseImage from '../../img/showcase-image.png'
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
                    <h1 className="title-text">ARCHITECTURE DESIGN PORTFOLIO</h1>
                    <div className="culture-container">
                        <h3 className="culture-text">Showcasing all my creative design projects.</h3>
                    </div>
                </div>
            </div>
         
        )
    }
}