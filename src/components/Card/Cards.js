import React,{useEffect} from 'react';
import styleClass from './styles.module.css'
import CardItem from './CardItem';
 
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid,Button,} from '@material-ui/core';

import AOS from 'aos';
import "aos/dist/aos.css"

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

function Cards() {
 
  const classes = useStyles();

  useEffect(()=>{
    AOS.init(
     { 
       offset:100,
       duration:3000,
       easing:'ease'
     }
    );
  });
  
  return (
   
    <>
    <div className={classes.heroContent}>
            <Container maxWidth="md">
              <Typography component="h1" variant="h3" align="center" data-aos="zoom-in"   data-aos-duration="1000">
                OUR SERVICES
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained"  className="bg-success" data-aos="fade-right"   data-aos-duration="1500">

                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" className="bg-success" data-aos="fade-right"   data-aos-duration="2000"  >

                    </Button>
                  </Grid>
                  <Grid item gutterBottom>
                    <Button variant="contained" className="bg-success" data-aos="fade-right"   data-aos-duration="2500" >

                    </Button>
                  </Grid>
                </Grid>
              </div>
              <Typography variant="h5" align="center" color="textSecondary" paragraph data-aos="fade-in"   data-aos-duration="3000">
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>

            </Container>
            </div>
    <div className={styleClass.cards}>
       
      <div className={styleClass.cards__container}>
        <div className={styleClass.cards__wrapper}>
          <ul className={styleClass.cards__items} >
        
          <CardItem
            
              src='https://th.bing.com/th/id/R43e2463199d9acba1f379eaa084daf65?rik=DLc%2fNfoOe1Ws7g&pid=ImgRaw'
              title=''
              text='WEB DEVELOPMENT'
              label='WEB'
              path='/services'
              dataAos="fade-up"
              
             
            />
        
          
            <CardItem
              src='https://www.blog.digitecintl.com/wp-content/uploads/2018/10/Untitled-1Artboard-5-1.png'
              text='APP DEVELOPMENT'
              label='Android & ios'
              path='/services'
              dataAos="fade-down"
               
             
            />
             <CardItem
              src='https://th.bing.com/th/id/OIP.9U9M0SMafgs87qQIj9ejigHaEc?pid=ImgDet&rs=1'
              text='SOFTWARE DEVELOPMENT'
              label='WEB & App'
              path='/services'
              dataAos="fade-up"
            />
          </ul>
          <ul className={styleClass.cards__items}  >
            <CardItem
              src='https://th.bing.com/th/id/OIP.0fPiWlES97mB423zN315BQHaED?pid=ImgDet&rs=1'
              text='BUSINESS ERP'
              label='WEB & App'
              path='/services'
              dataAos="fade-up"
            />
            <CardItem
              src='https://www.mediagroup.es/wp-content/uploads/2016/04/Marketing-online-15.jpg'
              text='ONLINE MARKETING'
              label='WEB & App'
              path='/products'
              dataAos="fade-down"
            />
            <CardItem
              src='http://ssolution.ca/wp-content/uploads/2016/02/Consulting1.jpg'
              text='IT CONSULTANCY'
              label='WEB & App'
              path='/sign-up'
              dataAos="fade-up"
            />
          </ul>
          <ul className={styleClass.cards__items} data-aos="fade-up">
            <CardItem
              src='https://th.bing.com/th/id/OIP.UuiREMxj9OM3cGtGdN1D5QHaFp?pid=ImgDet&rs=1'
              text='JOB PORTAL'
              label='WEB & App'
              path='/services'
              dataAos="fade-up"
            />
            <CardItem
              src='images/img-4.jpg'
              text='NEW ITEM '
              label='WEB & App'
              path='/products'
              dataAos="fade-down"
            />
            <CardItem
              src='https://maxmedical.com.br/wp-content/uploads/2017/02/ecommerce-logo.png'
              text='E-COMMERCE'
              label='WEB & App'
              path='/sign-up'
              dataAos="fade-up"
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
