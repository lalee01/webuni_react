import {Formik , Field} from 'formik'
import {Card , Button , Grid , CardActions , CardContent} from '@mui/material'
import {TextField} from 'formik-mui'

function NewTransaction() {

  return ( 
    <Formik initialValues={{title:"" , amount:""}} onSubmit={console.log("submit")}>
      <Card sx={{ maxWidth: 345 }} elevation={4} >
        <CardContent >
          <Grid textAlign="center" >
            <Field type="text" placeholder="Title" name="title" component={TextField} label="Title" />
          </Grid>
          <br></br>
          <Grid textAlign="center" >
            <Field type="text" placeholder="Amount" name="amount" component={TextField} label="Amount" />
          </Grid>
        </CardContent>
        <CardActions >
          <Button variant="contained" fullWidth >New Transaction</Button>
        </CardActions>
      </Card>
    </Formik>
  );
}

export default NewTransaction;