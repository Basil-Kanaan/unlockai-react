import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from "@mui/material";
import facebook_logo from "../../../assets/images/social_logos/facebook_logo.svg";
import instagram_logo from "../../../assets/images/social_logos/instagram_logo.svg";
import tiktok_logo from "../../../assets/images/social_logos/tiktok_logo.svg";
import youtube_logo from "../../../assets/images/social_logos/youtube_logo.svg";
import defaultImage from "../../../assets/images/social_logos/instagram_logo.svg";

const InfluencerCard = ({ platform = 'Instagram', accountName = 'Default Account', followerCount = '0', imageUrl = defaultImage }) => {
    return (
        <Card sx={{m: 2}}>
            <CardMedia
                component="img"
                alt={`${platform} account`}
                height="140"
                image={imageUrl}
            />
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        {/* Social Media Logo */}
                        {getSocialMediaLogo(platform)}
                    </Grid>
                    <Grid item xs>
                        {/* Account Name and Follower Count */}
                        <Box>
                            <Typography variant="h6" component="div">
                                {accountName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {`${followerCount} followers`}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

// Helper function to get social media logo based on platform
const getSocialMediaLogo = (platform) => {
    switch (platform.toLowerCase()) {
        case 'instagram':
            return <img src={instagram_logo} alt="Instagram Logo" style={{ height: '30px' }} />;
        case 'facebook':
            return <img src={facebook_logo} alt="Facebook Logo" style={{ height: '30px' }} />;
        case 'tiktok':
            return <img src={tiktok_logo} alt="TikTok Logo" style={{ height: '30px' }} />;
        case 'youtube':
            return <img src={youtube_logo} alt="YouTube Logo" style={{ height: '30px' }} />;
        default:
            return null;
    }
};

export default InfluencerCard;
