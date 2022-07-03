import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Menu from './Pages/Menu/Menu';
import OneWallet from './Pages/OneWallet/OneWallet';
import WalletList from './Pages/WalletList/WalletList';
import Page404 from './Pages/Page404/Page404';
import NewTransaction from './Pages/NewTransaction/NewTransaction';
import { Container } from '@mui/system';

function App() {

  return ( 
    <BrowserRouter>
      <Menu />
      <Container maxWidth='lg'>
        <Routes>
          <Route path="/" exact element={<WalletList />} />
          <Route path='/wallet/:id' element={<OneWallet />} />
          <Route path='/transaction' element={<NewTransaction />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
