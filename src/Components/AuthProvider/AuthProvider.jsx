import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {

        setToggle(!toggle);
    }



    const window = {
         
        toggle,
        setToggle,
        handleToggle
   
    }

    return (
        <AuthContext.Provider value={window}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;