import React, {  } from 'react';

import {
    Link
} from 'react-router-dom';

import './styles/main.scss';

const Root = (props) => {
    return (
        <div className="bg">
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
            {props.children}
        </div>
    )
}

export default Root;