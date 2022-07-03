import { Button , Box , Typography , Toolbar , AppBar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Menu() {

  const navigate = useNavigate()

  return ( 
    <Box sx={{ flexGrow: 1 , mb: "10px" }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" sx={{mr:"60px"}} onClick={() => {navigate("/")}}>
          Home
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wallet name:
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Balance:
          </Typography>
          <Button color="inherit" onClick={() => {navigate("/transaction")}}>New transaction</Button>
          <Button color="inherit">Registration</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;
