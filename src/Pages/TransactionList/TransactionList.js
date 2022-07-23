import { Grid , Typography , Paper , Button , LinearProgress} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import NewTransaction from "../NewTransaction/NewTransaction";
import AccessControl from "../../Components/AccessControl";

function TransactionList() {

    const {id} = useParams()
    const [transaction , setTransaction] = useState([])
    const [needRefresh , setNeedRefresh] = useState(0)
    const [loading , setLoading] = useState(true)

    const refreshNotify = () =>{
        setNeedRefresh(e=> e + 1)
    }

    const deleteTransaction = (targetId) =>{
      doApiCall(AXIOS_METHOD.DELETE, `/transaction/${targetId}`, (data) => {
         refreshNotify()
      })
    }

    useEffect(()=>{
        doApiCall(AXIOS_METHOD.POST, '/transactions', (data) => {
            setTransaction(data)
            setLoading(false)
        }, (apiError) => {
            console.log(apiError)
            setLoading(false)
        }, {wallet_id:id});
    },[needRefresh])

  return (
      <Grid container spacing={2} sx={{mt:1}}>
        {loading && <Grid item xs={12}>
            <LinearProgress/>
        </Grid>
        }
        {!loading &&
        <Grid item xs={12}>
            <NewTransaction refreshNotify={refreshNotify}/>
            <AccessControl/>
        </Grid>
        }
        {transaction && transaction?.transactions?.map((item)=>
            <Grid item xs={12}>
                <Paper elevation={2} sx={{pb:1}}>
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
                            <Button variant="contained" color="error" fullWidth id={item.id} onClick={() => deleteTransaction(item.id)}><DeleteIcon /></Button>
                        </Grid> 
                    </Grid>
                </Paper>
            </Grid>
        )}
    </Grid>
  );
}

export default TransactionList;