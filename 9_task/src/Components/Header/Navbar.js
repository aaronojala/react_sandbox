import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <Nav className="justify-content-center" defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/blog">Blog</Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/new_post">New Post</Link>
            </Nav.Item>
        </Nav>
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/blog">Blog</Link>
        //         </li>
        //         <li>
        //             <Link to="/new_post">New Post</Link>
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default Navbar;