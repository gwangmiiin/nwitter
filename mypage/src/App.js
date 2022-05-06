import './App.css';
import {Button , ButtonGroup} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react'

function Header() {
  return(
    <header>
      <h1>Welcome</h1>
      <Button variant='outlined'>Update</Button>
    </header>
  )
}

function Nav(){
  return(
    <nav style = {{border : '1px solid gray'}}>
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
    <article style = {{border : '1px solid gray'}}>
      <h2>Welcome</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
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
      <Container fixed>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs = {2} >
            <Nav />
          </Grid>
          <Grid item xs = {10}>
            <Artticle />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
