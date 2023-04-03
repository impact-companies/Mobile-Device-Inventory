import * as React from "react"
import type { PageProps } from "gatsby"

// MUI imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#042D63',
            paper: '#c0cce0',
        },
        primary: {
            main: '#95abd0',
        },
        secondary: {
            main: '#ac0037',
        },
    },
});

const Layout = ({ children }: any): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Layout