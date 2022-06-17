

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";

function Layout() {
    const styles = (theme) => ({
        toolbar: theme.mixins.toolbar,
    });

    console.log(classes.toolbar);


    return (
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                >
                    <MenuIcon />
                </IconButton>
                <MenuItem>
                    <Typography variant='h6' >
                        Home
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant='h6'>
                        About
                    </Typography>
                </MenuItem>
            </Toolbar>
        </AppBar>
    );
}

export default Layout;
