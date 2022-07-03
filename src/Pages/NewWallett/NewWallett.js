import { Grid , Card , CardActions , CardContent , Button } from "@mui/material";
import { TextField } from "formik-mui"
import { Formik , Field } from "formik";

function NewWallett() {

  return ( 
        <Formik initialValues={{name:""}} onSubmit={console.log("submit")}>
            <Card sx={{ maxWidth: 345 }} elevation={4} >
                <CardContent >
                    <Grid textAlign="center" >
                    <Field type="text" placeholder="Wallett name" name="name" component={TextField} label="Wallett name" />
                    </Grid>
                </CardContent>
                <CardActions >
                    <Button variant="contained" fullWidth >Add Wallett</Button>
                </CardActions>
            </Card>
        </Formik>
  );
}

export default NewWallett;