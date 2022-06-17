import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light') ?
      // light theme
      {
        primary: {
          main: '#3A444E',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
        background: {
          default: "#F8F7F8",
          paper: "#F8F7F8"
        },
        common: {
          white: "#F8F7F8"
        },
        text: {
          primary: "#3A444E"
        }
      } :
      // dark theme
      {
        primary: {
          main: "#D0B555"
        },
        secondary: {
          main: "#495867"
        },
        background: {
          default: "#080D12",
          paper: "#080D12",
        },
        common: {
          white: "#F8F7F8"
        },
        text: {
          primary: "#D0B555",
        },
        action: {
          active: "#D0B555"
        }
      },
  },
  typography: {
    fontFamily: [
      'Alegreya Sans SC',
      'Roboto',
      'sans-serif'
    ].join(','),
    fontWeightRegular: 300
  }
})

export default getDesignTokens;
