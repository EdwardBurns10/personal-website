import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from "@material-ui/core/Toolbar";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import questions from '../20_Questions.png'


//'#8b9e8a', color:'#efeadb'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '5em',
        padding:'40px',
        color:'#8b9e8a',
        fontFamily:'open sans condensed'
    },
    projectName:{
        fontSize: '2em',
        color:'#8b9e8a',
        fontFamily:'open sans condensed',
        paddingLeft:'20px'

    },
    projectText:{
        fontSize: '1.5em',
        color:'#8b9e8a',
        fontFamily:'open sans condensed',
        paddingLeft:'20px'
    },
    topText: {
        fontSize: '2em',
        paddingBottom:'100px',
        paddingLeft:'40px',
        color:'#8b9e8a',
        fontFamily:'open sans condensed'
    },
    longBar: {
        Color:'#efeadb',
        boxShadow:'0 0 10px 1px #efeadb',
        height:'3px',
        backgroundColor:'#efeadb'

    },
    shortBar: {
        width:'50px',
        backgroundColor:'#efeadb',
        boxShadow:'0 0 10px 1px #efeadb',
        height:'3px'
    }
});

export default function Projects() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (

<div>
    <Grid container spacing={0}>
        <Grid item xs={12} className={classes.title}>
            Projects
        </Grid>

        <Grid item xs={8} className={classes.topText}>
            On this page I have listed a few of the projects that I have worked on both for school projects as well as on my own time. I look forward to continuing to populate this page as the year goes on :)
            Visit my <a href={'https://github.com/EdwardBurns10'} target="_blank">github</a> for the source code of all my projects.
        </Grid>
        <Grid item xs={12} style={{paddingBottom:'40px'}}>
            <div className={classes.projectName}>
        20 Questions Game
            </div>
        </Grid>
        <Grid item xs={6} className={classes.projectText} >
             This app implements a yes/no guessing game written in Java.
             Accepting question and answer .txt files in the form of binary trees, the game then prompts the player to think of an object and proceeds to
            ask the client a series of yes or no questions in an attempt to gusss said object.
            If the player wins, meaning their object was not in the tree,
             the binary tree will be updated with the answer and
             a question leading to that answer. Upon completing game the new answer tree can be printed as a text file following a depth-first-traversal of the binary tree
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
            <img src={questions} style={{width:'300px',height:'300px'}}></img>
        </Grid>
        <Grid item xs={12} style={{paddingBottom:'100px',paddingTop:'100px'}}>
            <hr className={classes.longBar}></hr>
        </Grid>
        <Grid item xs={12} style={{paddingBottom:'40px'}}>
            <div className={classes.projectName}>
            Wordgame
            </div>
        </Grid>
        <Grid item xs={6} className={classes.projectText}>
            This is a Ruby-on-Rails hangman application that runs on a PostgresSQL database.
            When a user creates a new game, they set the number of allowed wrong guesses.
            The application randomly selects a word from the watchout4snakes.com word library and prompts users to guess letters
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={12} style={{paddingBottom:'100px',paddingTop:'100px'}}style={{paddingBottom:'100px',paddingTop:'100px'}}>
            <hr className={classes.longBar}></hr>
        </Grid>
    </Grid>
</div>
    );
}

