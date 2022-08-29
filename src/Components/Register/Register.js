import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register now</h1>
            <form action="">
                <input type="text" placeholder='Enter your name' />
                <br />
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter your password' />
                <br />
                <button type='submit'>Button</button>
            </form>
        </div>
    );
};

export default Register;