import React from 'react'
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function MainContainer({ children }) {
    const theme = useTheme();
    return (
        <Box sx={{ height: "calc(100vh - 64px)", backgroundColor: theme.palette.background.default }}>
            {children}
        </Box>
    )
}
