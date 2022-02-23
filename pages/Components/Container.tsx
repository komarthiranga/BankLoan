import Container from '@mui/material/Container';
import React from 'react';

const BodyContainer:React.FC<any> = ({children}) => {
    return(
        <Container component="main" maxWidth="sm" sx={{ mb: 4, marginTop: 5}}>
            {children}
        </Container>    
    );
}

export default BodyContainer;