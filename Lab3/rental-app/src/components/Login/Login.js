import React, { useContext } from 'react';
import './Login.css';
import { ReferenceDataContext } from "../../ReferenceDataContext";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const { userLogged, setUserLogged } = useContext(ReferenceDataContext);
    let login = "";
    let password = "";

    return (
        <div className="login-page">
            <form className='login-form'>
                <h3>Login:</h3>
                <input
                    type="text"
                    name="name"
                    className='input-box'
                    onChange={(event) => login = event.target.value}
                />
                <h3>Password:</h3>
                <input
                    type="password"
                    name="name"
                    className='input-box'
                    onChange={(event) => password = event.target.value}
                />
                <input
                    type="submit"
                    value="Login"
                    className='login-button'
                    onClick={() => {
                        const user = props.users.find(user => user.login === login && user.password === password);
                        if (user) {
                            setUserLogged(user);
                            navigate('/');
                        } else {
                            <div className="alert alert-danger" role="alert">
                                Incorrect login or password
                            </div>
                            alert('Incorrect login or password');
                        }
                    }}
                />
                <input
                    type="submit"
                    value="Back"
                    className='back-button'
                    onClick={() => {
                        navigate('/');
                    }}
                />

            </form>
        </div>
    );
}

export default Login;