import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function OnboardingForm({ values, errors, touched }) {
  return (
    <div>
      <h2>Formik Form Component</h2>
      <Form>
        <Field type='text' name='firstname' placeholder='First Name' />

        <Field type='text' name='lastname' placeholder='Last Name' />

        <Field type='password' name='password' placeholder='Password' />
        
        <label>
          <Field type='checkbox' name='termsofservice' />
          Accept our Terms of Service
        </label>

        <button type='submit'>Submit Form</button>
      </Form>
    </div>
  )
}

export default OnboardingForm;