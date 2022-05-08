import './App.css';
import PhotoCard from "./components/PhotoCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from './components/Appbar';
import Aco from "./components/Aco"

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{marginY : 5}}>
        <Grid container spacing={5}>
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </Grid>
      </Container>
       <Container sx={{marginY : 5}}>
        <Grid container spacing={5}>
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </Grid>
      </Container>
      <Aco />
    </div>
  );
}

export default App;
