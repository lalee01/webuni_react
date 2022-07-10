import { Grid } from '@mui/material'
import { useEffect, useState } from 'react';
import NewWallet from '../NewWallet/NewWallet';
import OneWallet from '../OneWallet/OneWallet';
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"

function WalletList() {

  const [wallets , setWallets] = useState([])

  useEffect(()=>{
    doApiCall(AXIOS_METHOD.GET, '/wallets', (data) => {
      setWallets(data)
    })
  },[])

  return ( 
        <Grid container spacing={2}>
          {wallets?.map((item , id)=> 
            <Grid item xs={12} md={4}>
              <OneWallet name={item.name} balance={item.balance} id={item.id}/>
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <NewWallet />
          </Grid>
        </Grid>
  );
}

export default WalletList;
