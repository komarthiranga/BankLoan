import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
const Layout: React.FC<any> = ({children}) => {
    const theme = createTheme({
        palette: {
            mode: 'dark',
          },
        });
    return (
        <ThemeProvider theme={theme}>
             <CssBaseline />
             <Header />
             {children}
        </ThemeProvider>    

    )
}

export default Layout;

