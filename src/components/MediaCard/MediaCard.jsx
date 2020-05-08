import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './MediaCard.scss'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    paper: {
        maxWidth: '90vw',
        height: 'auto',
        maxHeight: '90vh',
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
        color: '#222',
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
        padding: '0px 20px',
        height: '100%',
    },
    image: {
        minHeight: '100%',
        minWidth: '100%',
        maxWidth: '90vw',
        maxHeight: '100vw',
        paddingRight: '10px',
    },
  }));

export default function MediaCard(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={props.link} style={{ textDecoration: 'none' }}>
                <Paper className={`card ${classes.paper}`}>
                    <ButtonBase className={classes.root}>
                        <Grid container direction={props.displayType}>
                            <Grid item xs={12} sm container justify="flex-start">
                                <Grid item className="card-image-container">
                                    <Typography className={`image-overlay ${classes.imageOverlay}`}>
                                        {props.hoverText}
                                    </Typography>
                                    <div className="overlay-background" />
                                    <img className={`card-image ${classes.image}`} src={props.image} alt={props.altText} />
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

