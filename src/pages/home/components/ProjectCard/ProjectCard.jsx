import React, { useState } from 'react';
import MediaCard from '../../../../components/MediaCard/MediaCard'
import SectionTitle from '../../../../components/Title/SectionTitle'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GreenhouseThumb from '../../../../img/greenhouse/thumbnail-render-exterior-greenhouse.jpg';
import MakerSpaceThumb from '../../../../img/maker-space/1-thumbnail-outsideperspective.jpg';
import MusicTheatreThumb from '../../../../img/music-theatre/1-thumbnail-outsideperspective.jpg';
import ImmigrationCentreThumb from '../../../../img/immigration-centre/1-thumbnail.jpg';
import AnalysisModelThumb from '../../../../img/site-analysis-model/1-thumbnail.jpg';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const projects =[
    {
        title:'Greenhouse Design - InstadosePharma',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date completed: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:GreenhouseThumb,
        altText:'400x400 placeholder',
    },
    {
        title:'Montreal Maker Space - Concept Design',
        body:'This project is a modern Makerspace for public use. The site is along the Lachine Canal between Montreal Old-Port and Griffintown. This is a forward-thinking civic building proposal. Historically, Montreal’s Old Port was a robust industrial engine and hub of manufacturing activity. Lachine Canal, a major shipping and transportation artery facilitated the expansion of light industry in the area throughout the 19th and early 20th centuries.',
        subText:'Date completed: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/projects/makerspace',
        image:MakerSpaceThumb,
        altText:'maker-space-thumbnail',
    },
    {
        title:'Ottawa Music Theatre - Concept Design',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date completed: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:MusicTheatreThumb,
        altText:'400x400 placeholder',
    },
    {
        title:'Imigration Centre - Concept Design',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date completed: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:ImmigrationCentreThumb,
        altText:'400x400 placeholder',
    },
    {
        title:'Montreal Site Analysis - Physical Model',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date completed: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:AnalysisModelThumb,
        altText:'400x400 placeholder',
    },
]

const useStyles = makeStyles(theme => ({
    buttonBox: {
        margin: '50px',
    },
    button: {
        minHeight: '50px',
        fontFamily: 'Rajdhani',
        fontSize: '20px',
        borderRadius: '0',
        padding: '10px 25px',
    },
}))

export default function ProjectCard() {

    const classes = useStyles();
    const [showItems, setshowItems] = useState(2);
    const [label, setLabel] = useState('All');
    const [showLabelCount, setShowLabelCount] = useState(true);

    const handleLabelChange = () => {
        if (label === 'All') {
            setLabel('Less')
        }
        else {
            setLabel('All')
        }
    }

    const handleShowMore = () => {
        if (showItems >= projects.length) {
            setshowItems(2)
        }
        else {
            setshowItems(projects.length)
        }
    }

    const handleShowLabelCount = () => {
        if (label === 'All') {
            setShowLabelCount(false)
        }
        else {
            setShowLabelCount(true)
        }
    }

    const handleChange = () => {
        handleLabelChange();
        handleShowMore();
        handleShowLabelCount();
    }

    return (
        <div>
            <SectionTitle title='Projects' id="projects"/>
            {projects.slice(0, showItems).map(project => (
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration={800}>
                    <div className="projects-project-link-container">
                        <MediaCard 
                            title = {project.title}
                            body = {project.body}
                            subText = {project.subText}
                            hoverText = {project.hoverText}
                            displayType = {project.displayType}
                            link = {project.link}
                            src = {project.image}
                            altText = {project.altText}
                        />
                    </div>
                </AnimatedOnScroll>
                ))}
            <Typography className={classes.buttonBox} align='center'>
                <Button className={classes.button} onClick={handleChange} size="large" variant='outlined'>
                    Show {label}
                    {showLabelCount === true
                    ?   ` (${projects.length})`
                    :   ''
                    }
                </Button>
            </Typography>
        </div>
    )
}