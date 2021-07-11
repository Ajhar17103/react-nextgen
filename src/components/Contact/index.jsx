import React from 'react';
import { MdLocalPhone,MdPlace,MdLocalPostOffice } from "react-icons/md";
import Button from '@material-ui/core/Button';
import {Card} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Maps from './Maps';
import Form from './Form';


let contact=[
    {id:'1',
    title:'Location',
    description:'As a leading software and web development company NextTGen Innovation Ltd. thinks intensely about your company,',
    src:'https://images.squarespace-cdn.com/content/54691977e4b0773873087bc2/1420517356631-WLDR9T6HUY8KX7TR01QT/Doozy+Labs+Responsive+Website+Development+Icon?content-type=image%2Fpng',
   
    path:'/service'
    },
    {id:'2',
    title:'APP DEVELOPMENT',
    description:'NextTGen Innovation Ltd. has recently developed powerful, efficient & user-friendly mobile apps to meet your enterprise needs',
    src:'https://images.squarespace-cdn.com/content/54691977e4b0773873087bc2/1420517356631-WLDR9T6HUY8KX7TR01QT/Doozy+Labs+Responsive+Website+Development+Icon?content-type=image%2Fpng',
    path:'/service'
    },
    {id:'3',
    title:'SOFTWARE DEVELOPMENT',
    description:'We build corporate web-based systems to help enterprises automate processes, increase productivity',
    src:'https://th.bing.com/th/id/Re219d7bc6c0bc8de35d59385d414584a?rik=LCSYvIBJdmQj8Q&pid=ImgRaw',
    
    path:'/service'
    },
    {id:'4',
    title:'BUSINESS ERP',
    description:'Blor sit amet, consectetur adipisicing eLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temincididu',
    src:'https://media.istockphoto.com/vectors/privacy-settings-icon-settings-icon-with-padlock-sign-settings-icon-vector-id1130299337?k=6&m=1130299337&s=612x612&w=0&h=KsLpqJmD6foSVeZVhCZN7ZKqvO8sU5Dftrqtu0mYOlc=',
   
    path:'/service'
    },
    {id:'5',
    title:'ONLINE MARKETING',
    description:'As digital platforms became gradually merged into marketing plans and everyday life, and as people progressively',
    src:'https://th.bing.com/th/id/Rd5ac063e78373aa60484b77eb6e5cbc9?rik=2BP1CRYJunoHCA&pid=ImgRaw',
    
    path:'/service'
    },
    {id:'6',
    title:'IT CONSULTANCY',
    description:'A business owner who define the requirements to take his business to the next level, a decision maker will',
    src:'https://th.bing.com/th/id/OIP.Hy8QlLKOS_1upWfk9gElygHaHa?pid=ImgDet&rs=1',
   
    path:'/service'
    },
  
     
    
  ]
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
    marginTop:'10px',
    paddingBottom: theme.spacing(8),
    backgroundColor:'#191e3e',
  },
  card: {
    height: '100%',
    display: 'flex',
    textAlign:'center',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



const Contact=()=> {
  const classes = useStyles();

  return (
    <>
      <video src='/videos/bg4.mp4' autoPlay loop muted />
       
       
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Contact Us
            </Typography>
           
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
               
               </Typography>
          </Container>
          <Container maxWidth="lg">
            <Maps/>
          </Container>
      
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container  spacing={1}>
          
              <Grid item key={contact} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <MdPlace/>
                    </Typography>
                    <Typography>
                    Flat: A1 (First floor), House-17, Road-17/A,
                       Block-E, Banani Dhaka-1213
                    </Typography>
                  </CardContent>
                 
                </Card>
                </Grid>
                <Grid item key={contact} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <MdLocalPhone/>
                    </Typography>
                    <Typography>
                    +880 1726621896
                    </Typography>
                  </CardContent>
                  
                </Card>
                </Grid>
                <Grid item key={contact} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <MdLocalPostOffice/>
                    </Typography>
                    <Typography>
                    info@nextgenitltd.com
                 </Typography>
                   <Typography>
                    shumon@nextgenitltd.com
                    </Typography>
                  </CardContent>
                  
                </Card>
                </Grid>
              
          </Grid>
         
        </Container>
   <Form/>
         
        </div>
      </main>
 
      {/* Footer */}
    
      {/* End footer */}
    </>
  );
}
export default Contact;

