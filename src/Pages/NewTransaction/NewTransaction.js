import {Formik , Field , Form} from 'formik'
import {Card , Button , Grid , CardContent} from '@mui/material'
import {TextField} from 'formik-mui'
import { AXIOS_METHOD , doApiCall} from "./../../Hooks/UseApi"
import { useParams } from 'react-router-dom'

function NewTransaction({refreshNotify}) {

  /// sx={{ p:2, '&:last-child': { pb: 2 }}}

  const {id} = useParams()

  function validateTitle(title) {
    if (title === ''){
        return 'There should be title!';
    }
    if (title.length > 80){
        return 'Maximum length of the title should be 80 characters!';
    }
  }

  function validateAmount(amount){
      if (amount === ''){
          return 'Amount has to be more than 0';
      }
  }

  return ( 
    <Grid item xs={12}>
      <Formik initialValues={{title:"" , amount:""}} onSubmit={
        (value, {setFieldError, setSubmitting}) => {
        setSubmitting(true);
        doApiCall(AXIOS_METHOD.PUT, '/transactions', (data) => {
            setSubmitting(false);
            refreshNotify()
        }, (apiError) => {
          console.log(apiError)
            setFieldError('title', apiError);
            setSubmitting(false);
        },{wallet_id:id , ...value});
        }}>
        <Form>
          <Card elevation={2} >
            <CardContent >
              <Grid container spacing={1} sx={{ p:1, '&:last-child': { pb: 0 }}} alignItems='center'>
                <Grid item xs={12} md={6} >
                  <Field 
                  type="text" 
                  placeholder="Title" 
                  name="title" 
                  component={TextField} 
                  label="Title"
                  size="medium" 
                  fullWidth 
                  validate={validateTitle}/>
                </Grid>
                <Grid item xs={12} md={3} > 
                  <Field type="number" placeholder="Amount" name="amount" component={TextField} label="Amount" fullWidth validate={validateAmount}/>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button type="submit" variant="contained" fullWidth>New Transaction</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Form>
      </Formik>
    </Grid>
  );
}

export default NewTransaction;