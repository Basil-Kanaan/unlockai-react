// Suggestions.js

import React from 'react';
import { Box, Card, CardContent, Container, Typography, TextField, Grid } from '@mui/material';
import './Suggestions.css';

const Suggestions = () => {
    return (
        <Container maxWidth={"xl"}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '40px',
                    my: 10,
                    gap: 10,
                }}
            >
                {/* Left Section */}
                <Typography variant="h2" sx={{ flex: 1, textAlign: "left"}}>
                    Got any suggestions for our platform?<br/>
                    Let us know!
                </Typography>

                {/* Right Section */}
                <Card className={"suggestions-card"} sx={{ flex: 2}}>
                    <CardContent>
                        <form>
                            {/* First Row */}
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Name" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Email Address" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField label="Contact Number" fullWidth />
                                </Grid>

                                {/* Second Row */}
                                <Grid item xs={12}>
                                    <TextField
                                        label="Suggestions"
                                        multiline
                                        rows={10}
                                        fullWidth
                                    />
                                </Grid>

                                {/* Third Row */}
                                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                                    <Box
                                        component="button"
                                        sx={{
                                            backgroundColor: '#6CA9FB',
                                            color: '#fff',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            border: 'none',
                                            transition: 'background-color 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: 'hsl(213, 75%, 55%)',
                                            },
                                            typography: 'body1',
                                            width: "150px",
                                            marginTop: 2,
                                            fontWeight: "500"
                                        }}
                                    >
                                        SUBMIT
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>

            </Box>
        </Container>
    );
};

export default Suggestions;
