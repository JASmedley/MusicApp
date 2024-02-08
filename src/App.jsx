import { useState } from 'react';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Header from './components/header.jsx' ;
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard';
import './App.css';

// TO DO: Swap out Login for Dashboard when a user clicks login button

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function isLoggedIn()

  return (
    <>
    <Header/>
    {isLoggedIn === true ? <Dashboard/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    {/* <Button onClick={() => {console.log("clicked")}}>Click me</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="contained" href="https://google.com" endIcon={<SendIcon />}>Link</Button>   */}
    </>
  )
}

export default App
