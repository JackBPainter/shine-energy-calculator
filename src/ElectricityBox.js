import React from 'react';
import UseElectricityForm from './ElectricityHooks.js';

export default function ElectricityBox() {
    const { handleChangeInputs, handleSubmit} = UseElectricityForm();
        return (
        <form>
            <div>
            <label>Electricity meter reading</label>
            <input 
                className = ""
                type = "number"
                id = "Electricity Meter"
                min = "100"
                placeholder = "11000"
                onChange = {handleChangeInputs}
                onSubmit = {handleSubmit} />
            </div>
            <button type="submit">Calculate electricity cost</button>
        </form>
    );
}

