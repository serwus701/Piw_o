import React, { createContext, useState } from "react";

const ReferenceDataContext = createContext();

const ReferenceDataContextProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(null);

    return (
        <ReferenceDataContext.Provider value={{ userLogged, setUserLogged }}>
            {children}
        </ReferenceDataContext.Provider>
    );
};

export { ReferenceDataContext, ReferenceDataContextProvider };