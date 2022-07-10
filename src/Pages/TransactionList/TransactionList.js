import { Grid , Typography , Paper , Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import NewTransaction from "../NewTransaction/NewTransaction";

function TransactionList() {

    const {id} = useParams()
    const [transaction , setTransaction] = useState([])

  useEffect(()=>{
    doApiCall(AXIOS_METHOD.POST, '/transactions', (data) => {
        setTransaction(data)
        console.log(transaction)
    }, (apiError) => {
        console.log(apiError)
    }, {wallet_id:id});
  },[])

  const deleteTransaction = (e) =>{
    doApiCall(AXIOS_METHOD.DELETE, `/transaction/${e.target.id}`, (data) => {
        console.log(data)
    })
  }

  return (
      <Grid container spacing={2} sx={{mt:1}}>
        <Grid item xs={12}>
            <NewTransaction />
        </Grid>
        {transaction?.transactions?.map((item)=>
            <Grid item xs={12}>
                <Paper elevation={4} sx={{pb:1}}>
                    <Grid container spacing={1} sx={{pr:1 , pl:1}}>
                        <Grid item xs={12} md={6} >
                            <Typography variant="h6" component="div">
                                Title: {item.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" component="div">
                            Amount: {item.amount}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}  >
                            <Button variant="contained" color="error" fullWidth startIcon={<DeleteIcon />} id={item.id} onClick={deleteTransaction} />
                        </Grid> 
                    </Grid>
                </Paper>
            </Grid>
        )}
    </Grid>
  );
}

export default TransactionList;