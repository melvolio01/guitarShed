import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.scss'

const MenuItem = ({ title, imageLink, size, history, linkUrl, match, color }) => {
    console.log(`Menu Item:  ${title}: ${color}`)
    return (
        <div className={`${size} menu-item`}
            style={{ backgroundImage: `url(${imageLink})`, opacity: 0.8 }}
            onClick={() => {
                history.push(`${match.url}${linkUrl}`)
            }} >
            <div className={`content`}
                style={{ backgroundColor: `${color}` }}
            >
                <h1 className="title">{title}</h1>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);