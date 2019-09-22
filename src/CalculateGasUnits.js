import React from 'react';

export default function CalculateUsedUnits(props) {
    
    let ans = props.gasReading - 11000 ;
    let bill= 0;
    if( ans <= 100) {
        bill = (ans * .10);
    } else {
        bill = (ans -100) * .20 + 10;
    }
    return ( <> ${bill} </>);
}