import React from 'react';
import {useAuth} from "./context/AuthContext";
import Auth from "./modules/auth";
import Application from "./modules/application";


const App = () => {

    const {user, loadingInitial} = useAuth()
    if (loadingInitial) {
        return <h1>This is initial loading going on here</h1>
    }

    return (
        <>
            {user
                ? <Application/>
                : <Auth/>
            }
        </>
    )
}


export default App;
