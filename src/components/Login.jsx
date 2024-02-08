import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './login.module.css';

export default function Login(props) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { 
          m: "0 auto", 
          marginTop: 4,
          width: '25ch', 
          display: "flex", 
          justifyContent: "center" }    
       }}
      className = {styles.form}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <Button variant='contained' onClick={()=> props.setIsLoggedIn(true)}>Login</Button>

    </Box>

  );
}