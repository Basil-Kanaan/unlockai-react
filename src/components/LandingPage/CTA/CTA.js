// CTA.js

import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const CTA = ({ left, right }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '40px',
                my: 20
            }}
        >
            {/* Left Section */}
            <Typography variant="h2" sx={{ flex: 1 }}>
                {left}
            </Typography>

            {/* Right Section */}
            <Card sx={{ flex: 1, ml: 4 }}>
                <CardContent>
                    <Typography variant="body1">
                        {right}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CTA;
