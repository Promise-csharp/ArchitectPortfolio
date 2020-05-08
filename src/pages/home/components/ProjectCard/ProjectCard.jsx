import React, { useState } from 'react';
import MediaCard from '../../../../components/MediaCard/MediaCard'
import SectionTitle from '../../../../components/Title/SectionTitle'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const projects =[
    {
        title:'Project Title 1',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date added: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:'https://via.placeholder.com/400',
        altText:'400x400 placeholder',
    },
    {
        title:'Project Title 2',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date added: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:'https://via.placeholder.com/400',
        altText:'400x400 placeholder',
    },
    {
        title:'Project Title 3',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date added: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:'https://via.placeholder.com/400',
        altText:'400x400 placeholder',
    },
    {
        title:'Project Title 4',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        subText:'Date added: May 8th, 2020',
        hoverText:'View Project',
        displayType:'row',
        link:'/',
        image:'https://via.placeholder.com/400',
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
    const [showItems, setshowItems] = useState(3);
    const [label, setLabel] = useState('More');

    const handleLabelChange = () => {
        if (label === 'More') {
            setLabel('Less')
        }
        else {
            setLabel('More')
        }
    }

    const handleShowMore = () => {
        if (showItems >= projects.length) {
            setshowItems(3)
        }
        else {
            setshowItems(projects.length)
        }
    }

    const handleChange = () => {
        handleLabelChange();
        handleShowMore();
    }

    return (
        <div>
            <SectionTitle title='Projects' />
            {projects.slice(0, showItems).map(project => (
                <div className="projects-project-link-container">
                    <MediaCard 
                        title = {project.title}
                        body = {project.body}
                        subText = {project.subText}
                        hoverText = {project.hoverText}
                        displayType = {project.displayType}
                        link = {project.link}
                        image = {project.image}
                        altText = {project.altText}
            />
                </div>))}
            <Typography className={classes.buttonBox} align='center'>
                <Button className={classes.button} onClick={ handleChange } size="large" variant='outlined'>
                    Show {label} 
                    {/* ({projects.length - showItems}) */}
                </Button>
            </Typography>
        </div>
    )
}