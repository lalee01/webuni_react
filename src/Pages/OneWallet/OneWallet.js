import {Grid , Card , CardActions , Typography , CardContent , Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"

function OneWallet({name , balance , id , onDeleteNotify}) {

    const navigate = useNavigate()

    const walletDelete = () =>{
        doApiCall(AXIOS_METHOD.DELETE, `/wallet/${id}`, (data) => {
            console.log(data)
            onDeleteNotify()
        }, (apiError) => {
            console.log(apiError)
        },[])
    }

  return ( 
    <Card elevation={4} >
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Name:{name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                Balance: {balance} $
            </Typography>
        </CardContent>
        <CardActions >
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Button variant="contained" fullWidth onClick={() => {navigate(`/wallet/${id}`)}}>More...</Button>
            </Grid>
            <Grid item xs={6} textAlign="center" >
            <Button variant="contained" color="error" fullWidth startIcon={<DeleteIcon />} onClick={walletDelete} />
            </Grid>
        </Grid>
        </CardActions>
    </Card>
  );
}

export default OneWallet;