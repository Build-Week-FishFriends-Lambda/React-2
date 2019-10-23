import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";

const LogForm = styled.div`
  background-color: #333;
  width: 300px;
  color: white;
  margin: auto;
  border-radius: 3px;
  box-shadow: 5px 5px 5px #000;

  input {
    border-radius: 3px;
    padding: 5px;
    margin: 5px;
  }

  button {
    padding: 5px 25px;
    margin: 10px auto;
    background-color: #c7aa8b;
    color: white;
    border-radius: 3px;
  }
`
import axiosWithAuth from "../utils/axiosWithAuth";

const AddLog = ({ errors, touched, values, status, history }) => {


  useEffect(()=>{  
    axiosWithAuth().get("locations/all")
    .then(res => {
      console.log(res)
     })
    .catch(err => console.log(err))  
},[])

  return (
    <LogForm className='LogForm'>
      <h1>User Log</h1>
      <Form className='Formlog'>
        <label>
          Location
          <Field className='fields' value={values.place} type='text' name='place' placeholder='Location' />
        </label>
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
        <br></br>
        <label>
          {' '}
          Fish Count
          <Field className='fields' value={values.fishnum} type='number' name='fishnum' placeholder='0' />
          {touched.fishnum && errors.fishnum && <p className='error'>{errors.fishnum}</p>}
        </label>
        <br></br>
        <label>
          Time Spent
          <Field className='fields' value={values.timespent} type='text' name='timespent' placeholder='Time Spent' />
        </label>
        <br></br>
        <button className='logbutton' type='submit'>
          Submit!
        </button>
      </Form>
    </LogForm>
  );
};



export default withFormik({
  mapPropsToValues({ baittype, fishtypes, fishnum, timespent, place}) {
    return {
      place: place || '',
      baittype: baittype || '',
      fishtypes: fishtypes || '',
      fishnum: fishnum || '',
      timespent: timespent || '',
      author: localStorage.getItem('user') || "",
    };
  },

  handleSubmit(values, { resetForm, setStatus }) {
    

    axiosWithAuth()
      .post('logs/add', values)
      .then(response => {
        setStatus(response.data);
        console.log(response)
        resetForm();
      })
      .catch(error => {
        console.log(values);
        
        console.error('Error', error);
      });
  },



})(AddLog);;
