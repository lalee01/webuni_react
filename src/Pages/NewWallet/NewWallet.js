import { Grid , Card , CardActions , CardContent , Button } from "@mui/material";
import { TextField } from "formik-mui"
import { Formik , Field , Form} from "formik";
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"
import { useNavigate } from "react-router-dom";

function NewWallet() {

    const navigate = useNavigate()

  return ( 
    <Formik initialValues={{name:""}} onSubmit={
        (value, {setFieldError, setSubmitting}) => {
        setSubmitting(true);
        doApiCall(AXIOS_METHOD.PUT, '/wallet', (data) => {
            console.log(data)
            setSubmitting(false);
            navigate('/')
        }, (apiError) => {
            setFieldError('name', apiError);
            setSubmitting(false);
        }, value);
    }}>
        <Form>
            <Card elevation={4}>
                <CardContent >
                    <Grid textAlign="center" >
                        <Field type="text" placeholder="Wallett name" name="name" component={TextField} label="Wallett name" fullWidth />
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button type="submit" variant="contained" fullWidth >Add Wallet</Button>
                </CardActions>
            </Card>
        </Form>
    </Formik>
  );
}

export default NewWallet;