import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const AddLog = ({ errors, touched, values, status, history }) => {


  useEffect(() => status && history.goBack(), [status, history]);

  return (
    <div className='LogForm'>
      <h1>User Log</h1>
      <Form className='Formlog'>
        <Field className='fields' value={values.baitType} type='text' name='baitType' placeholder='Bait' />
        {touched.baitType && errors.baitType && <p className='error'>{errors.baitType}</p>}
        <label>
          Fish Name
          <Field className='fields' value={values.fishId} type='text' name='fishId' placeholder='Fish' />
          {touched.fishId && errors.fishId && <p className='error'>{errors.fishId}</p>}
        </label>
        <label>
          {' '}
          Fish Count
          <Field className='fields' value={values.fishCount} type='number' name='fishCount' placeholder='0' />
          {touched.fishCount && errors.fishCount && <p className='error'>{errors.fishCount}</p>}
        </label>
        <label>
          Time Spent
          <Field className='fields' value={values.timeSpent} type='number' name='timeSpent' placeholder='Time' />
        </label>
        <label>
          Time of Day
          <Field className='fields' value={values.timeOfDay} type='time' name='timeOfDay' placeholder='08:00' />
        </label>

        <button className='logbutton' type='submit'>
          Submit!
        </button>
      </Form>
    </div>
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

  handleSubmit(values, { setStatus }) {
    const { baitType, fishId, fishCount, timeSpent, timeOfDay } = values;
    const postValues = { baitType, fishId, fishCount, timeSpent, timeOfDay };

    axiosWithAuth()
      .post('POST NEW LOG ENDPOINT', postValues)
      .then(response => {
        setStatus(response.data);
        
      })
      .catch(error => console.error('Error', error));
  },



})(AddLog);;
