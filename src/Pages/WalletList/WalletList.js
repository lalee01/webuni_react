import { Grid } from '@mui/material'
import NewWallet from '../NewWallet/NewWallet';
import OneWallet from '../OneWallet/OneWallet';
import { AXIOS_METHOD , useApi } from "./../../Hooks/UseApi"

function WalletList() {
   const [wallets , _loading , _error , refreshWallets] = useApi(AXIOS_METHOD.GET, '/wallets')


  return ( 
        <Grid container spacing={2}>
          {wallets && wallets?.map((item , id)=> 
            <Grid item xs={12} md={4}>
              <OneWallet 
              name={item.name} 
              balance={item.balance} 
              id={item.id}
              onDeleteNotify={refreshWallets}
              />
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <NewWallet />
          </Grid>
        </Grid>
  );
}

export default WalletList;
