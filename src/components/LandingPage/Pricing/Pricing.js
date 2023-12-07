// Pricing.js

import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const Pricing = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '40px', my: 20 }}>
            {/* Title */}
            <Typography variant="h2" sx={{ mb: 4 }}>
                Best Pricing Available.
            </Typography>

            {/* Pricing Plans */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                {/* Pricing Plan 1 */}
                <Card sx={{ minWidth: 200, mx: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Basic</Typography>
                        <Typography variant="h4">$9.99/month</Typography>
                        <Typography variant="body1">Starter features</Typography>
                    </CardContent>
                </Card>

                {/* Pricing Plan 2 */}
                <Card sx={{ minWidth: 200, mx: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Pro</Typography>
                        <Typography variant="h4">$19.99/month</Typography>
                        <Typography variant="body1">Advanced features</Typography>
                    </CardContent>
                </Card>

                {/* Pricing Plan 3 */}
                <Card sx={{ minWidth: 200, mx: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Premium</Typography>
                        <Typography variant="h4">$29.99/month</Typography>
                        <Typography variant="body1">Premium features</Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Show Comparisons Button */}
            <Button variant="contained" color="primary">
                Show Comparisons
            </Button>
        </Box>
    );
};

export default Pricing;
