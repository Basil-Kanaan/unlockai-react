// Features.js

import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

const Features = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '40px',
                my: 20
            }}
        >
            {/* Section Title */}
            <Typography variant="h2">
                AI Tools Tailored <br/>for Social Media Success
            </Typography>

            {/* Grid of Cards */}
            <Grid container spacing={3} sx={{ mt: 4, mb: 4 }}>
                {/* Repeat the Card component for each feature */}
                {/* Example Card: */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Feature Name
                            </Typography>
                            <Typography variant="body2">
                                Feature Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Repeat for other features */}
            </Grid>

            {/* See All Features Button */}
            <Button variant="contained" color="primary">
                SEE ALL FEATURES
            </Button>
        </Box>
    );
};

export default Features;
