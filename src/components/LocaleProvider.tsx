"use client";

import React, { createContext, useContext } from "react";

interface LocaleProviderProps {
    children: React.ReactNode;
    locale: string;
}

// Create a context for the locale
const LocaleContext = createContext<string | undefined>(undefined);

// Custom hook to use the locale context
export const useLocale = () => {
    return useContext(LocaleContext);
};

const LocaleProvider = ({ children, locale }: LocaleProviderProps) => {
    return (
        <LocaleContext.Provider value={locale}>
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleProvider;
