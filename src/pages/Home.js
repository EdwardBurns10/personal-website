import './Home.scss'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import React from "react";
import Box from "@material-ui/core/Box";
import logo from '../logo.svg'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import 'typeface-open-sans-condensed';
import rrr from '../icons8-react.svg';
import jjj from'../icons8-java.svg';
import jjs from'../icons8-javascript.svg';
import htmlhtml from '../icons8-html-5.svg';
import ppp from '../icons8-python.svg';
import rubyruby from '../icons8-ruby-programming-language.svg';
import sqlsql from '../database.svg';
import csscss from '../icons8-css3.svg';
import '../fonts.css';
import 'aos';
import Resume from "../EDBurns Resume Jan 2021 copy.pdf";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';




const theme2 = createMuiTheme({
    typography: {
        fontFamily: [
            'open sans condensed',
        ].join(','),
        fontSize: 50,
    },});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position:'relative',
        minHeight:'2560px',

    },
    paper: {
        padding: theme2.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'3em',
        fontFamily: 'open sans condensed'
    },
    name: {
        padding: theme2.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'8em',
        fontFamily: 'open sans condensed'
    },
    mgmt: {
        padding: theme2.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'2em',
        fontFamily: 'open sans condensed'
    },
    lang: {
        padding: theme2.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'3.5em',
        fontFamily: 'open sans condensed'
    },
    txt: {
        paddingTop: theme2.spacing(40),
        paddingRight:'10px',
        paddingLeft:'10px',
        paddingBottom:theme2.spacing(40),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'1.5em',
        fontFamily: 'open sans condensed'
    },

    logo: {
        position: 'relative',
        display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: '0px',
    marginBottom: '0px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '40px'
},
    logoTxt:{
        textAlign:'center',
        fontSize:'1.5em',
        color:'#8b9e8a',
        fontFamily:'open sans condensed'
    }

}));

function Home() {
    const classes = useStyles();
  return (

      <div className={classes.root}>

          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <Grid container spacing={0}>
              <Grid item xs={12}>
                  <Paper elevation='0' style={{backgroundColor:'transparent'}}className={classes.paper}></Paper>
              </Grid>

              <Grid item xs={0.5}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={3}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.paper}>Hello I'm,</Paper>
              </Grid>
              <Grid item xs={6}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent'}} className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={12} style={{paddingBottom:'40px'}}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#efeadb'}} className={classes.name}>Edward Burns</Paper>
              </Grid>
              <Grid item xs={8}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={4}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent'}}>
                  <hr style={{width:'300px',backgroundColor:'#efeadb',boxShadow:'0 0 10px 1px #efeadb',height:'3px'}}></hr>
                  </Paper>
              </Grid>
              <Grid item xs={8}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent'}} className={classes.paper}>
                      <hr style={{width:'600px',backgroundColor:'#8b9e8a',boxShadow:'0 0 10px 1px #8b9e8a',height:'3px'}}></hr>
                  </Paper>
              </Grid>
              <Grid item xs={12}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={12}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={7}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={4.5}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.mgmt}>Management Engineering Student</Paper>
              </Grid>
              <Grid item xs={2}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} ></Paper>
              </Grid>
              <Grid item xs={8} >
                  <div data-aos="fade-zoom-in"
                       data-aos-easing="ease-in-back"
                       data-aos-delay="200"
                       data-aos-duration="1500"
                       data-aos-offset="0">
                  <Paper data-aos="fade-up" elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} className={classes.txt}> <Paper style={{backgroundColor:'#8b9e8a',color:'#efeadb',padding:'10px'}}> As a 4th year engineering student at the University of Waterloo, I am developing expertise in finding solutions to complex issues at the intersection of technology, business and design.
