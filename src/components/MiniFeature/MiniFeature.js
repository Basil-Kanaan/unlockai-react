import React from 'react';
import {Box, Typography} from '@mui/material';
import "./MiniFeature.css"

const Minifeature = ({icon, text, gradient}) => {
    return (
        <Box className="minifeature">
            {/* First Row - Icon with Gradient Background */}
            <Box
                sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '8px',
                    background: gradient,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Your Icon Component */}
                {icon}
            </Box>

            {/* Second Row - Text */}
            <Typography variant="body1" sx={{marginTop: '10px'}}>
                {text}
            </Typography>
        </Box>
    );
};

export default Minifeature;
