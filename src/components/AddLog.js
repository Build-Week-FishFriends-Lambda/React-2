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

const AddLog = ({ errors, touched, values, status, history }) => {


  useEffect(() => status && history.goBack(), [status, history]);

  return (
    <LogForm className='LogForm'>
      <h1>User Log</h1>
      <Form className='Formlog'>
        <label>
        Bait Used<br></br>
        <Field className='fields' value={values.baitType} type='text' name='baitType' placeholder='Bait' />
        {touched.baitType && errors.baitType && <p className='error'>{errors.baitType}</p>}
        </label>
        <br></br>
        <label>
          Fish Name<br></br>
          <Field className='fields' value={values.fishId} type='text' name='fishId' placeholder='Fish' />
          {touched.fishId && errors.fishId && <p className='error'>{errors.fishId}</p>}
        </label>
        <br></br>
        <label>
          {' '}
          Fish Count<br></br>
          <Field className='fields' value={values.fishCount} type='number' name='fishCount' placeholder='0' />
          {touched.fishCount && errors.fishCount && <p className='error'>{errors.fishCount}</p>}
        </label>
        <br></br>
        <label>
          Time Spent<br></br>
          <Field className='fields' value={values.timeSpent} type='number' name='timeSpent' placeholder='Time' />
        </label>
        <br></br>
        <label>
          Time of Day<br></br>
          <Field className='fields' value={values.timeOfDay} type='time' name='timeOfDay' placeholder='08:00' />
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
  mapPropsToValues({ baitType, fishId, fishCount, timeSpent, timeOfDay }) {
    return {
      baitType: baitType || '',
      fishId: fishId || '',
      fishCount: fishCount || '',
      timeSpent: timeSpent || '',
      timeOfDay: timeOfDay || '',
    };
  },

//   handleSubmit(values, { setStatus }) {
//     const { baitType, fishId, fishCount, timeSpent, timeOfDay } = values;
//     const postValues = { baitType, fishId, fishCount, timeSpent, timeOfDay };

//     axiosWithAuth()
//       .post('POST NEW LOG ENDPOINT', postValues)
//       .then(response => {
//         setStatus(response.data);
        
//       })
//       .catch(error => console.error('Error', error));
//   },



})(AddLog);;
