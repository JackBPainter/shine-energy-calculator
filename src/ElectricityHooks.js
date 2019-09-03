import { useState } from 'react';
import CalculateUsedUnits from './CalculateUsedUnits.js';

const UseElectricityForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      callback();
    }
    const handleChangeInputs = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.id]: event.target.value}));
    }
    return {
      handleSubmit,
      handleChangeInputs,
      inputs
    };
   
  }

export default UseElectricityForm;