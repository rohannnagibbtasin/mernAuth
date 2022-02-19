import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

export default function LogoutBtn() {
    const history = useHistory();
    const { getLoggedIN } = useContext(AuthContext);
    async function logOut() {
        await axios.get('https://mernnauthh.herokuapp.com/auth/logout');
        getLoggedIN();
        history.push('/login');
    }
    return (
        <div>
            <button type="button" onClick={logOut}>
                Log out
            </button>
        </div>
    );
}
