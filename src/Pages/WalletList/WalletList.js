import { Grid , LinearProgress} from '@mui/material'
import NewWallet from '../NewWallet/NewWallet';
import OneWallet from '../OneWallet/OneWallet'; 
import { AXIOS_METHOD , useApi } from "./../../Hooks/UseApi"

function WalletList() {
  
   const [wallets , loading , _error , refreshWallets] = useApi(AXIOS_METHOD.GET, '/wallets')

  return ( 
        <Grid container spacing={2}>
          {wallets && wallets?.map((item , key)=> 
            <Grid item xs={12} md={4}>
              <OneWallet 
              key={item.id}
              name={item.name}
              balance={item.balance} 
              id={item.id}
              refreshNotify={refreshWallets}
              access={item.access}
              />
            </Grid>
          )}
          {loading === true && <Grid item xs={12}>
            <LinearProgress/>
          </Grid>}
          {wallets &&
          <Grid item xs={12} md={4}>
            <NewWallet />
          </Grid>
          }
        </Grid>
  );
}

export default WalletList;
