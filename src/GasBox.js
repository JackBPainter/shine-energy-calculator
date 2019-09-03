import React from 'react';
import CalculateUsedUnits from './CalculateUsedUnits.js';

export default function GasBox() {
    let gasInput = 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        gasInput = document.getElementById('Gas Meter').value;
    }
        return (
        <form>
            <div>
            <label>Gas meter reading</label>
            <input 
                className = ""
                type = "number"
                id = "Gas Meter"
                min = "11000"
                placeholder = "11000"
            />
            </div>
            <button type="submit"onSubmit={(event) => handleSubmit(event)}>Calculate gas cost</button>
            <div>
                <label>Your Gas bill £{<CalculateUsedUnits gasReading={gasInput}/>}</label>
            </div>
        </form>
        
            
        
    );
}

