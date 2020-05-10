import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionTitle from '../../../../components/Title/SectionTitle'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
                <img src='https://via.placeholder.com/150' alt="Personal avatar" className="curve"></img>
                <p className="intro-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. Eget dolor morbi non arcu risus quis varius quam quisque. Arcu dui vivamus arcu 
                felis bibendum ut. Nisi scelerisque eu ultrices vitae auctor eu. Sed turpis tincidunt id aliquet risus. 
                Mattis enim ut tellus elementum.
                </p>
                <Typography className={classes.buttonBox} align='center'>
                    <Button className={classes.button} size="large" href='/' variant='outlined' target="_blank" rel="noopener noreferrer">
                        Resume
                    </Button>
                </Typography>
            </div>
        </div>
    )
}