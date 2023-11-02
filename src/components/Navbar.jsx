import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 , m:6}}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ReactApp
          </Typography>
          <Button color="inherit" style={{color:"yellow"}}>
          <Link to={'/'} style={{color:"White", textDecoration:'none'}}>
          Home
          
          </Link>
          
          </Button>
          <Button color="inherit">
            

          <Link to={'/Signup'} style={{color:"White", textDecoration:'none'}}>
          Signup
          
          </Link>
          </Button>

          <Button color="inherit">
            

            <Link to={'/Login'} style={{color:"White", textDecoration:'none'}}>
           Login
            
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
