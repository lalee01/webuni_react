import Menu from './Pages/Menu/Menu';
import Home from './Pages/Home/Home';
import WalletList from './Pages/WalletList/WalletList';
import Page404 from './Pages/Page404/Page404';
import TransactionList from './Pages/TransactionList/TransactionList';
import { Container } from '@mui/system';
import { Route , Routes , Navigate} from 'react-router-dom'
import Providers from './Providers'
import {useAuth} from './Hooks/UseAuth'

function App() {

  function ProtectedPage({children}) {
    const {authToken} = useAuth();
    if (authToken === false) {
        return <Navigate to="/"></Navigate>;
    }

    return children;
}

  return ( 
    <Providers>
      <Menu />
      <Container maxWidth='lg'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/wallets" element={<ProtectedPage><WalletList /></ProtectedPage>} />
          <Route path='/wallet/:id' element={<ProtectedPage><TransactionList /></ProtectedPage>} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Container>
    </Providers>
  );
}

export default App;
