// PackageCard.js
import React from 'react';
import {Typography} from '@mui/material';
import './PackageCard.css';
import pricingCheckmark from '../../../../assets/images/pricing_checkmark.png';
import {Link as RouterLink} from 'react-router-dom';

const PackageCard = ({plan}) => {
    const {packageName, subtitle1, price, subtitle2, features} = plan;

    return (
        <div className="package-card">
            <div className="card-content">
                <Typography variant="h3">{packageName}</Typography>
                <Typography mb={1} variant="subtitle1" className="subtitle" sx={{height: '40px'}}>
                    {subtitle1}
                </Typography>
                <Typography my={2} variant="h4">
                    {price} <span style={{fontSize: '1rem'}}>/ Day</span>
                </Typography>
                <Typography variant="subtitle1" className="subtitle">
                    {subtitle2}
                </Typography>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>
                            <div className="feature-box">
                                <img className="checkmark-image" src={pricingCheckmark} alt="Checkmark"/>
                                <Typography variant="body1" style={{fontSize: '1rem'}}>
                                    {feature}
                                </Typography>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Typography
                component={RouterLink}
                to="/signup"
                className="start-for-free-button"
                fontWeight={600}
            >
                Start for Free!
            </Typography>
        </div>
    );
};

export default PackageCard;
