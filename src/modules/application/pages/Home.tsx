import React from 'react';
import {useAuth} from "../../../context/AuthContext";

const Home = () => {

    const {logout} = useAuth()

    return (
        <div className="container">
            <div className="col-md-12 mt-4">
                <button className="btn btn-primary" onClick={logout}>Log Out</button>
            </div>
        </div>
    );
};

export default Home;
