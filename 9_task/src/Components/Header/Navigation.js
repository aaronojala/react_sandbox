import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
    <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav>
            <Nav.Item>
            <Nav.Link><Link className="link" to="/">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link className="link" to="/blog">Blog</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link className="link" to="/new_post">New Post</Link></Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
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

export default Navigation;