import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        margin: '20px 0px',
    },
    signature: {
        padding: theme.spacing(2),
        color: '#222',
      },
  }));

export default function Footer() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container direction="column" justify="center" className={classes.signature}>
                    <Grid item>
                        <div>
                            &copy; {new Date().getFullYear()} Created by: 
                            <a className="creator" target="_blank" rel="noopener noreferrer" href='https://www.jessieboudreau.com'> 
                                Jessie Boudreau 
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}