import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import {Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import img from '../../image/logo.png'
import { MdCheck} from "react-icons/md";

let choose=[

    {id:'1',
    title:'Smart solution',
    description:'As a leading software and web development company NEXTGEN IT. thinks intensely about your company,',
    src:'https://th.bing.com/th/id/R174da4873cf75d50e0d7cd5f8f09a187?rik=ZjGyNjA5%2fFvRYA&pid=ImgRaw',
   
    path:'/service'
    },
    {id:'1',
    title:'Save Time & Money',
    description:'As a leading software and web development company NEXTGEN IT. thinks intensely about your company,',
    src:'https://th.bing.com/th/id/Rfe913995332e5098dfd1ee94f45f07a9?rik=ckXlgo1E7slUnQ&pid=ImgRaw',
   
    path:'/service'
    },
    {id:'1',
    title:'Quality Over Quantity',
    description:'As a leading software and web development company NEXTGEN IT. thinks intensely about your company,',
    src:'https://25au7v3vhpc6f3tzj3dmvh15-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/ico-qual@2x.png',
   
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
    paddingBottom: theme.spacing(8),
    display:'flex'
  },
  card: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    borderRadius:'10%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  cardMedia: {
    paddingTop: '40%', // 16:9
    borderRadius:'50%',
    marginLeft: '90px',
    width:'40%',
    marginTop: '20px',

     
     
  },
  

  cardContent: {
    flexGrow: 1,
    textAlign:'center'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  chooseDiv:{
    display:'flex'
  }
}));



 const Choose=()=>{
  const classes = useStyles();

  return (
    <>
       
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Why Choose Us
            </Typography>
            <div>
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
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
           
          </Container>
       
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {choose.map((choose) => (
              <Grid item key={choose} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={choose.src}
                    
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" text=''>
                      {choose.title}
                    </Typography>
                    <Typography>
                   
                    </Typography>
                  </CardContent>
                  
                </Card>
                
              </Grid>
            ))}
          </Grid>

        </Container>

        <Container>
            <Grid row  xs={12} sm={12} md={12} >
                <Grid  className={classes.chooseDiv} >
                <Card>
                <img src={img} width='100%' />
                </Card>
                
                 
                <Card   >
                <Typography paragraph align="left" color="textSecondary" >
                NextGen Innovation Ltd.  is a full facility of IT system provider who values our associations with clients, merchants, corporate allies and co-workers. Strong, constructive relationships that are open and authentic are a big part of what segregates NextGen Innovation Ltd.
        
                
                <br/>
              
            </Typography>
           
            <Typography  paragraph align='left' color='textSecondary'>
                       Followings are the reasons you can depend on NextGen Innovation Ltd to have you and your business awake and active:
                      </Typography>
            
                      <br/>
                      <Typography paragraph align='left' color='textSecondary'>
                    <MdCheck/> Practical   –Our service attitude is proactive, not reactive. Through state-of- the-art system monitoring and supervision, we realize your network 24/7 to detect issues and report them EARLIER they converted into complications, rather than stroking out fires.</Typography>
                      

            <Typography paragraph align='left' color='textSecondary'>
            <MdCheck/>  Decent -NextGen Innovation Ltd. is a valued front-runner in the community and the business. Our delighted success is the big number of extended clients who placed their trust on us since long term.
            </Typography>
           
            <Typography paragraph align='left' color='textSecondary'>
            <MdCheck/>  Corporate perception -We design, estimate and validate technology solutions from a comprehensive understanding of the business advantage for your company.
            </Typography>
            
            <Typography paragraph align='left' color='textSecondary'>
            <MdCheck/>  Complete project management –Our wide experience managing all types of multifaceted projects means we will take care every aspect and synchronize all vendors so you can rest guaranteed that your project will be finalized on time and on budget.
            </Typography>
           
            <Typography paragraph align='left' color='textSecondary'>
            <MdCheck/>   Satisfaction Guaranteed –We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.
            </Typography>
                </Card>
             
                </Grid>
                
            </Grid>
        </Container>

      
        </div>
      </main>
     
      
     
    </>
  );
}
export default Choose;