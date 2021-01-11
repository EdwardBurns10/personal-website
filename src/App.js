import {BrowserRouter,Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import React from "react";
import Appbar from './Components/Appbar';
import Bottombar from './Components/Bottombar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Open Sans Condensed',
        ].join(','),
        fontSize: 20,
    },});


const App = () => {


    return (
        <ThemeProvider theme={theme}>
        <div >

            <Appbar>
            </Appbar>

            <div style={{minHeight:'100%'}}>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/Projects'} exact component={Projects}/>
                <Route path={'/Experience'} exact component={Experience}/>
            </Switch>
            </div>



        </div>

        </ThemeProvider>
    );
};

export default App;