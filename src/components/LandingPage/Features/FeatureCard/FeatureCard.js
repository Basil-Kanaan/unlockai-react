import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import './FeatureCard.css'; // Create a CSS file for styling if needed

const FeatureCard = ({title, description, img}) => {
    // Use the provided image or a placeholder image from Lorem Picsum
    const imageSource = img || `https://picsum.photos/200/150?random=${Math.random()}`;

    return (
        <div className="feature-card">
            <Typography variant="body1" fontWeight={800}>
                {title}
            </Typography>
            <Typography variant="body2" color={"rgba(0,0,0,0.5)"}>
                {description}
            </Typography>
            <img src={imageSource} alt="Feature" className="feature-image"/>
        </div>
    );
};

FeatureCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
};

FeatureCard.defaultProps = {
    title: 'Default Title',
    description: 'Default Description',
    img: null,
};

export default FeatureCard;
