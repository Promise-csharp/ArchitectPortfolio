import React, { Component } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import MainShowcase from '../../components/MainShowcase/MainShowcase'
import About from './components/About/About'
import ProjectCard from './components/ProjectCard/ProjectCard'
import BarLoader from '../../components/LoadingBars/BarLoader'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded:false,
            loadingElement:<BarLoader />
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      } 

    Loaded = () => {
        this.setState({
            loaded:true,
            loadingElement:<div/>
        })
    }

    render() {

        return (
            <div style={{height:'auto', overflow:'hidden'}}>
                {this.state.loadingElement} 
                <NavBar />
                <MainShowcase loaded={this.Loaded} />
                <About />
                <ProjectCard />
            </div>
        )
    }
}