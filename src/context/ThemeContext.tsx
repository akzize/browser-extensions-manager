import { createContext, useState, type ReactNode } from "react";


// theme context type
interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void
}

// create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// create the provider
const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    function toggleTheme() {
        setTheme(prev => prev == "light" ? "dark" : "light")
        console.log(theme);
        
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}