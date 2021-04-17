import React from 'react';
import {useAuth} from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";


const App = () => {

    const {user, loadingInitial} = useAuth()
    console.log("user", user)
    console.log("loadingInitial", loadingInitial)
    if (loadingInitial) {
        return <h1>This is initial loading going on here</h1>
    }

    return (
        <>
            {user
                ? <Home/>
                : <Login/>
            }
        </>
    )
}


export default App;
