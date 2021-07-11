import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography,Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import hero from './hero.jpeg'
import Footer from '../Footer/Footer';
 

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url("./hero.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgb(20 45 26 / 65%);',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function AppDev(props) {
  const classes = useStyles();
   

  return (
    <>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: "url('./hero.jpeg') "}}>
      {/* Increase the priority of the hero background image */}
      
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h1" color="inherit" align="center"  gutterBottom>
                           APPS DEVELOPMENT
            </Typography>
            <Typography variant="h5" color="inherit" align="center"   paragraph>
            The color of innovation is Blue. Blue
also give the feel of technology
and trust to people. The color of innovation is Blue. Blue
also give the feel of technology
and trust to people.


            </Typography>
            
          </div>
        </Grid>
      </Grid>
      
    </Paper>
    <Container sm={12} md={12}  maxWidth="md">
      <Grid>
      <Typography>Hello</Typography>
      </Grid>
         
   

      </Container>
    <Footer/>
    </>
  );
}
 