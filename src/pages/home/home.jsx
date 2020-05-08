import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import MainShowcase from '../../components/MainShowcase/MainShowcase'
import About from './components/About/About'
import ProjectCard from './components/ProjectCard/ProjectCard'

export default function Home() {

    return (
        <div style={{height:'auto', overflow:'hidden'}}>
            <NavBar />
            <MainShowcase />
            <About />
            <ProjectCard />
        </div>
    )
}