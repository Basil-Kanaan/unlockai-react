// Pricing.js

import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import PackageCard from './PackageCard/PackageCard';

const Pricing = ({id}) => {
    // Define the pricing packages
    const pricingPackages = [
        {
            packageName: 'Basic',
            subtitle1: 'Best for Solo Content Creators',
            price: '$0.5',
            subtitle2: 'Basic plan includes:',
            features: [
                'Unlimited Scheduled Posts',
                'AI Captions & Hashtag Generator',
                'AI Industry Experts',
                'AI Speech to Text',
                'Link in bio tool',
            ],
        },
        {
            packageName: 'Pro',
            subtitle1: 'Perfect for Entrepreneurs',
            price: '$1',
            subtitle2: 'Pro plan includes:',
            features: [
                'Unlimited Scheduled Posts',
                'AI Captions & Hashtag Generator',
                'AI Industry Experts',
                'AI Speech to Text',
                'Link in bio tool',
            ],
        },
        {
            packageName: 'Premium',
            subtitle1: 'Excellent for Agency Owners',
            price: '$2.22',
            subtitle2: 'Premium plan includes:',
            features: [
                'Unlimited Scheduled Posts',
                'AI Captions & Hashtag Generator',
                'AI Industry Experts',
                'AI Speech to Text',
                'Link in bio tool',
                '24/7 Support'
            ],
        },
    ];

    return (
        <Box id={id} sx={{textAlign: 'center', py: 10}}>
            {/* Title */}
            <Typography variant="h2" sx={{mb: 4}}>
                Best Pricing Available.
            </Typography>

            {/* Pricing Plans */}
            <Container maxWidth={"lg"}>
                <Grid container spacing={2} justifyContent="center">
                    {pricingPackages.map((plan, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <PackageCard plan={plan}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Pricing;
