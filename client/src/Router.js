import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Customer from './components/customer/Customer';
import Navbar from './components/layout/Navbar';
import AuthContext from './context/AuthContext';

export default function Router() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                {loggedIn ? (
                    <Route exact path="/customer">
                        <Customer />
                    </Route>
                ) : (
                    <>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}
