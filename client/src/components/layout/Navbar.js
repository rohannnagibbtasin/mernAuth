import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import LogoutBtn from '../auth/LogoutBtn';

export default function Navbar() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <div>
            <Link to="/">Home</Link>
            {loggedIn ? (
                <>
                    <Link to="/customer">Customers</Link>
                    <LogoutBtn />
                </>
            ) : (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Log in</Link>
                </>
            )}
        </div>
    );
}
