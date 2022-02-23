import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter();
    const lenderSlug = router.query.lenderName?.toString() || 'Divido';
    const arr = lenderSlug.split("-"); 
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const nameOfTheLender = arr.join(" ");
  return (
    <AppBar
      position="absolute"
      color="primary"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountBalanceIcon />
          </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
           {nameOfTheLender}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
