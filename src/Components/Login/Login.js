import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please login</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={singInWithGoogle}>Google sign in</button>
            </div>
            <form action="">
                <input type="text" placeholder='Enter your name' />
                <br />
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
};

export default Login;