import React from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { useTheme } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { ColourModeContext } from './Theme';

export default function DarkLightModeButton() {
    const theme = useTheme();
    const colourMode = React.useContext(ColourModeContext)
    return <IconButton aria-label="delete" onClick={colourMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? <Brightness1Icon /> : <Brightness3Icon />}
    </IconButton>
}
