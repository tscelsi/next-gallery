import React from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import getDesignTokens from '../theme';

export const ColourModeContext = React.createContext({ toggleColorMode: () => { } });

export default function Theme({ children }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState(prefersDarkMode ? 'dark': 'light');
    const colourMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ColourModeContext.Provider value={colourMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColourModeContext.Provider>
    )
}