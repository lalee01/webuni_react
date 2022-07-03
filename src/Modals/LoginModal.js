import {Dialog, DialogContent, DialogTitle, Grid , Button} from "@mui/material";
import {Form, Formik, Field} from "formik";
import {TextField} from 'formik-mui'

export default function LoginModal() {
    return (
    <Dialog open={true}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
            <Formik initialValues={{name:"" , password:""}} onSubmit={console.log('Login')}>
                <Form>
                    <Grid container spacing={2} sx={{mt: "1px"}}>
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