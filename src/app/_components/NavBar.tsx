import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar sx={{ gap: 4}}>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Family-App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar