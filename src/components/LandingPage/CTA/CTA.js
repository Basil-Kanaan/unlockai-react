// CTA.js

import React from 'react';
import {Box, Card, CardContent, Container, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import './CTA.css';

const CTA = ({left, right}) => {
    return (
        <Container maxWidth={"xl"}>
            <Box
                className="cta-container"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '40px',
                    my: 15,
                    gap: 20,
                }}
            >
                {/* Left Section */}
                <Typography variant="h2" className="cta-left">
                    {left}
                </Typography>

                {/* Right Section */}
                <div className="cta-right">
                    <Card className="cta-card">
                        <CardContent>
                            <Typography
                                fontSize="1.1rem"
                                fontWeight="600"
                                sx={{color: 'rgba(0,0,0,0.5)'}}
                                variant="body1"
                            >
                                {right}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Typography
                        component={RouterLink}
                        to="/signup"
                        className="cta-button"
                    >
                        Unlock your Potential
                    </Typography>
                </div>
            </Box>
        </Container>
    );
};

export default CTA;
