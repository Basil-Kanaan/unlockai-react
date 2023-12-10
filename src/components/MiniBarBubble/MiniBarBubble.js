// MiniBarBubble.js

import React from 'react';
import PropTypes from 'prop-types';
import './MiniBarBubble.css';

const MiniBarBubble = ({color, backgroundColor, children}) => {
    return (
        <div className="mini-bar-bubble" style={{backgroundColor}}>
            {React.Children.toArray(children)[0]}
            <span className="dot" style={{backgroundColor: color}}></span>
            {React.Children.toArray(children)[1]}
        </div>
    );
};

MiniBarBubble.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    opacity: PropTypes.number,
    children: PropTypes.node.isRequired,
};

MiniBarBubble.defaultProps = {
    color: 'gray',
    backgroundColor: '#CDCDCD',
};

export default MiniBarBubble;
