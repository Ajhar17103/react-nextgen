import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import data from '../data/data.json';
import ManagementItem from './ManagementItem'
import {Container,Typography,Grid,Button,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  cardMedia: {
    paddingTop: '35%', // 16:9
    borderRadius: '50%',
    marginLeft: '90px',
    width: '35%',
    marginTop: '20px',
    

  },
  cardContent: {
    flexGrow: 1,
   
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },


}));


 

 

const Management=()=> {
  const classes = useStyles();

  return (
    <>
    <Container className="pt-5 mt-5">
    <Container maxWidth="md">
              <Typography component="h1" variant="h3" align="center" data-aos="zoom-in"   data-aos-duration="1000">
                 MANAGEMENT PROFILE
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained"  style={{backgroundColor:"#00F99A"}}data-aos="fade-right"   data-aos-duration="1500">

                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" style={{backgroundColor:"#00F99A"}} data-aos="fade-right"   data-aos-duration="2000"  >

                    </Button>
                  </Grid>
                  <Grid item gutterBottom>
                    <Button variant="contained" style={{backgroundColor:"#00F99A"}}data-aos="fade-right"   data-aos-duration="2500" >

                    </Button>
                  </Grid>
                </Grid>
              </div>
              

            </Container>
      
       <Container className={classes.cardGrid} maxWidth="md">
       
          <Grid container spacing={4}>
            {data.management.map((management) => (
              <Grid item key={management.id} xs={12} sm={6} md={4}>
              <ManagementItem  data={management}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
      
     
    </>
  );
}
export default Management;