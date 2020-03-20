import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function OnboardingForm({ values, errors, touched }) {
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
      .min(6, 'Password must be 6 characters or longer')
      .required('Password required'),
    termsofservice: Yup.boolean()
      // .boolean()
      .oneOf([true], 'Must accept Terms of Service')
  }),

  handleSubmit(values) {
    console.log(values)
  }
})(OnboardingForm);

export default FormikOnboardingForm;