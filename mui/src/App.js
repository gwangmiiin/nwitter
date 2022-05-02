import './App.css';
import {Button , ButtonGroup} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react'

function Header() {
  return(
    <header>
      <h1>Welcome</h1>
    </header>
  )
}

function Nav(){
  return(
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
}

function Artticle() {
  const [open, setOpen] = React.useState(false);
  return(
    <article>
      <h2>Welcome</h2>
      <ButtonGroup>
      <Button variant='outlined' onClick={() => {setOpen(true)}}>Create</Button>
      <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined' style = {{marginLeft : '10px'}}>Delete</Button>
      <Dialog open = {open}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outline'>OK</Button>
          <Button variant='outline' onClick={() => {setOpen(false)}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </article>

  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Artticle />
    </div>
  );
}

export default App;
