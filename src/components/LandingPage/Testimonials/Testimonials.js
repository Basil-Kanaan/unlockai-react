// Testimonials.js

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import TestimonialCard from './TestimonialCard/TestimonialCard';
import MiniBarBubble from "../../MiniBarBubble/MiniBarBubble";

const testimonialsData = [
    {
        author: "John Doe",
        testimonial: "This tool transformed the way I create content. It's a game-changer!"
    },
    {
        author: "Jane Doe",
        testimonial: "I've never seen such innovative features. It's a must-have for content creators!"
    },
    {
        author: "Alex Smith",
        testimonial: "UnlockAI has saved me time and effort. The AI-generated content is incredible! I can't imagine my content creation process without it."
    },
    {
        author: "Emily Johnson",
        testimonial: "As a social media influencer, UnlockAI has enhanced my content strategy significantly. The ability to generate creative captions and hashtags is a game-changer."
    },
    {
        author: "Michael Brown",
        testimonial: "The AI tools provided by UnlockAI are simply amazing. Highly recommended!"
    },
    {
        author: "Sophia Williams",
        testimonial: "Joining the UnlockAI community was the best decision for my content creation journey. The support from the community and the innovative AI features have made a positive impact on my work."
    },
];

const Testimonials = ({ id }) => {
    return (
        <Box id={id} sx={{ textAlign: 'center', py: 10 }}>
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
                <Grid container spacing={3} justifyContent="center">
                    {testimonialsData.map((testimonial, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <TestimonialCard
                                author={testimonial.author}
                                testimonial={testimonial.testimonial}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;
