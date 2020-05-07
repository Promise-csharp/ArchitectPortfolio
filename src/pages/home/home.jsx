import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import MainShowcase from '../../components/MainShowcase'
import ProjectCard from '../../pages/projects/components/ProjectCard'

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
            <ProjectCard />
        </div>
    )
}