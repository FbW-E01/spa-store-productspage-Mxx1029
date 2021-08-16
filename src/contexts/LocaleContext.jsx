import React, { useState, useContext } from 'react';

export const LocaleContext = React.createContext();

export function LocaleContextProvider(props) {
    const [ locale, setLocale] = useState("en-us");

    return (
        <LocaleContext.Provider value={[locale, setLocale]}>
            {props.children}
        </LocaleContext.Provider>
    )
}

export const useLocaleContext = () => {
    return useContext(LocaleContext);
}

