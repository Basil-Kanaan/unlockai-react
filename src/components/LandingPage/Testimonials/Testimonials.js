// Testimonials.js

import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import MiniBarBubble from "../../MiniBarBubble/MiniBarBubble";

const Testimonials = ({ id }) => {
    return (
        <Box id={id} sx={{ textAlign: 'center', py: 20 }}>
            {/* Header */}
            <MiniBarBubble color={"rgba(40, 2, 124, 0.15)"} backgroundColor={"rgba(40, 2, 124, 0.15)"}>
                <Typography variant={"body1"} color={"#28027C"}>
                    Testimonials
                </Typography>
                <Typography variant={"body1"} color={"rgba(40, 2, 124, 0.5)"}>
                    Trustpilot
                </Typography>
            </MiniBarBubble>

            <Typography variant="h2" sx={{ mb: 4 }}>
                Trusted by Millions.
            </Typography>

            <Container maxWidth={"lg"}>
                {/* Testimonials Grid */}
                <Grid container spacing={3} justifyContent="center"> {/* Center the grid items */}
                    {/* Testimonial 1 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TestimonialCard
                            author="John Doe"
                        />
                    </Grid>

                    {/* Testimonial 2 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TestimonialCard
                            author="Jane Doe"
                        />
                    </Grid>

                    {/* Testimonial 3 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TestimonialCard
                            author="Alex Smith"
                        />
                    </Grid>

                    {/* Testimonial 4 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TestimonialCard
                            author="Emily Johnson"
                        />
                    </Grid>

                    {/* Testimonial 5 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TestimonialCard
                            author="Michael Brown"
                        />
                    </Grid>

                    {/* Testimonial 6 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TestimonialCard
                            author="Sophia Williams"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;
