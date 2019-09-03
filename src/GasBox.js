import React from 'react';
import UseGasForm from './GasHooks.js';

export default function GasBox() {
    const {inputs, handleChangeInputs, handleSubmit} = UseGasForm();
        return (
        <form>
            <div>
            <label>Gas meter reading</label>
            <input type = "number"
                id = "Gas Meter"
                min = "11000"
                placeholder = "11000"
                onChange = {handleChangeInputs}
                onSubmit = {handleSubmit} />
            </div>
            <button type="submit">Calculate gas cost</button>
        </form>
    );
}