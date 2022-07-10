import {Formik , Field , Form} from 'formik'
import {Card , Button , Grid , CardContent} from '@mui/material'
import {TextField} from 'formik-mui'
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"
import { useParams } from 'react-router-dom'

function NewTransaction() {
  
  const {id} = useParams()

  return ( 
    <Formik initialValues={{title:"" , amount:""}} onSubmit={
      (value, {setFieldError, setSubmitting}) => {
      setSubmitting(true);
      doApiCall(AXIOS_METHOD.PUT, '/transactions', (data) => {
          console.log(data)
          setSubmitting(false);
      }, (apiError) => {
        console.log(apiError)
          setFieldError('title', apiError);
          setSubmitting(false);
      },{wallet_id:id , ...value});
      }}>
      <Form>
        <Card elevation={4} sx={{mb:1}}>
          <CardContent >
            <Grid container spacing={1} >
              <Grid item xs={12} md={6} >
                <Field type="text" placeholder="Title" name="title" component={TextField} label="Title" fullWidth />
              </Grid>
              <Grid item xs={12} md={2} > 
                <Field type="number" placeholder="Amount" name="amount" component={TextField} label="Amount" fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <Button type="submit" variant="contained" fullWidth>New Transaction</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Form>
    </Formik>
  );
}

export default NewTransaction;