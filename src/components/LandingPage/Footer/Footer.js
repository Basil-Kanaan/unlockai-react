import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(90deg, #2898FF, #6F5DCA)',
                color: '#fff',
                py: 4,
                height: "50vh",
                pt: "5"
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: "100%",
                        pt: "10rem"
                    }}
                >
                    {/* Left Section */}
                    <Box sx={{ flex: 1 }}>
                        <Box className={"footer-logo-holder"} sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography variant="h4" fontWeight='bold' className="footer-text">
                                UnlockAI
                            </Typography>
                            <Typography variant="h6" className="footer-text">
                                Start creating your social media content today!
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: "row"}}>
                                {/* Social Media Icons */}
                                <InstagramIcon className="white-icon" fontSize={"2rem"}/>
                                <FacebookIcon className="white-icon" fontSize={"2rem"}/>
                                <YouTubeIcon className="white-icon" fontSize={"2rem"}/>
                                <TwitterIcon className="white-icon" fontSize={"2rem"}/>
                                <LinkedInIcon className="white-icon" fontSize={"2rem"} />
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Section */}
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                        {/* Column 1: Company */}
                        <Box sx={{ pr: 10 }}>
                            <Typography variant="h6" className="footer-text" fontWeight={"600"}>Company</Typography>
                            <Typography variant="body2" className="footer-text">Pricing</Typography>
                            <Typography variant="body2" className="footer-text">Our Story</Typography>
                            <Typography variant="body2" className="footer-text">Customer Stories</Typography>
                            <Typography variant="body2" className="footer-text">Contact Us</Typography>
                            <Typography variant="body2" className="footer-text">Blogs</Typography>
                        </Box>

                        {/* Column 2: Help */}
                        <Box sx={{ pr: 10 }}>
                            <Typography variant="h6" className="footer-text" fontWeight={"600"}>Help</Typography>
                            <Typography variant="body2" className="footer-text">Help Centre</Typography>
                            <Typography variant="body2" className="footer-text">Password Reset</Typography>
                            <Typography variant="body2" className="footer-text">FAQ</Typography>
                            <Typography variant="body2" className="footer-text">Contact</Typography>
                            <Typography variant="body2" className="footer-text">Suggestions</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
