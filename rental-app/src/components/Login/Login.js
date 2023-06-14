import React, { useContext, useState } from 'react';
import './Login.css';
import { ReferenceDataContext } from "../../ReferenceDataContext";
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle, loginWithGithub, useUser } from "../../Firebase/UserService";

const Login = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const { userLogged, setUserLogged } = useContext(ReferenceDataContext);
    const navigate = useNavigate();
    const appUser = useUser();

    const handleLoginWithEmail = () => {
        const user = props.users.find(
            user => user.login === login && user.password === password
        );
        if (user) {
            setUserLogged(user);
            navigate('/');
        } else {
            <div className="alert alert-danger" role="alert">
                Incorrect login or password
            </div>
            alert('Incorrect login or password');
        }
    }


    const handleLoginWithGoogle = () => {
        loginWithGoogle().then(
            () => {
                navigate("/")
            });
    }

    const handleLoginWithGitHub = () => {
        loginWithGithub().then(
            () => {
                navigate("/")
            });
    }

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <div className="login-page">
            <form className='login-form'>
                <h3>Login:</h3>
                <input
                    type="text"
                    name="name"
                    className='input-box'
                    onChange={(event) => setLogin(event.target.value)}
                />
                <h3>Password:</h3>
                <input
                    type="password"
                    name="name"
                    className='input-box'
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button
                    type='button'
                    className='login-button'
                    onClick={handleLoginWithEmail}
                >
                    Login
                </button>

                <h5>or</h5>

                <div className='login-buttons-panel'>

                    <button
                        className='login-button'
                        onClick={handleLoginWithGoogle}
                        type='button'
                    >
                        Login with Google
                    </button>

                    <button
                        className='login-button'
                        onClick={handleLoginWithGitHub}
                    >
                        Login with Github
                    </button>

                </div>


                <button
                    value="Back"
                    className='back-button'
                    onClick={navigateHome}
                >
                    Back
                </button>

            </form>
        </div >
    );
}

export default Login;