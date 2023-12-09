import React from 'react';
import {Box, Container, TextField, Typography} from '@mui/material';
import "./Hero.css";
import MiniFeature from "../../MiniFeature/MiniFeature";
import {
    AccountCircleOutlined,
    AddBoxOutlined,
    CalendarMonthOutlined,
    ChatOutlined,
    KeyboardVoiceOutlined
} from '@mui/icons-material';
import MiniBarBubble from "../../MiniBarBubble/MiniBarBubble";

const Hero = () => {
    const minifeature_bg = "linear-gradient(90deg, rgba(40, 152, 255, 0.5), rgba(171, 100, 241, 0.5))";

    return (
        <Box className="hero-section"
             sx={{mt: "100px", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Container maxWidth="xl" className="hero-section-main" sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: {xs: 'column-reverse', md: 'row'},
                my: {xs: 5, md: 0},
                gap: 4
            }}>
                {/* Left Section - Content */}
                <Box className="left-section" sx={{pr: {xs: 0, md: 10}}}>
                    <div style={{textAlign: "center"}}>
                        <MiniBarBubble>
                            <Typography variant={"body1"} color={"black"}>
                                UnlockAI
                            </Typography>
                            <Typography variant={"body1"} color={"gray"}>
                                Unleash the Power of AI
                            </Typography>
                        </MiniBarBubble>
                    </div>
                    <div className={"left-section-main"}>
                        <Typography variant="h1">AI-Powered Social Media Mastery</Typography>
                        <Typography variant="h3" className="gradient-text">Smart. Simple. Social</Typography>
                        <Typography variant="body1" sx={{mt: 5,}}>Sign up for a 7-day Free Trial, no credit card
                            required!</Typography>
                        {/* Form */}
                        <form>
                            <Box sx={{display: 'flex', gap: 2, marginTop: 2}}>
                                <TextField label="Name" variant="outlined" fullWidth/>
                                <TextField label="Email" variant="outlined" fullWidth/>
                            </Box>
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
                                    width: "100%",
                                    marginTop: 2,
                                    fontWeight: "500"
                                }}
                            >
                                CREATE FREE ACCOUNT
                            </Box>
                        </form>

                        {/* Terms of Use and Privacy Policy */}
                        <Typography variant="body2"
                                    sx={{color: '#C3B1E1', marginTop: 1, textAlign: 'center', fontWeight: 'bold'}}>
                            <a href="/terms" style={{color: '#C3B1E1', textDecoration: 'underline'}}>Terms of Use</a> and <a
                            href="/privacy" style={{color: '#C3B1E1', textDecoration: 'underline'}}>Privacy Policy</a>.
                        </Typography>
                    </div>
                </Box>
                {/* Right Section - Video */}
                <Box className="right-section"
                     sx={{flex: 1, p: 3, mb: {xs: 4, md: 0}, position: 'relative'}}>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/0hsATCCETdk?rel=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Container>

            <Box className="hero-section-minifeatures" sx={{
                p: "3rem",
                width: "100%",
                borderRadius: '8px', // Rounded corners
                border: '1px solid #ddd', // Light gray outlined border
                display: 'flex',
                alignItems: 'center', // Center items vertically
                justifyContent: 'space-evenly', // Equally distribute space horizontally
                flexWrap: 'wrap', // Allow items to wrap to the next line
                mt: 5
            }}>
                <MiniFeature icon={<AddBoxOutlined/>} text="AI Caption & Hashtags" gradient={minifeature_bg}/>
                <MiniFeature icon={<CalendarMonthOutlined/>} text="Automated Scheduling" gradient={minifeature_bg}/>
                <MiniFeature icon={<AccountCircleOutlined/>} text="AI Industry Expert" gradient={minifeature_bg}/>
                <MiniFeature icon={<ChatOutlined/>} text="Speech to Text" gradient={minifeature_bg}/>
                <MiniFeature icon={<KeyboardVoiceOutlined/>} text="AI Voiceover" gradient={minifeature_bg}/>
            </Box>
        </Box>
    );
};

export default Hero;
