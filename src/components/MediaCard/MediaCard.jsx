import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import ButtonBase from '@material-ui/core/ButtonBase';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Image from '../../img/showcase-image.png'
import './MediaCard.scss'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        maxWidth: '90vw',
        height: 'auto',
        macHeight: '90vh',
        margin: '40px auto',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    imageOverlay: {
        fontSize: theme.typography.pxToRem(40),
        fontFamily: 'Rajdhani',
    },
    title: {
        padding: '20px',
        fontSize: theme.typography.pxToRem(40),
        fontFamily: 'Rajdhani',
    },
    description: {
        padding: '20px',
        fontSize: theme.typography.pxToRem(20),
        fontFamily: 'Rajdhani',
    },
    subText: {
        padding: '20px',
        fontSize: theme.typography.pxToRem(15),
        fontFamily: 'Rajdhani',
    },
    arrow: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: '20px',
        height: '360px',
    },
    image: {
        minHeight: '100%',
        width: 'auto',
        maxWidth: '90vw',
        maxHeight: '100vw',
        paddingRight: '10px',
    },
  }));

export default function MediaCard(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Paper className={`card ${classes.paper}`}>
                    <ButtonBase className={classes.root}>
                        <Grid container direction="row">
                            <Grid item xs={12} sm container justify="flex-start">
                                <Grid item className="card-image-container">
                                    <Typography className={`image-overlay ${classes.imageOverlay}`}>
                                        {props.hoverText}
                                    </Typography>
                                    <img className={`card-image ${classes.image}`} src={props.image} />
                                </Grid>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography align="left" gutterBottom className={classes.title}>
                                            {props.title}
                                            <Divider />
                                        </Typography>
                                        <Typography align="left" gutterBottom className={classes.description}>
                                            {props.body}
                                        </Typography>
                                        <Typography align="left" color="textSecondary" className={classes.subText}>
                                            {props.subText}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {window.innerWidth < 800 ? <div /> : 
                                <Grid item>
                                    <Typography className={classes.arrow}>
                                        <ChevronRightIcon className="arrow" fontSize="large"/>
                                    </Typography>
                                </Grid>
                                }
                            </Grid>
                        </Grid>
                    </ButtonBase>
                </Paper>
            </Link>
        </div>
    );
}

