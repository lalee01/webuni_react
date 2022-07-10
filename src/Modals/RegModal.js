import {Dialog, DialogContent, DialogTitle, Grid , Button} from "@mui/material";
import {Form, Formik, Field} from "formik";
import {TextField} from 'formik-mui'
import {AXIOS_METHOD , doApiCall} from './../Hooks/UseApi'
import {useAuth} from './../Hooks/UseAuth'

export default function RegModal({onClose}) {

    const {handleLoginResult} = useAuth();

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Registration</DialogTitle>
            <DialogContent>
                <Formik initialValues={{name:"" , password:"" , rePassword:""}}
                    onSubmit={(value, {setFieldError, setSubmitting}) => {
                        setSubmitting(true);
                        const onFailure = (apiError) => {
                            setFieldError('name', apiError);
                            setSubmitting(false);
                        };

                        doApiCall(AXIOS_METHOD.POST, '/reg', (data) => {
                            console.log(data)
                            doApiCall(AXIOS_METHOD.POST, '/login', (data) => {
                                handleLoginResult(data);
                                setSubmitting(false);
                                onClose();
                            }, onFailure, value);
                        }, onFailure, value);
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
                                <Field component={TextField} name="rePassword" label="Password again" type="password" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" fullWidth>Register</Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik> 
            </DialogContent>
        </Dialog>
    )
}