import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark'); // Default to dark to avoid flash

    useEffect(() => {
        const root = window.document.documentElement;
        
        const initialTheme = (() => {
            if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                return localStorage.getItem('theme') as Theme;
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        })();
        
        setTheme(initialTheme);

        // Clean up previous theme classes
        root.classList.remove('light', 'dark');
        // Add the correct theme class
        root.classList.add(initialTheme);
    }, []);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        root.classList.remove(theme);
        root.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};