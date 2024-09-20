import React, { createContext, useState, useEffect } from 'react';

// Create the UserContext
// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component that wraps the application and provides auth-related state
export const AuthProvider = ({ children }) => {
    // State to manage the current user's login status
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));

    // Check localStorage for token and update login status
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    // Function to handle user login
    const login = (token) => {
        localStorage.setItem('authToken', token); // Store token in localStorage
        setIsLoggedIn(true);
    };

    // Function to handle user logout
    const logout = () => {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        setIsLoggedIn(false);
    };

    // Context value to be provided
    const contextValue = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
    return React.useContext(AuthContext);
};