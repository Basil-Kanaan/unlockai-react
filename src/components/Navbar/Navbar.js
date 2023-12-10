// Navbar.js
import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import {Link as RouterLink} from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const navbar = document.querySelector('.navbar');

        if (section && navbar) {
            const navbarHeight = navbar.offsetHeight;
            const sectionOffset = section.offsetTop - navbarHeight;

            window.scrollTo({
                top: sectionOffset,
                behavior: 'smooth',
            });
        }
    };


    const drawerContent = (
        <List>
            <ListItem component={RouterLink} to="/" onClick={() => {
                toggleDrawer();
                scrollToTop();
            }}>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem component={RouterLink} to="/" onClick={() => {
                toggleDrawer();
            }}>
                <ListItemText primary="Features"/>
            </ListItem>
            <ListItem component={RouterLink} to="/" onClick={() => {
                toggleDrawer();
            }}>
                <ListItemText primary="How it Works"/>
            </ListItem>
            <ListItem component={RouterLink} to="/" onClick={() => {
                toggleDrawer();
            }}>
                <ListItemText primary="Testimonials"/>
            </ListItem>
            <ListItem component={RouterLink} to="/" onClick={() => {
                toggleDrawer();
            }}>
                <ListItemText primary="Pricing"/>
            </ListItem>
            <ListItem component={RouterLink} to="/" onClick={() => {
                toggleDrawer();
            }}>
                <ListItemText primary="FAQ"/>
            </ListItem>
        </List>
    );


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const renderLinks = () => {
        if (isSmallScreen) {
            return (<></>);
        } else {
            return (
                <>
                    {/* Links in the middle */}
                    <Box className="nav-links" sx={{display: 'flex'}}>
                        <Typography
                            component={RouterLink}
                            to="/"
                            onClick={scrollToTop}
                            className="navbar-link"
                            sx={{background: "#CDCDCD"}}
                        >
                            Home
                        </Typography>
                        <Typography
                            component={RouterLink}
                            to="/"
                            onClick={() => scrollToSection('features-section')}
                            className="navbar-link"
                        >
                            Features
                        </Typography>
                        <Typography
                            component={RouterLink}
                            to="/"
                            onClick={() => scrollToSection('testimonials-section')}
                            className="navbar-link"
                        >
                            Testimonials
                        </Typography>
                        <Typography
                            component={RouterLink}
                            to="/"
                            onClick={() => scrollToSection('pricing-section')}
                            className="navbar-link"
                        >
                            Pricing
                        </Typography>
                        <Typography
                            component={RouterLink}
                            to="/"
                            onClick={() => scrollToSection('faq-section')}
                            className="navbar-link"
                        >
                            FAQ
                        </Typography>
                    </Box>
                </>
            );
        }
    };

    return (
        <AppBar position="fixed">
            <Toolbar className="navbar" sx={{p: 2}}>
                {/* Logo on the left */}
                <Box className="nav-logo" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={logo} alt="Logo" className="navbar-logo-image"/>
                    <Typography variant="h6" className="gradient-text"
                                sx={{fontWeight: 'bold', fontSize: '30px', marginLeft: '8px'}}>
                        UnlockAI
                    </Typography>
                </Box>

                {renderLinks()}

                {/* Signup and login buttons on the right */}
                <Box className="nav-right-links" sx={{display: 'flex'}}>
                    <Typography
                        component={RouterLink}
                        to="/signin"
                        className="navbar-link"
                    >
                        Sign In
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to="/signup"
                        className="navbar-link"
                        sx={{background: "#CDCDCD"}}
                    >
                        Join Us
                    </Typography>
                    {isSmallScreen && (
                        <IconButton onClick={toggleDrawer} edge="end" color="black" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                    )}
                </Box>


                {/* Drawer for small screens */}
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                    {drawerContent}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
