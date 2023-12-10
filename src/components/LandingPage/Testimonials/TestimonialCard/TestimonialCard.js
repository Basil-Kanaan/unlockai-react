// TestimonialCard.js

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import './TestimonialCard.css';

const TestimonialCard = ({profile, author, testimonial}) => {
    const placeholderImage = 'https://source.unsplash.com/150x150/?portrait';

    return (
        <div className="testimonial-card">
            <div className="top-row">
                <img
                    src={profile || placeholderImage}
                    alt="Profile"
                    className="profile-image"
                />
                <Typography variant="body1" className="author">{author}</Typography>
            </div>
            <Typography variant="body2" className="testimonial-text">{testimonial}</Typography>
        </div>
    );
};

TestimonialCard.propTypes = {
    profile: PropTypes.string,
    author: PropTypes.string,
    testimonial: PropTypes.string,
};

TestimonialCard.defaultProps = {
    profile: '',
    author: 'Social media Influencer',
    testimonial: 'This tool saved me so much time and effort. It helped me produce content that was more engaging and effective.',
};

export default TestimonialCard;
