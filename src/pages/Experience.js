import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import redCanari from '../red canari logo.jpeg';
import BoC from '../Bank of Canada logo.jpg';
import Stats from '../statsCanLogo.jpg';
import Guard from '../City-of-Ottawa logo.jpg'
import '../fonts.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(4),
        marginBottom:'30px',
        marginLeft:'30px',
        marginRight:'30px',
        backgroundColor:'#efeadb',
        color:'#353130',
        textAlign: 'center',
        fontFamily:'open sans condensed',
        fontSize:'1.25em',
    },
    txt: {
        textAlign: 'center',
        fontSize:'2em',
        color:'#8b9e8a',
        fontFamily: 'open sans condensed'
    }
}));

export default function Experience() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{padding:'100px'}}>
                    <Paper elevation='0' style={{backgroundColor:'transparent',color:'#efeadb',fontSize:'6em',textAlign:'center',fontFamily:'open sans condensed'}}>
                        Job Experience</Paper>
                    <br></br><br></br>
                    <hr style={{width:'200px',backgroundColor:'#efeadb',boxShadow:'0 0 10px 1px #efeadb',height:'5px'}}></hr>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation='10' className={classes.paper} >
                        <img src={redCanari} style={{width:'85px',height:'85px'}}></img>
                        <br></br>
                        Full Stack Software Developper - RedCanari, Sep - Dec 2020
                        <ul style={{textAlign:'left'}}>
                            <li>Developed a full stack ReactJS web application which processed,
                                manipulated and displayed user data</li>
                            <li>Created serverless backend using Amazon DynamoDB and AWS Lambda</li>
                            <li>Created a Microsoft sign-in authentication server with a Traefik proxy,
                                docker and flask</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <br></br> <br></br>
                    <Paper elevation='0' style={{backgroundColor:'transparent',textAlign:'center'}} className={classes.txt}> Full Stack Software Developper - RedCanari, Sep - Dec 2020</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation='0' className={classes.txt} style={{backgroundColor:'transparent'}}>Cyber Security Analyst - Bank of Canada, Jan-May 2020</Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper elevation='10' className={classes.paper}>
                        <img src={BoC} style={{width:'85px',height:'85px'}}></img>
                        <br></br>
                        Cyber Security Analyst - Bank of Canada, Jan-May 2020
                        <ul style={{textAlign:'left'}}>
                            <li>Researched and identified the leading dangerous and relevant global
                                Advanced Persistent Threat groups. Analysed capabilities of threat actors
                                and attack vectors to identify potential vulnerabilities</li>
                            <li>Wrote and modified python scripts to improve opensource software
                                programs</li>
                            <li>Wrote programs using VBA and macros to optimize the filtering process of
                                excel files containing 750,000+ security vulnerability logs </li>
                            <li>
                                Specified and procured virtual machines in Azure, then installed and tested
                                opensource software in a Red Hat Linux VM environment
                            </li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation='10' className={classes.paper}>
                        <img src={Stats} style={{width:'85px',height:'85px'}}></img>
                        <br></br>
                        Data Process Engineer and Analyst - Statistics Canada, May-Aug 2019
                        <ul style={{textAlign:'left'}}>
                            <li>Worked to modernize data production and verification practices in order to
                                streamline operations, standardize and automate processes.</li>
                            <li>Organized and lead team meetings</li>
                            <li>Manipulated, dissected, verified, analyzed & interpreted financial data.
                                Constructed statistical data tables and graphs, prepared written analyses,
                                presented results and made recommendations. </li>
                            <li>
                                Used Microsoft Excel at an advanced level (using Visual Basic for
                                Applications, creating pivot tables and macros and using complex
                                formulas).
                            </li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation='0' className={classes.txt} style={{backgroundColor:'transparent'}}> Data Process Engineer and Analyst - Statistics Canada, May-Aug 2019</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation='0' className={classes.txt} style={{backgroundColor:'transparent'}}>  Lifeguard/ Swim Instructor, City of Ottawa - Plant & Pinecrest Pools, 2016-2018</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation='10' className={classes.paper}>
                        <img src={Guard} style={{width:'100px',height:'85px'}}></img>
                        <br></br>
                        Lifeguard/ Swim Instructor, City of Ottawa - Plant & Pinecrest Pools, 2016-2018
                        <ul style={{textAlign:'left'}}>
                            <li>Taught with encouragement and positive reinforcement. Demonstrated techniques, corrected faults, identified ways to improve performance and set clear targets.</li>
                            <li>Wrote clear and progressive lesson plans, provided detailed assessments with constructive feedback, communicated effectively with clients.</li>
                            <li>Supervised assistants, collaborated effectively with lifeguard team during routine and emergency situations.</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
