import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar/NavBar';
import MainShowcase from '../../components/MainShowcase/MainShowcase'
import ProjectCard from './components/ProjectCard/ProjectCard'

const useStyles = makeStyles(theme => ({
    spacer: {
        width: '100%',
        height: '85px'
    },
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div style={{height:'auto',overflow:'hidden'}}>
            <NavBar />
            <MainShowcase />
            <ProjectCard />
        </div>
    )
}