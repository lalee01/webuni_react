import {Dialog, DialogContent, DialogTitle, Grid , Button} from "@mui/material";
import {Form, Formik, Field} from "formik";
import {TextField} from 'formik-mui'

export default function RegModal() {
    return (
        <Dialog open={true}>
            <DialogTitle>Registration</DialogTitle>
            <DialogContent>
                <Formik initialValues={{name:"" , password:"" , rePassword:""}} onSubmit={console.log('Reg')}>
                    <Form>
                        <Grid container spacing={2} sx={{mt: "1px"}}>
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