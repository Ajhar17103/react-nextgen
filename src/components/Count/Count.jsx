import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import data from './data/data.json';
import CountsItem from './CountIem';
import {Container,Grid,} from '@material-ui/core';


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


 

 

const Counts=()=> {
  const classes = useStyles();

  return (
    <>
    <Container className="pt-5 mt-5">
 
      
       <Container className={classes.cardGrid} maxWidth="md">
       
          <Grid container spacing={4}>
            {data.counts.map((counts) => (
              <Grid item key={counts.id} xs={12} sm={6} md={3}>
              <CountsItem  data={counts}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
      
     
    </>
  );
}
export default Counts;