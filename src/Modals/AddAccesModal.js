import {Dialog, DialogContent, DialogTitle, Grid , Button} from "@mui/material";
import {Form, Formik, Field} from "formik";
import {TextField} from 'formik-mui'
import {AXIOS_METHOD , doApiCall} from '../Hooks/UseApi'

export default function AddAccessModal({onClose , wallet ,refreshNotify}) {

    function validateName(name) {
        if (name === ''){
            return 'There should be name!';
        }
        if (name.length > 80){
            return 'Maximum length of the name should be 80 characters!';
        }
      }

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle textAlign='center'>Add access to wallet</DialogTitle>
            <DialogContent>
                <Formik initialValues={{name:""}} onSubmit={
                    (value, {setFieldError, setSubmitting}) => {
                    setSubmitting(true);
                    doApiCall(AXIOS_METHOD.POST, '/user/search', (data) => {
                        const currentUserId = data
                            doApiCall(AXIOS_METHOD.POST, `/wallet/${wallet}/grant_access`, (_unusedData) => {
                                onClose();
                                refreshNotify()
                            }, (apiError) => {
                                setFieldError('name', apiError);
                            }, {user_id: currentUserId});
                    setSubmitting(false);
                }, (apiError) => {
                    setFieldError('name', apiError);
                    setSubmitting(false);
                }, value);
                }}>
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} alignItems='center' sx={{mt:1}}>
                                <Field component={TextField} name="name" label="Name" type="text" fullWidth validate={validateName}/>
                            </Grid>
                            <Grid item xs={12}>
                            <Button type="submit" variant="contained" fullWidth>Add Access</Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </DialogContent>
        </Dialog>
    )
}