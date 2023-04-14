import * as React from "react"
import type { PageProps } from "gatsby"

// MUI imports
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/header';

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
                <Header/>
                {children}
        </ThemeProvider>
    )
}

export default Layout