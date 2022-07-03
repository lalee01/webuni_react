import {Grid , Card , CardActions , Typography , CardContent , Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function OneWallet() {

  return ( 
    <Card sx={{ maxWidth: 345 }} elevation={4} >
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Wallet name:
            </Typography>
            <Typography variant="h5" color="text.secondary">
                Balance:$
            </Typography>
            <Typography variant="h5" color="text.secondary">
                Piece of transaction:
            </Typography>
        </CardContent>
        <CardActions >
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Button variant="contained" fullWidth >More...</Button>
            </Grid>
            <Grid item xs={6} textAlign="center" >
            <Button variant="contained" color="error" fullWidth ><DeleteIcon/></Button>
            </Grid>
        </Grid>
        </CardActions>
    </Card>
  );
}

export default OneWallet;