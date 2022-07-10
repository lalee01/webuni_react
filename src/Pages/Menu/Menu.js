import { Button , Box , Typography , Toolbar , AppBar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {MODALS , useModals} from './../../Hooks/UseModal'
import {useAuth} from './../../Hooks/UseAuth'

function Menu() {

  const navigate = useNavigate()
  const {showModal} = useModals();
  const {authToken, logout} = useAuth();

  return (
    <Box sx={{ flexGrow: 1 , mb:2 }}>
      <AppBar position="static" >
        <Toolbar>
          <Button color="inherit" onClick={() => {navigate("/")}}>
            Home
          </Button>            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          {authToken === false && (<>
            <Button color="inherit" onClick={() => {
              showModal(MODALS.LOGIN);
            }}>Login</Button>
            <Button color="inherit" onClick={() => {
              showModal(MODALS.REG);
            }}>Registration</Button>
          </>)}
          {authToken !== false && (<>
            <Button color="inherit" onClick={logout}>Logout</Button>
          </>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;
