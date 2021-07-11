import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import About from '../About/About';
import Footer from '../Footer/Footer'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
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

export default function ProductPage(props) {
  const classes = useStyles();
   

  return (
    <>
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: "url('images/hero.jpeg') "}}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="http://www.nextgenitltd.com/images/slides/1.jpg" alt="" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h1" color="inherit"  gutterBottom>
              About
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            We are an Offshore IT services firm known for high-quality services at affordable rates. Our service delivery teams have consistently met the demands of Japanese Enterprise clients who are consistently giving good feedback.

            </Typography>
            <Link variant="subtitle1" href="#" >
               Read More
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
 <About/>
 
    <Footer/>
    </>
  );
}

ProductPage.propTypes = {
  post: PropTypes.object,
};