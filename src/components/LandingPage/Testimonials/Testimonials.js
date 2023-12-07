// Testimonials.js

import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const Testimonials = ({id}) => {
    return (
        <Box id={id} sx={{ textAlign: 'center', py: 20}}>
            {/* Header */}
            <Typography variant="h2" sx={{ mb: 4 }}>
                Trusted by Millions.
            </Typography>

            {/* Testimonials Grid */}
            <Grid container spacing={3}>
                {/* Testimonial 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                Testimonial content goes here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Testimonial 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                Testimonial content goes here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Testimonial 3 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                Testimonial content goes here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Testimonial 4 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                Testimonial content goes here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Testimonial 5 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                Testimonial content goes here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Testimonial 6 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                Testimonial content goes here.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Testimonials;
