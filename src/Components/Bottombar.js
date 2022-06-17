
import {Link} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import Resume from '../EDBurns Resume Jan 2021 copy.pdf';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

function Bottombar() {

    return (
        <div >
            <AppBar position='absolute' style={{backgroundColor:'blue', color:'#efeadb',top:'auto',bottom:'0'}}>
                <Toolbar >
                    <IconButton edge="start" >
                        <MenuIcon />
                    </IconButton>
                    <Button  href={'/'}>About</Button>
                    <Button color="inherit" href={'/experience'}>Experience</Button>
                    <Button color="inherit" href={'/projects'}>Projects</Button>
                    <Button color="inherit" style={{display: "table-cell"}} href={Resume} target="_blank">Resume</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Bottombar;
