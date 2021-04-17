import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from "react";


interface User {
    email: string
}

interface AuthContextType {
    user?: User;
    login: (user: User) => void;
    logout: () => void;
    loadingInitial: boolean
}

interface Props {
    children: ReactNode
}


const writeUserToStorage = (data: User | null) => {
    localStorage.setItem("user", JSON.stringify(data));
}

const readUserFromStorage = () => {
    const object = localStorage.getItem("user")
    return object ? JSON.parse(object) : null
}


const AuthContext = createContext<AuthContextType>({} as AuthContextType)


export const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState<User | null>();
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

    // load the user from storage and check if user exists
    // if user exists we can do additional authorization check for example refresh authorization token
    useEffect(() => {
        const user: User | null = readUserFromStorage()
        setUser(user)
        setLoadingInitial(false)
    }, []);


    // after successful login from Login component saves the the user
    // in storage and tells the auth context to save the user in it's state
    const login = (user: User) => {
        setUser(user)
        writeUserToStorage(user)
    }


    // after successful logout from Logout component removes the the user
    // from storage and tells the auth context there is no user logged in
    const logout = () => {
        setUser(null)
        writeUserToStorage(null);
    }


    // Make the provider update only when it should.
    // We only want to force re-renders if the user,
    // loading or error states change.
    //
    // Whenever the `value` passed into a provider changes,
    // the whole tree under the provider re-renders, and
    // that can be very costly! Even in this case, where
    // you only get re-renders when logging in and out
    // we want to keep things very performant.
    const memoValue = useMemo(
        () => ({
            user,
            login,
            logout,
            loadingInitial
        }),
        [user, loadingInitial]
    );

    // @ts-ignore
    return <AuthContext.Provider value={memoValue}>
        {!loadingInitial && children}
    </AuthContext.Provider>

}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export const useAuth = () => {
    return useContext(AuthContext);
}
