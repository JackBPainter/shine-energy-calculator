import React from 'react';
import CalculateUsedUnits from './CalculateUsedUnits.js';

export default function ElectricityBox() {
    let elecInput = 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        elecInput = document.getElementById('Electricity Meter').value;
    }
        return (
        <form>
            <div>
            <label>Electricity meter reading</label>
            <input 
                className = ""
                type = "number"
                id = "Electricity Meter"
                min = "11000"
                placeholder = "11000"
            />
            </div>
            <button type="submit"onSubmit={(e) => handleSubmit(e)}>Calculate electricity cost</button>
            <div>
                <label>Your Electricity bill £ {<CalculateUsedUnits elecReading={elecInput}/>}</label>
            </div>
        </form>
        
            
        
    );
}