From my 5 internships, I gained valuable experience across various technical positions (e.g. Product Manager, Software Developers etc.) and discovered my passion for product management. My work experience and education have given me a better understanding of what it takes to develop products and bring new ideas to life.
I love technology, have a strong interest in the business side of innovation and am eager to apply my technical and communication skills to find optimal solutions for users.
.</Paper>
                      <br></br><br></br>
                      <a href={'https://www.linkedin.com/in/edward-burns-789b09177/'} style={{color:'#8b9e8a',width:'200px',height:'200px'}} target="_blank"> <LinkedInIcon style={{color:'#8b9e8a',width:'100px',height:'100px'}}></LinkedInIcon> </a>  <a href={'https://github.com/EdwardBurns10'} style={{color:'#8b9e8a',width:'200px',height:'200px'}} target="_blank"> <GitHubIcon style={{color:'#8b9e8a',width:'100px',height:'100px'}}></GitHubIcon> </a>  <a href={"mailto: edburns@uwaterloo.ca"} style={{color:'#8b9e8a',width:'200px',height:'200px'}}> <EmailIcon style={{color:'#8b9e8a',width:'100px',height:'100px'}}></EmailIcon> </a>
                  </Paper>

                  </div>
              </Grid>
              <Grid item xs={2}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} ></Paper>
              </Grid>

              <Grid item xs={12}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#efeadb'}} className={classes.lang}>Languages I've worked with... </Paper>
              </Grid>
              <Grid item xs={12}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a'}} ></Paper>
                  <ul className={classes.logo} style={{listStyle:'none'}}>
                      <li>
                          <img src={rubyruby} style={{width:'85px',height:'85px'}}></img>
                          <p className={classes.logoTxt}>Ruby</p>
                      </li>

              <li>
                  <img src={htmlhtml} style={{width:'85px',height:'85px'}}></img>
                  <p className={classes.logoTxt}>HTML 5</p>
              </li>
                      <li>
                          <img src={jjj} style={{width:'85px',height:'85px'}}></img>
                          <p className={classes.logoTxt}>Java</p>
                      </li>
                  <li>
                      <img src={jjs} style={{width:'85px',height:'85px'}}></img>
                      <p className={classes.logoTxt}>JavaScript</p>
                  </li>
                  <li>
                      <img src={rrr} style={{width:'85px',height:'85px'}}></img>
                      <p className={classes.logoTxt}>React</p>
                  </li>
                  <li>
                      <img src={ppp} style={{width:'85px',height:'85px'}}></img>
                      <p className={classes.logoTxt}>Python</p>
                  </li>
                  <li>
                      <img src={sqlsql} style={{width:'85px',height:'85px'}}></img>
                      <p className={classes.logoTxt}>SQL</p>
                  </li>
                  <li>
                      <img src={csscss} style={{width:'85px',height:'85px'}}></img>
                      <p className={classes.logoTxt}>CSS 3</p>
                  </li>
              </ul>
          </Grid>

              <Grid item xs={12}>
                  <Paper  elevation='0' style={{backgroundColor:'transparent',color:'#8b9e8a',paddingBottom:'300px'}} ><hr style={{width:'50px',}}></hr></Paper>
              </Grid>


          </Grid>
          {/*<div >*/}
          {/*    <AppBar position='absolute' style={{backgroundColor:'yellow', color:'#efeadb',top:'auto',bottom:'0'}}>*/}
          {/*        <Toolbar >*/}
          {/*            <IconButton edge="start" >*/}
          {/*                <MenuIcon />*/}
          {/*            </IconButton>*/}
          {/*            <Button  href={'/'}>About</Button>*/}
          {/*            <Button color="inherit" href={'/experience'}>Experience</Button>*/}
          {/*            <Button color="inherit" href={'/projects'}>Projects</Button>*/}
          {/*            <Button color="inherit" style={{display: "table-cell"}} href={Resume} target="_blank">Resume</Button>*/}
          {/*        </Toolbar>*/}
          {/*    </AppBar>*/}
          {/*</div>*/}
      </div>
  );
}
export default Home;
