import React from 'react';
import { Box, Typography } from '@mui/material';
import MiniBarBubble from "../../MiniBarBubble/MiniBarBubble";

const Trial = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '40px', my: 20 }}>
            {/* FAQ Title */}
            <MiniBarBubble

                backgroundColor="rgba(96, 2, 124, 0.15)"
                color="#60027C"
            >
                <Typography variant={"body1"} color={"#60027C"}>
                    FAQ
                </Typography>
                <Typography variant={"body1"} color={"rgba(96, 2, 124, 0.5)"}>
                    Help Center
                </Typography>
            </MiniBarBubble>


            {/* Have a question? */}
            <Typography variant="h2" sx={{ my: 4 }}>
                Have a question?
            </Typography>

            {/* Support Team */}
            <Typography variant="body1" sx={{ mb: 4 }}>
                Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
            </Typography>

            {/* Placeholder for the last element */}
            <Box>
                {/* Add your content for the last element here */}
            </Box>
        </Box>
    );
};

export default Trial;
