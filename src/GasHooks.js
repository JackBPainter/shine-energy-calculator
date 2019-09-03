import { useState } from 'react';

const UseGasForm = (callback) => {
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

export default UseGasForm;