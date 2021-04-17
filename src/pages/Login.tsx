import React, {useState} from 'react';
import {useAuth} from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const {login} = useAuth()

    const onSubmitClick = () => {
        login({
            email: email
        })
    }

    return (
        <div className="container">

            <div className="col-md-12 mt-4">

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>

                        <input type="email"
                               className="form-control"
                               id="exampleInputEmail1"
                               value={email}
                               onChange={(event) => setEmail(event.target.value)}
                               aria-describedby="emailHelp"
                               placeholder="Enter email"/>

                        <small id="emailHelp"
                               className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="exampleInputPassword1">Password</label>*/}
                    {/*    <input type="password" className="form-control" id="exampleInputPassword1"*/}
                    {/*           placeholder="Password"/>*/}
                    {/*</div>*/}

                </form>
                <button className="btn btn-primary" onClick={onSubmitClick}>
                    Submit
                </button>
            </div>
        </div>

    );
};

export default Login;
