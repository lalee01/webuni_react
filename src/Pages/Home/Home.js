import { useAuth } from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import {Typography} from "@mui/material"

function Home() {

  const navigate = useNavigate()
  const {authToken} = useAuth();

  useEffect(()=>{
    if (authToken !== false) {
      navigate("/wallets")
  }
  },[authToken])

  return (
        <Typography variant="h3" component="div">
          Please Login or Registrate
        </Typography>
  );
}

export default Home;