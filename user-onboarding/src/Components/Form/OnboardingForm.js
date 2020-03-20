import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function OnboardingForm({ values, errors, touched }) {
  return (
    <div>
      <h2>Formik Form Component</h2>
      <Form>
        <div>{touched.firstname && errors.firstname}</div>
        <Field type='text' name='firstname' placeholder='First Name' />

        <div>{touched.lastname && errors.lastname}</div>
        <Field type='text' name='lastname' placeholder='Last Name' />

        <div>{touched.password && errors.password && <p>{errors.password}</p>}</div>
        <Field type='password' name='password' placeholder='Password' />
        
        {/* <div>{touched.termsofservice && errors.termsofservice && <p>{errors.termsofservice}</p>}</div> */}
        <label>
          <Field type='checkbox' name='termsofservice' />
          Accept our Terms of Service
        </label>

        <button type='submit'>Submit Form</button>
      </Form>
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
      // .firstname('Please enter your first name')
      .required('First name required'),
    lastname: Yup.string()
      // .lastname('Please enter your last name')
      .required('Last name required'),
    password: Yup.string()
      .min(6, 'Password must be 6 characters or longer')
      .required('Password required'),
    termsofservice: Yup.object()
      // .boolean()
      // .oneOf([true], 'Must accept Terms of Service')
  }),

  handleSubmit(values) {
    console.log(values)
  }
})(OnboardingForm);

export default FormikOnboardingForm;