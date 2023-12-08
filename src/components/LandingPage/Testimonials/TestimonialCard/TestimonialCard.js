import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import './TestimonialCard.css';  // Create a CSS file for styling if needed

const TestimonialCard = ({ profile, author, testimonial }) => {
    return (
        <div className="testimonial-card">
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ flex: 1 }} src={profile} alt="Profile" className="profile-image" />
                <Typography sx={{ flex: 1, display: 'flex', alignItems: 'center', fontSize: "1.1rem", fontWeight: 800 }} variant="body1">{author}</Typography>
            </div>
            <Typography fontSize={"1rem"} mt={2} textAlign={"center"} variant="body2" color={"rgba(0,0,0,0.5)"}>{testimonial}</Typography>
        </div>
    );
};

TestimonialCard.propTypes = {
    profile:     PropTypes.string,
    author:        PropTypes.string,
    testimonial: PropTypes.string,
};

TestimonialCard.defaultProps = {
    profile: 'default-image.jpg',
    author: 'Social media Influencer',
    testimonial:'This tool saved me so much time and effort. It helped me produce content that was more engaging and effective.',
};

export default TestimonialCard;
