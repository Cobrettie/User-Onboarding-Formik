import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import UserList from '../UserList';

const OnboardingForm = ({ values, errors, touched, status }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status])
  }, [status])

  console.log('status', status);

  return (
    <div>
      <h2>Formik Form Component</h2>
      <Form>
        <div><Field type='text' name='firstname' placeholder='First Name' /></div>
        {errors.firstname && touched.firstname ? <div>{errors.firstname}</div> : null}

        <div><Field type='text' name='lastname' placeholder='Last Name' /></div>
        {errors.lastname && touched.lastname ? <div>{errors.lastname}</div> : null}

        <div><Field type='password' name='password' placeholder='Password' /></div>
        {errors.password && touched.password ? <div>{errors.password}</div> : null}
        
        <div>
          <label>
            <Field type='checkbox' name='termsofservice' />
            Accept our Terms of Service
          </label>
        </div>
        {errors.termsofservice ? <div>{errors.termsofservice}{console.log(errors)}</div> : null}

        <div></div>
        <button type='submit'>Submit Form</button>
      </Form>
      <div>
        <UserList users={users} />
      </div>
    </div>
  )
}

const FormikOnboardingForm = withFormik({

  
  mapPropsToValues({ firstname, lastname, password, termsofservice }) {
    return {
      firstname: firstname || '',
      lastname: lastname || '',
      password: password || '',
      termsofservice: termsofservice || false
    }
  },

  validationSchema: Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'First name too short')
      .required('First name required'),
    lastname: Yup.string()
      .min(2, 'Last name too short')
      .required('Last name required'),
    password: Yup.string()
      .min(2, 'Password must be 2 characters or longer')
      .required('Password required'),
    termsofservice: Yup.boolean()
      // .boolean()
      .oneOf([true], 'Must accept Terms of Service')
  }),

  handleSubmit(values, formikBag) {
    console.log('values', values)
    console.log('formikBag', formikBag)
    axios 
      .post('https://reqres.in/api/users', {values})
      .then(response => {
        console.log(response)
        formikBag.setStatus(response.data)
        formikBag.resetForm()
      })
      .catch(err => console.log(err))
  }
})(OnboardingForm);

export default FormikOnboardingForm;