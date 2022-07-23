import { Chip , Paper , Button , Typography} from "@mui/material";
import { AXIOS_METHOD ,  doApiCall} from "./../Hooks/UseApi"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import {MODALS , useModals} from './../Hooks/UseModal'

 function AccessControl() {

    const {id} = useParams()
    const {showModal} = useModals();
    const [walletInfo , setWalletInfo] = useState([])
    const [needRefresh , setNeedRefresh] = useState(0)

    const refreshNotify = () => {
        setNeedRefresh(e=> e + 1)
    }

    useEffect(()=>{
        doApiCall(AXIOS_METHOD.GET, `/wallet/${id}`, (data) => {
            setWalletInfo(data)
            console.log("Refress Notify")
        }, (apiError) => {
            console.error(apiError)
        });
    },[needRefresh])

    const accessDelete = (targetId) =>{
        doApiCall(AXIOS_METHOD.POST, `/wallet/${id}/remove_access`, (_unusedData) => {
            refreshNotify()
        }, (apiError) => {
            console.error(apiError)
        },{user_id:targetId})
            refreshNotify()
        }

    return (
    <Paper sx={{mt:1 , p:1}} elevation={2}>
        <Typography variant="h6">Shared with: 
            {walletInfo?.access?.map((item)=>
                <Chip
                sx={{ml:1}}
                key={item.id}
                id={item.id}
                label={item.name}
                onDelete={() => accessDelete(item.id)}
                deleteIcon={<DeleteIcon/>}
                variant="outlined"
                />
                )}
            <Button><AddIcon onClick={()=>{showModal(MODALS.ACCESS ,{wallet:id , refreshNotify})}}/></Button>
        </Typography>
    </Paper>
    )
}
export default AccessControl