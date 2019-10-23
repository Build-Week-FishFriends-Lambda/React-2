import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import axiosWithAuth from '../utils/axiosWithAuth';

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
`

const LoginContainer = styled.div`
  width: 300px;
  border-radius: 3px;
  background-color: #333;
  box-shadow: 5px 5px 5px #000;
  padding: 10px;
  
  input {
    padding: 5px;
    border-radius: 3px;
    margin: 10px;
  }

  button {
    padding: 5px 25px;
    margin-top: 10px;
    background-color: #c7aa8b;
    color: white;
    border-radius: 3px;
  }

  a {
    color: white;
  }
`

const LoginForm = ({ values, errors, touched, status, history, handleUserObject }) => {
  const [inputType, setInputType] = useState('password');
  useEffect(() => {
    status && handleUserObject(status.userObject);
    status && history.push('/map');
  });
  function hidePass() {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }
  return (
    <Center className='login'>
      <LoginContainer className='FormContainer'>
        <Form className='Form'>
          <Field
            value={values.username}
            className='login-field'
            type='text'
            name='username'
            placeholder='Username'
          />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <br></br>
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
      </LoginContainer>
    </Center>
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
    const postValues = { username, password: pass };
    axiosWithAuth()
      .post('/auth/login/CHANGETOREALENDPOINT', postValues)
      .then(response => {
        setStatus(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.userObject));
      })
      .catch(error => console.error('Error', error));
  },
})(LoginForm);
