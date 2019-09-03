import React, { useState } from 'react';

function MeterBoxs() {
    const [value, setValue] useState=(11000)
    return (
        <div>
            <label>Gas meter reading</label>
            <input type = "number"
                id = "Gas Meter"
                value = "11000"
                onChange = {} />
            <label>Electricity meter reading</label>
            <input type = "number"
                id = "Electricity Meter"
                value = "11000"
                onChange = {} />
        </div>
    )
}