import React  from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav">
            <Link to="/" className="nav-tite">
                Francisco Cardenás
            </Link>
            <ul>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children,...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className = { isActive ? "active" : ""}>
            <Link to={to} {...props}>
                { children }
            </Link>
        </li>
    )
}

export default Navbar;