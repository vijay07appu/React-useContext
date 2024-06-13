import React from 'react'
import { useAuth } from './AuthContext'
import Login from './Login';
import Logout from './Logout';

function Example() {
    const { isAuthenticated } = useAuth();
    return (
        <>
            
            <div>
            <h1>Welcome to the Auth Context Example</h1>
            {isAuthenticated ? (
                <>
                    <h1>Hi welcome , </h1>
                    <p>You are logged in!</p>
                    <Logout />
                </>
            ) : (
                <>
                    <h1>Hi you are not welcom now .....</h1>
                    <p>You are not logged in.</p>
                    <Login />
                </>
            )}
            </div>
        </>


    )
}

export default Example
