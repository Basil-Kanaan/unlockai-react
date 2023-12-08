import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import './FeatureCard.css';  // Create a CSS file for styling if needed

const FeatureCard = ({ title, description, img }) => {
    return (
        <div className="feature-card">
            <Typography variant="body1" fontWeight={800}>{title}</Typography>
            <Typography variant="body2" color={"rgba(0,0,0,0.5)"}>{description}</Typography>
            <img src={img} alt="Feature" className="feature-image" />
        </div>
    );
};

FeatureCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageSrc: PropTypes.string,
};

FeatureCard.defaultProps = {
    title: 'Default Title',
    description: 'Default Description',
    imageSrc: 'default-image.jpg',
};

export default FeatureCard;
