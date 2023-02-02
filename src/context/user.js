import React, { useState } from "react";

const UserContext = React.createContext();

// create provider component

function UserProvider({ children }) {
    // setting up context value to be stateful
    const [user, setUser] = useState(null);
    
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };