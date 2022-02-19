import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { getLoggedIN } = useContext(AuthContext);
    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };
            await axios.post('https://mernnauthh.herokuapp.com/auth/login', loginData);
            getLoggedIN();
            history.push('/customer');
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <h1>Log in to your account</h1>
            <form onSubmit={login}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
