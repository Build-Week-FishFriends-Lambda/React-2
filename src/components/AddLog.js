import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from "../utils/axiosWithAuth";

const AddLog = ({ errors, touched, values, status, history }) => {


  useEffect(() => status && history.goBack(), [status, history]);

  return (
    <div className='LogForm'>
      <h1>User Log</h1>
      <Form className='Formlog'>
        <label>
          Bait Type
        <Field className='fields' value={values.baittype} type='text' name='baittype' placeholder='Bait' />
        {touched.baittype && errors.baittype && <p className='error'>{errors.baittype}</p>}
        </label>
        <label>
          Fish Name
          <Field className='fields' value={values.fishtypes} type='text' name='fishtypes' placeholder='Fish' />
          {touched.fishtypes && errors.fishtypes && <p className='error'>{errors.fishtypes}</p>}
        </label>
        <label>
          {' '}
          Fish Count
          <Field className='fields' value={values.fishnum} type='number' name='fishnum' placeholder='0' />
          {touched.fishnum && errors.fishnum && <p className='error'>{errors.fishnum}</p>}
        </label>
        <label>
          Time Spent
          <Field className='fields' value={values.timespent} type='text' name='timespent' placeholder='Time Spent' />
        </label>

        <button className='logbutton' type='submit'>
          Submit!
        </button>
      </Form>
    </div>
  );
};



export default withFormik({
  mapPropsToValues({ baittype, fishtypes, fishnum, timespent}) {
    return {
      baittype: baittype || '',
      fishtypes: fishtypes || '',
      fishnum: fishnum || '',
      timespent: timespent || '',
      user: null,
    };
  },

  handleSubmit(values, { setStatus }) {
    

    axiosWithAuth()
      .post('logs/add', values)
      .then(response => {
        setStatus(response.data);
        console.log(response)
      })
      .catch(error => {
        console.log(values);
        
        console.error('Error', error);
      });
  },



})(AddLog);;
