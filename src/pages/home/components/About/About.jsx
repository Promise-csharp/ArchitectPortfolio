import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from '../../../../components/Title/SectionTitle'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Resume from '../../../../docs/Resume-2020.pdf'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './About.scss'

const useStyles = makeStyles(theme => ({
    buttonBox: {
        marginTop: '50px',
    },
    button: {
        minHeight: '50px',
        fontFamily: 'Rajdhani',
        fontSize: '20px',
        borderRadius: '0',
        padding: '10px 25px',
    },
}))

export default function About() {

    const classes = useStyles();
    
    return (
        <div>
            <SectionTitle title='About Me' id="about"/>
            <div className="intro-paragraph-container">
                <AnimatedOnScroll animationIn="bounceInLeft" animationInDuration={800}>
                    <img src='https://via.placeholder.com/150' alt="Personal avatar" className="curve"></img>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="slideInRight" animationInDuration={400}>
                    <p className="intro-paragraph">
                    I am a student currently majoring in Architectural Design and will be completing my Bachelor’s Degree at 
                    Carleton University in the spring of 2023. Architecture is my passion and I really enjoy all the work I 
                    have done in and outside of school. My projects range from hand-drafting to digital modeling and 
                    hand-crafted models. Here you will see some of my class projects, and personal designs. 
                    </p>
                </AnimatedOnScroll>
                <Typography className={classes.buttonBox} align='center'>
                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration={800}>
                    <Button className={classes.button} size="large" href={Resume} variant='outlined' target="_blank" rel="noopener noreferrer">
                        Resume
                    </Button>
                </AnimatedOnScroll>
                </Typography>
            </div>
        </div>
    )
}