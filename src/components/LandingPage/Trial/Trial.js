// Trial.js
import React from 'react';
import {Container, Typography} from '@mui/material';
import './Trial.css';
import {Link as RouterLink} from "react-router-dom"; // Add your styling if needed

const Trial = () => {
    return (
        <Container maxWidth="md" className="trial-container" sx={{py: 10, my: 10}}>
            <div className="main-card-outer">
                <div className={"main-card-inner"}>
                    <div className="logo-row">
                        <div className="logo-bubble">Unlock AI</div>
                        <div className="logo-text">UNLOCK YOUR CREATIVITY</div>
                    </div>
                    <Typography mb="1rem" variant="h1" className="trial-title">
                        Start Your<br/>Free Trial
                    </Typography>
                    <Typography mb="1rem" variant="body1" className="description" sx={{maxWidth: "65%", mx: "auto"}}>
                        Unlock your business potential by letting the AI work and generate money for you.
                    </Typography>
                    <Typography
                        component={RouterLink}
                        to="/signup"
                        className="trial-button"
                    >
                        Join Our Community
                    </Typography>
                </div>
            </div>
        </Container>
    );
};

export default Trial;
