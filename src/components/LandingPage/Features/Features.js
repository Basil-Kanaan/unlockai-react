// Features.js

import React from 'react';

import {Box, Container, Grid, Typography} from '@mui/material';
import FeatureCard from "./FeatureCard/FeatureCard";
import {Link as RouterLink} from "react-router-dom";

import "./Features.css";

const Features = ({id}) => {
    return (
        <Box id={id}
             sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 textAlign: 'center',
                 py: 10
             }}
        >
            {/* Section Title */}
            <Typography variant="h2">
                AI Tools<br/>Tailored for Success
            </Typography>

            {/* Grid of Cards */}
            <Container maxWidth={"lg"}>
                <Grid container spacing={3} sx={{my: 4}}>
                    {/* Repeat the Card component for each feature */}
                    {/* Example Card: */}
                    <Grid item xs={12} sm={6} md={4}>
                        <FeatureCard title="Post Scheduler"
                                     description="Plan and automate your posts with AI-enabled scheduling."/>
                        <FeatureCard title="AI Industry Expert"
                                     description="Create captivating captions with AI-driven creativity."/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FeatureCard title="AI Caption & Hashtag Suggestions"
                                     description="Boost your visibility with AI-selected hashtags & captions."/>
                        <FeatureCard title="Speech to Text" description="Get AI to transform your voice into text!"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FeatureCard title="Social Media AI Expert"
                                     description="Speak with our expert to create the best posts!"/>
                        <FeatureCard title="AI Voiceover" description="Allow AI to story tell your content!"/>
                    </Grid>
                </Grid>
            </Container>

            {/* See All Features Button */}
            <Typography
                component={RouterLink}
                to="/signup"
                className="features-button"
                fontWeight="600"
            >
                SEE ALL<br/>FEATURES
            </Typography>
        </Box>
    );
};

export default Features;
