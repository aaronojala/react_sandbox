import React from 'react';
import {Link} from 'react-router-dom'

const Nothing = () => {
    return (
        <div>
            Nothing was found!
            <Link to="/">Go to home page</Link>
        </div>
    );
};

export default Nothing;