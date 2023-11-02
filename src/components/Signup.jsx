import { Box, Button, TextField } from '@mui/material'


import React, { useState } from 'react'
import "./css/signup.css"

const Signup = () => {

  const [Fname,setName]=useState('')
  return (
    <>

  <Box 
      component="form"
      sx={{     position: 'absolute',
      top: '5em',
      left: '30%',
      

      p: 1,
      m: 1,
        '& .MuiTextField-root': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
      
    <h4>Welcome to New User {Fname}</h4>
      <div className='forms'>
        <TextField
        
          id="outlined-error"
          label="Firstname"
          
        />
        <TextField
       
          id="outlined-error-helper-text"
          label="Phone No"
         
        
        />
      </div>
      <div>
        <TextField
       
          id="filled-error"
          label="User / Email "
        
        />
       <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
     
      </div>
      
      <div>
      
      </div>
      <Button className='btn' variant="contained" color="primary" size='large'  type='submit' sx={{position: 'relative',
      top: '1em',
      left: '23%',padding:'15px 80px'}} >
        Create Account
      </Button>
    </Box>
    </>
  )
}


export default Signup