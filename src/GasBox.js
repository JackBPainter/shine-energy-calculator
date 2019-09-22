import React, { useState } from 'react';
import CalculateGasUnits from './CalculateGasUnits.js'

export default function GasBox() {
    const [gasInput, setGasInput] = useState('');
    const [gasAmount, setGasAmount] = useState(0);

    const handleChangeOnGas = e => {
        setGasInput(e.target.value);
    };
    const handleGasClick = e => {
        e.preventDefault();
        setGasAmount(gasInput);
    };
    return (
        <form>
            <div>
                <label>Gas meter reading</label>
                <input
                    className=""
                    type="number"
                    id="Gas Meter"
                    min="11000"
                    value={gasInput}
                    placeholder="11000"
                    onChange={handleChangeOnGas}
                />
            </div>
            <button onClick={handleGasClick}>Calculate gas cost</button>
            <div>
                {gasAmount ? (
                    <label>Your Gas bill £{<CalculateGasUnits gasReading={gasAmount} />}</label>)
                    : <> </>}
            </div>
        </form>



    );
}

