import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import axiosWithAuthLogin from '../utils/axiosWithAuthLogin';

const LoginForm = ({ values, errors, touched, status, history, handleUserObject }) => {
  const [inputType, setInputType] = useState('password');

  function hidePass() {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }
  return (
    <div className='login'>
      <div className='FormContainer'>
        <Form className='Form'>
          <Field
            value={values.username}
            className='login-field'
            type='text'
            name='username'
            placeholder='Username'
          />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field value={values.pass} className='login-field' type={inputType} name='pass' placeholder='Password' />
          {touched.pass && errors.pass && <p>{errors.pass}</p>}
          <div className='buttoncontainer'>
            <button type='submit' value='Submit'>
              Login
            </button>
            <p>Or</p>
            <Link to='/signup' className='link-button'>
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, pass }) {
    return {
      username: username || '',
      pass: pass || '',
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    pass: Yup.string().required('Enter your password'),
  }),
  handleSubmit(values, { setStatus }) {
    
    const { username, pass } = values;
    const postValues = { username: username, password: pass };
    console.log("LOGIN SUBMITTED", username, pass);
    axiosWithAuthLogin()
      .post('/login', `grant_type=password&username=${postValues.username}&password=${postValues.password}`)
      .then(response => {
        console.log(response);
        setStatus(response.data);
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user', postValues.username);
      })
      .catch(error => {
        console.log(postValues);
        console.error('Error', error)
      });
  },
})(LoginForm);
