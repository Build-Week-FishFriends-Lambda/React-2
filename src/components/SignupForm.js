import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Label } from 'semantic-ui-react';
import styled from "styled-components";

import axiosWithAuth from '../utils/axiosWithAuth';

const FormContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .Form {
    background-color: #333;
    padding: 10px;
    border-radius: 3px;
    color: white;
    box-shadow: 5px 5px 5px #000;

    input {
      padding: 5px;
      margin: 5px;
      border-radius: 3px;
    }

    button {
      padding: 5px 25px;
      margin-top: 10px;
      background-color: #c7aa8b;
      color: white;
      border-radius: 3px;
    }
  }
`

const SignupForm = ({ values, errors, touched, status, history, handleUserObject }) => {
    const [inputType, setInputType] = useState('password');

    function hidePass() {
      if (inputType === 'password') {
        setInputType('text');
      } else {
        setInputType('password');
      }
    }

    return (
      <div className='html'>
        <div className='background'>
          <FormContainer className='FormContainer'>
            <Form className='Form'>
              <Field value={values.firstName} className='Fields' type='text' name='firstName' placeholder='First Name' />
              {touched.firstname && errors.firstname && <p>{errors.firstname}</p>}
              <br></br>
              <Field value={values.lastName} className='Fields' type='text' name='lastName' placeholder='Last Name' />
              {touched.lastname && errors.lastname && <p>{errors.lastname}</p>}
              <br></br>
              <Field value={values.username} className='Fields' type='text' name='username' placeholder='Username' />
              {touched.username && errors.username && <p>{errors.username}</p>}
              <br></br>
              <Field value={values.email} className='Fields' type='text' name='email' placeholder='Email' />
              {touched.email && errors.email && <p>{errors.email}</p>}
              <br></br>
              <Field value={values.pass} className='Fields' type={inputType} name='pass' placeholder='Password' />
              {touched.pass && errors.pass && <p>{errors.pass}</p>}
              <br></br>
              <Field
                value={values.passconf}
                className='Fields'
                type={inputType}
                name='passconf'
                placeholder='Confirm Password'
              />
              {touched.passconf && errors.passconf && <p>{errors.passconf}</p>}
              <Label>
                <Field type='checkbox' name='showPass' onClick={() => hidePass()} />
                Show Password
              </Label>
              <div>
                <button type='submit' value='Submit'>
                  Submit
                </button>
              </div>
            </Form>
          </FormContainer>
        </div>
      </div>
    );
  };

export default withFormik({
    mapPropsToValues({ firstName, lastName, username, email, pass, passconf }) {
      return {
        firstName: firstName || '',
        lastName: lastName || '',
        username: username || '',
        email: email || '',
        pass: pass || '',
        passconf: passconf || '',
      };
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().required('Email is required'),
      pass: Yup.string().required('A password is required'),
      passconf: Yup.string().required('Please validate your password')
        .test('', 'Passwords do not match', function(value) {
          return this.parent.pass === value;
        }),
    }),
    handleSubmit(values, { setStatus }) {
      const { firstName, lastName, username, email, pass } = values;
      const postValues = { firstName, lastName, username, email, password: pass };
  
      axiosWithAuth()
        .post('/auth/register/ADDAPIENDPOINT', postValues)
        .then(response => {
          setStatus(response.data);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.userObject));
        })
        .catch(error => console.error('Error', error));
    },
  })(SignupForm);