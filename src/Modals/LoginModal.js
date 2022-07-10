import {Dialog, DialogContent, DialogTitle, Grid , Button} from "@mui/material";
import {Form, Formik, Field} from "formik";
import {TextField} from 'formik-mui'
import {AXIOS_METHOD , doApiCall} from './../Hooks/UseApi'
import {useAuth} from './../Hooks/UseAuth'

export default function LoginModal({onClose}) {

    const {handleLoginResult} = useAuth();

    return (
    <Dialog open={true} onClose={onClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <Formik initialValues={{name:"" , password:""}} onSubmit={
                (value, {setFieldError, setSubmitting}) => {
                setSubmitting(true);
                doApiCall(AXIOS_METHOD.POST, '/login', (data) => {
                    console.log(data)
                    handleLoginResult(data);
                    setSubmitting(false);
                    onClose();
                }, (apiError) => {
                    setFieldError('name', apiError);
                    setSubmitting(false);
                }, value);
            }}>
                <Form>
                    <Grid container spacing={2} sx={{mt:1}}>
                        <Grid item xs={12}>
                            <Field component={TextField} name="name" label="Username" type="text" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field component={TextField} name="password" label="Password" type="password" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth>Login</Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </DialogContent>
    </Dialog>
    )
}