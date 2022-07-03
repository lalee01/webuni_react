import {Grid} from '@mui/material'
import NewWallett from '../NewWallett/NewWallett';
import OneWallet from '../OneWallet/OneWallet';

function WalletList() {

  return ( 
        <Grid container spacing={3} >
          <Grid item xs={4}>
            <OneWallet />
          </Grid>
          <Grid item xs={4}>
            <OneWallet />
          </Grid>
          <Grid item xs={4}>
            <OneWallet />
          </Grid>
          <Grid item xs={4}>
            <NewWallett />
          </Grid>
        </Grid>
  );
}

export default WalletList;
