import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Label } from 'semantic-ui-react';
import axios from "axios";

import axiosWithAuth from '../utils/axiosWithAuth';

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
          <div className='FormContainer'>
            <Form className='Form'>
              <Field value={values.username} className='Fields' type='text' name='username' placeholder='Username' />
              {touched.username && errors.username && <p>{errors.username}</p>}
              <Field value={values.primaryemail} className='Fields' type='text' name='primaryemail' placeholder='Email' />
              {touched.primaryemail && errors.primaryemail && <p>{errors.primaryemail}</p>}
              <Field value={values.pass} className='Fields' type={inputType} name='pass' placeholder='Password' />
              {touched.pass && errors.pass && <p>{errors.pass}</p>}
              <Field
                value={values.passconf}
                className='Fields'
                type={inputType}
                name='passconf'
                placeholder='Confirm Password'
              />
              {touched.passconf && errors.passconf && <p>{errors.passconf}</p>}

              <div>
                <button type='submit' value='Submit'>
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  };

export default withFormik({
    mapPropsToValues({ firstName, lastName, username, primaryemail, pass, passconf }) {
      return {
        username: username || '',
        primaryemail: primaryemail || '',
        pass: pass || '',
        passconf: passconf || '',
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Username is required'),
      primaryemail: Yup.string().required('Email is required'),
      pass: Yup.string().required('A password is required'),
      passconf: Yup.string().required('Please validate your password')
        .test('', 'Passwords do not match', function(value) {
          return this.parent.pass === value;
        }),
    }),
    handleSubmit(values, formikBag) {
      const {username, primaryemail, pass } = values;
      const postValues = {username, primaryemail, password: pass };
      console.log(postValues);
      axios
        .post('http://fishfriends.herokuapp.com/users/user', postValues)
        .then(response => {
          console.log(formikBag)
          console.log(response);
          formikBag.props.history.push("/login");
        })
        .catch(error => console.error('Error', error));
    },
  })(SignupForm);