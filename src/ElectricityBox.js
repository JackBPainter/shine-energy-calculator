import React, { useState } from 'react';
import CalculateEleUnits from './CalculateEleUnits.js';

export default function ElectricityBox() {
    
    const [elecInput, setElecInput] = useState('');
    const [electricityAmount, setElectricityAmount] = useState(0);

    const handleChangeOnElectricity = e => {
        setElecInput(e.target.value);  
      };
    const handleElectricityClick = e => {
        e.preventDefault();
        setElectricityAmount(elecInput);
      };

      

     
        return (
        <form>
            <div>
            <label>Electricity meter reading</label>
            <input 
                type = "number"
                id = "Electricity Meter"
                min = "11000"
                value = {elecInput}
                placeholder = "11000"
                onChange = {handleChangeOnElectricity}
            />
            </div>
            <button onClick ={handleElectricityClick} > Calculate electricity cost</button>
            <div>
            {electricityAmount ?(
                <label>Your Electricity bill £{<CalculateEleUnits elec = {electricityAmount} />} </label>)
                : <> </>}
            </div> 
        </form>
        
            
        
    );
}

