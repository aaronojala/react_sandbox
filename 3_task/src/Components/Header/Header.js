import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Like Counter</h2>
            <p>{new Date().toLocaleDateString('en-GB')}</p>
        </div>
    );
};

export default Header;