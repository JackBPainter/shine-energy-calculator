import React from 'react';

export default function CalculateEleUnits(props) {
    
    let ans = props.elec - 11000 ;
    let bill= 0;
    if( ans <= 100) {
        bill = (ans * .10);
    } else {
        bill = (ans -100) * .20 + 10;
    }
    return ( <> £{bill} </>);
}