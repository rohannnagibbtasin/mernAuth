import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();
function AuthContextProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    async function getLoggedIN() {
        const loggedInRes = await axios.get('https://mernnauthh.herokuapp.com/auth/loggedIn');
        setLoggedIn(loggedInRes.data);
    }
    useEffect(() => {
        getLoggedIN();
    }, []);
    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIN }}>{children}</AuthContext.Provider>
    );
}
export default AuthContext;
export { AuthContextProvider };
// eslint-disable-next-line prettier/prettier

