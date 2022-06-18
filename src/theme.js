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
          main: '#495867',
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
          main: "#FFCD8F"
        },
        secondary: {
          main: "#495867"
        },
        background: {
          default: "#000000",
          paper: "#080D12",
        },
        common: {
          white: "#F8F7F8"
        },
        text: {
          primary: "#FFCD8F",
        },
        action: {
          active: "#FFCD8F"
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
