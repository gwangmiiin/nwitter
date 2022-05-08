import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';

const PhotoCard = () => {
  return (
    <Grid item xs= {3}>
        <Paper elevation={3}>
          <img className='img' src='https://picsum.photos/200/100?random' alt='#' /> 
          <Box padding={1}>
            <Typography variant='subtitle1' component="h2">
              <Link href="#" variant="body2">
                {'사진 설명'}
              </Link>
            </Typography>
            <Rating name='read-only' value={4.5} readOnly precision={0.5}/>
          </Box>
        </Paper>
    </Grid>
  )
}

export default PhotoCard